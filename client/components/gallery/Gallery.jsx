// @flow

import React, { PureComponent } from "react";
import { connect } from "react-redux";

//
import axios from "axios";
import { URL } from "../other/constants";

// import { requestToApi } from "../../store/store.jsx";

import PhotoItem from "./PhotoItem.jsx";
import Spinner from "../other/Spinner.jsx";
import Button from "../form/Button.jsx";
// import { ArrayFromArrayLike } from "../../utils/utils.jsx";

import { fetchPhotos, likePhoto } from "../../actions/galleryActionCreators";

// import styles from '../sass/blocks/gallery/gallery.scss';

type Props = {
  storePhotos: Array<AboutPhotoData>,
  storeNoMore: boolean,
  saveGallery: Function,
  savePhotoLike: Function,
  fetchFirstPhotos: Function
};

type State = {
  loadingStatus: LoadingStatusType,
  loadedSection: number,
  photos: Array<AboutPhotoData>,
  noMore: boolean,
  buttonType: "button" | "link"
};

const requestToApi = axios.create({
  baseURL: "/api",
  timeout: 5000
});

// TODO: реализовать кнопку как ссылку, добавив новый роут-хэндлер.
// ссылка заменится на кнопку в componentDidMount

// Состояние лайка должно храниться НА СЕРВЕРЕ, поскольку привязано к аккаунту. Соответственно,
// при обновлении страницы и новой подзагрузке состояние лайка просто считывается из только
// что подзагруженных данных, поэтому не хранится в store(!).
// Таким образом, при новой отрисовке компонента лайк сбрасывается (имеет срок жизни компонента на странице)

const sectionSize = 6;

class Gallery extends PureComponent<Props, State> {
  state = {
    loadingStatus: "",
    loadedSection: 0,
    photos: [],
    noMore: false,
    buttonType: "link"
  };

  componentDidMount() {
    this.showFirstSection();
  }

  onLikeHandler = (id: string, liked: boolean) => {
    this.likePhoto(id, liked);
    this.props.savePhotoLike(id, liked);
  };

  likePhoto = (id: string, liked: boolean) => {
    this.setState(prevState => {
      const photos = prevState.photos.map(photo => {
        if (photo.id === id) {
          return {
            ...photo,
            liked,
            likes: liked === true ? photo.likes + 1 : photo.likes - 1
          };
        }
        return photo;
      });
      return {
        photos
      };
    });
  };

  loadPhotos = async () => {
    const start = this.state.loadedSection * sectionSize;
    const end = start + sectionSize;

    try {
      const res = await requestToApi.get(`/photos?start=${start}&end=${end}`);

      this.setState(prevState => {
        let { loadedSection } = prevState;

        // Смещаем указатель загруженной секции, если ответ пришел непустым / не нужно?!
        if (res.data.photos.length !== 0) {
          loadedSection += 1;
        }

        return {
          loadingStatus: "loaded",
          photos: [...prevState.photos, ...res.data.photos],
          loadedSection,
          noMore: res.data.noMore
        };
      });
    } catch (err) {
      if (err.response.data) {
        const res = err.response;
        this.setState(prevState => {
          let { loadedSection } = prevState;

          // Смещаем указатель загруженной секции, если ответ пришел непустым / не нужно?!
          if (res.data.photos.length !== 0) {
            loadedSection += 1;
          }

          return {
            loadingStatus: "loaded",
            photos: [...prevState.photos, ...res.data.photos],
            loadedSection,
            noMore: res.data.noMore
          };
        });
      }
      this.setState({
        loadingStatus: "failed"
      });
      console.log("smth wrong with loading photos", err);
    }
  };

  loadFirstPhotos = async () => {
    const res = await this.props.fetchFirstPhotos();
    // если ответ пришел успешно и фото есть в хранилище
    if (this.props.storePhotos) {
      this.setState({
        photos: this.props.storePhotos,
        loadingStatus: "loaded",
        loadedSection: Math.floor(this.props.storePhotos.length / sectionSize)
      });
    } else {
      this.setState({
        loadingStatus: "failed"
      });
    }
  };

  // при загрузке в state первой секции пытаемся взять ее из хранилища
  showFirstSection = async () => {
    this.setState({ loadingStatus: "loading" });

    // если в хранилище пусто или рендер-сервер не смог подгрузить данные,
    // немедленно фетчим на клиенте
    if (!this.props.storePhotos || this.props.storePhotos.length === 0) {
      const res = await this.props.fetchFirstPhotos();
      // если успешно
      if (this.props.storePhotos) {
        this.setState({
          photos: this.props.storePhotos,
          loadingStatus: "loaded",
          loadedSection: Math.floor(this.props.storePhotos.length / sectionSize)
        });
      } else {
        //если и клиент не смог
        this.setState({
          loadingStatus: "failed"
        });
      }
    } else {
      // иначе (в хранилище есть фото) загрузим из хранилища
      this.setState({
        photos: this.props.storePhotos,
        loadingStatus: "loaded",
        loadedSection: Math.floor(this.props.storePhotos.length / sectionSize)
      });
    }
  };

  showMorePhotos = () => {
    this.setState({ loadingStatus: "loading" });
    this.loadPhotos();
  };

  render() {
    // первые фото всегда хранятся в store - они могут приехать с рендер-сервера и "кэшатся" для удобства.
    // Их может быть и более 1 секции, если запрос произошел до того, как приехал бандл - TODO
    const { storePhotos } = this.props;
    // далее все фото могут храниться в state - их незачем кэшировать
    const { loadingStatus, photos } = this.state;

    // Если рендерящий сервер сразу сообщил, что больше нечего грузить -
    // присвоить это значение локальной переменной, чтобы не отрисовывать кнопку, когда не нужно
    const noMore = this.props.storeNoMore || this.state.noMore;

    // меняется только на клиенте, и там же имеет смысл
    let loadingTemplate;
    switch (loadingStatus) {
      case "loading":
        loadingTemplate = <Spinner />;
        break;
      case "loaded":
        loadingTemplate = null;
        break;
      case "failed":
        loadingTemplate = (
          <div className="gallery__loading-failed">
            <span>Не удалось загрузить фотографии.</span>
          </div>
        );
        break;
      default:
        loadingTemplate = null;
    }

    // если сервер прислал ответ "noMore", сообщить об этом, отрисовав сообщение вместо конпки
    let buttonTemplate;
    if (noMore) {
      buttonTemplate = (
        <div className="gallery__no-more-block">
          <span>Больше нет фотографий для загрузки</span>
        </div>
      );
    } else
      buttonTemplate = (
        <Button
          label="Загрузить еще"
          onClick={this.showMorePhotos}
          specStyles="gallery__btn"
          disabled={loadingStatus === "loading"}
          type={this.state.buttonType}
        />
      );

    // определяем, откуда будем отрисовывать
    // Если в state компонента ничего нет (пустой массив photos),
    // отрисовывам из store.
    // Если и тот массив пустой - это ненадолго, клиентский компонент скачает его заново
    // присваивание пустого массива - защита от ошибок
    let templatePhotos;
    if (photos.length === 0) {
      templatePhotos = storePhotos || [];
    } else {
      templatePhotos = photos || [];
    }

    return (
      <section className="gallery">
        <h2 className="visually-hidden">Галерея фотографий</h2>
        <div className="gallery__inner">
          <section className="gallery__photos">
            {templatePhotos.map(photo => (
              <PhotoItem
                data={photo}
                key={photo.id}
                onLikeHandler={this.onLikeHandler}
                containerClassName="gallery__photo-item"
              />
            ))}
          </section>
          <section className="gallery__footer">
            {buttonTemplate}
            {loadingTemplate}
          </section>
        </div>
      </section>
    );
  }
}

const mapStateToProps = ({ gallery: { photos, noMore } }) => ({
  storePhotos: photos,
  storeNoMore: noMore
});

const mapDispatchToProps = (dispatch: Function) => ({
  // в случае перехода на эту страницу с клиентского роутера,
  // подгружает первые фотографии и сохраняет их в хранилище для быстрого доступа
  fetchFirstPhotos() {
    return dispatch(fetchPhotos());
  },

  savePhotoLike(id: string, liked: boolean) {
    dispatch(likePhoto(id, liked));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery);
