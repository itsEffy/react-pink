// @flow

import React, { PureComponent } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { URL } from "../extra/constants";

import PhotoItem from "./PhotoItem";
import Spinner from "../extra/Spinner";
import Button from "../form/Button";
import { ArrayFromArrayLike } from "../utils/utils";

import {
	loadGalleryData,
	likePhoto,
	addGalleryData
} from "../actions/galleryActionCreators";

import styles from "../sass/blocks/gallery/gallery.scss";

type Props = {
	storeGallery: Array<AboutPhotoData>,
	saveGallery: Function,
	savePhotoLike: Function
};

type State = {
	loadingStatus: LoadingStatusType,
	loadedSection: number,
	photos: Array<AboutPhotoData>
};

// Самая последняя секция фотографий (показываемая первой) хранится в store на клиенте - чтобы
// при обновлении страницы или переходах был какой-то контент, и только для этого.
// От идеи хранения большого кличества фото в store пришлось отказаться для оптимизации памяти
// (и демонстрации подзагрузки)
// Состояние лайка должно храниться НА СЕРВЕРЕ, поскольку привязано к аккаунту. Соответственно,
// при обновлении страницы и новой подзагрузке состояние лайка просто считывается из только
// что подзагруженных данных, поэтому не хранится в store(!).
// Таким образом, при новой отрисовке компонента лайк сбрасывается (имеет срок жизни компонента на странице)

const sectionSize = 6;

class Gallery extends PureComponent<Props, State> {
	state = {
		loadingStatus: "",
		loadedSection: 0,
		photos: []
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
						likes:
							liked === true ? photo.likes + 1 : photo.likes - 1
					};
				}
				return photo;
			});
			return {
				photos
			};
		});
	};

	loadPhotos = (saveToStore: boolean) => {
		const start = this.state.loadedSection * sectionSize;
		const end = start + sectionSize;
		axios
			.get(`${URL}/photos?_start=${start}&_end=${end}`)
			.then(response => {
				this.setState(prevState => {
					// Смещаем указатель загруженной секции
					const loadedSection = prevState.loadedSection + 1;
					return {
						loadingStatus: "loaded",
						photos: [...prevState.photos, ...response.data],
						loadedSection
					};
				});
				// полученные данные сохраним в store
				if (saveToStore) {
					this.props.saveGallery(response.data);
				}
			})
			.catch(error => {
				this.setState({
					loadingStatus: "failed"
				});
				console.log("smth wrong", error);
			});
	};

	// при загрузке первой секции пытаемся взять ее из хранилища
	showFirstSection = () => {
		this.setState({ loadingStatus: "loading" });

		// если там пусто, немедленно начинаем загрузку. Иначе загрузить прямо из хранилища
		if (this.props.storeGallery.length === 0) {
			this.loadPhotos(true);
		} else {
			this.setState({
				photos: this.props.storeGallery,
				loadingStatus: "loaded",
				loadedSection: Math.floor(
					this.props.storeGallery.length / sectionSize
				)
			});
		}
	};

	// дальнейшие фото не сохраняем, но функция написана так,
	// что всегда можно передать параметр true и сохранить.
	// В данной "локальной" версии механизма лайков сохранение также приведет к сохранению лайков.
	showMorePhotos = () => {
		this.setState({ loadingStatus: "loading" });
		this.loadPhotos(false);
	};

	render() {
		console.log(this.state.photos);
		const { loadingStatus, photos } = this.state;
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
					<div className={styles["gallery__loading-failed"]}>
						<span>
							Не удалось загрузить фотографии. Проверьте
							соединение
						</span>
					</div>
				);
				break;
			default:
				loadingTemplate = null;
		}
		return (
			<section className={styles["gallery"]}>
				<h2 className="visually-hidden">Галерея фотографий</h2>
				<div className={styles["gallery__inner"]}>
					<section className={styles["gallery__photos"]}>
						{photos.map(photo => (
							<PhotoItem
								data={photo}
								key={photo.id}
								onLikeHandler={this.onLikeHandler}
								containerClassName={
									styles["gallery__photo-item"]
								}
							/>
						))}
					</section>
					<section className={styles["gallery__footer"]}>
						<Button
							label="Загрузить еще"
							onClick={this.showMorePhotos}
							specStyles={styles["gallery__btn"]}
							disabled={loadingStatus === "loading"}
						/>
						{loadingTemplate}
					</section>
				</div>
			</section>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	storeGallery: state.gallery
});

const mapDispatchToProps = (dispatch: Function, ownProps) => ({
	saveGallery(photos: Array<AboutPhotoData>) {
		dispatch(addGalleryData(photos));
	},

	savePhotoLike(id: string, liked: boolean) {
		dispatch(likePhoto(id, liked));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
