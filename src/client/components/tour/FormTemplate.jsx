// @flow

import React, { Component } from "react";
import { connect } from "react-redux";

import Input from "../form/Input";
import CheckboxGroup from "../form/CheckboxGroup";
import RadioGroup from "../form/RadioGroup";
import TextArea from "../form/TextArea";
import Button from "../form/Button";
import { Fieldset } from "../form/FormTemplates";

import SuccessBlock from "../form/SuccessBlock";
import Description from "../extra/Description";
import FormNote from "../form/FormNote";
import Spinner from "../extra/Spinner";

import getLayoutState from "../utils/getLayoutState";
import { resetFormData } from "../actions/formActionCreators";
import { checkFormValidity } from "../utils/checkFormValidity";
import { postFormData } from "../utils/postFormData";
import { URL } from "../extra/constants";

import pageS from "../sass/blocks/tour/form-page.scss";
import formS from "../sass/blocks/tour/tour-form.scss";

type Props = {
	settings: Object,
	formId: string,
	validationState: Object,
	buttonLabel: string,
	successMessage: Object,
	viewportVersion: ViewportVersionType,
	resetFormInStore: Function
};

type State = {
	submittingStatus: LoadingStatusType,
	validationStateOfForm: boolean,
	validationState: Object,
	reset: boolean
};

class FormTemplate extends Component<Props, State> {
	state = {
		submittingStatus: "",
		validationState: {},
		validationStateOfForm: false,
		reset: false
	};

	componentWillMount() {
		// сделать обход, добавить false только к требуемым полям !! кроме чекбокса, где уже отмечены
		// setInitialValidationState();
	}

	//  Данный метод возвращает вычисляет новое состояние валидации, проверяет валидность всей формы и возвращает соответствующие состояния.

	setFormValidationState = (name: string, newValue: boolean) => {
		this.setState(prevState => {
			const validationState = {
				...prevState.validationState,
				[name]: newValue
			};
			const wasValid = prevState.validationStateOfForm;
			const isValid = checkFormValidity(validationState);

			//

			if (isValid !== wasValid) {
				console.log("change");
			}
			return {
				validationState,
				validationStateOfForm: isValid
			};
		});
	};

	submitFormHandler = event => {
		event.preventDefault();
		this.setState({
			submittingStatus: "loading"
		});

		// может быть, не нужно, но сабмиттинг может осуществиться не только кнопкой?
		const allowSubmitting = checkFormValidity(this.state.validationState);
		if (allowSubmitting) {
			postFormData(
				event.target,
				`${URL}/tour`,
				response => {
					if (response.status === 201) {
						// при успешной загрузке сбросить форму // пока убрать сброс
						this.setState({
							submittingStatus: "loaded",
							reset: true
						});
						this.props.resetFormInStore();
					} // тут какой-нибудь еще статус
				},
				error => {
					this.setState({ submittingStatus: "failed" });
				}
			);
		}
	};

	// работает только в десктопной версии: закрыть попап и начать заново. Сбросить триггер reset
	closePopup = () => {
		this.setState({ submittingStatus: "", reset: false });
	};

	render() {
		// У элементов форм есть свои стандартные стилевые шаблоны (которые могут быть применены для всего сайта), дополнительно вводим класс специфических для данной формы стилей

		const {
			surname,
			name,
			patronymic,
			achieves,
			appOptions,
			tel,
			email,
			emotions
		} = this.props.settings;
		const {
			validationState,
			formId,
			buttonLabel,
			viewportVersion,
			successMessage
		} = this.props;

		const { submittingStatus, validationStateOfForm, reset } = this.state;

		const Form = (
			<React.Fragment>
				<Description>
					<p>
						{`Поделитесь своей историей и\u00A0получите шанс выиграть ценный приз - 1000\u00A0миль на\u00A0вашу бонусную карту!`}
					</p>
					{viewportVersion === "mobile" ? null : (
						<p> Пожалуйста, заполните форму ниже:</p>
					)}
				</Description>
				<form
					className={formS["form"]}
					id={formId}
					onSubmit={this.submitFormHandler}
				>
					<div className={formS["personal"]}>
						<Input
							settings={surname}
							specStyles={formS["personal__input"]}
							setFormValidity={this.setFormValidationState}
							reset={reset}
						/>
						<Input
							settings={name}
							setFormValidity={this.setFormValidationState}
							specStyles={formS["personal__input"]}
						/>
						<Input
							settings={patronymic}
							setFormValidity={this.setFormValidationState}
							specStyles={formS["personal__input"]}
						/>
					</div>
					<Fieldset
						legend={`Ваши безбашенные достижения в\u00A0путешествии`}
						specStyles={formS["achieves__fieldset"]}
						required
					>
						<CheckboxGroup
							settings={achieves}
							specStyles={formS["achieves__checkbox"]}
							setFormValidity={this.setFormValidationState}
							required
						/>
					</Fieldset>
					<Fieldset
						legend="Контактная информация"
						specStyles={formS["contacts__fieldset"]}
					>
						<Input
							settings={tel}
							setFormValidity={this.setFormValidationState}
							specStyles={formS["contacts__input"]}
						/>
						<Input
							settings={email}
							setFormValidity={this.setFormValidationState}
							specStyles={formS["contacts__input"]}
						/>
					</Fieldset>
					<Fieldset
						legend="С каким приложением путешествовали"
						specStyles={formS["app__fieldset"]}
					>
						<RadioGroup settings={appOptions} />
					</Fieldset>
					<Fieldset
						legend="Опишите свои эмоции"
						specStyles={formS["emotions__fieldset"]}
						required
					>
						<TextArea
							settings={emotions}
							specStyles={formS["emotions__textarea"]}
							setFormValidity={this.setFormValidationState}
						/>
					</Fieldset>
					<div className={formS["form__footer"]}>
						<Button
							type="submit"
							label={buttonLabel}
							disabled={!validationStateOfForm}
							specStyles={formS["form__submit"]}
							id={formId}
						/>

						<FormNote specStyles={formS["form__note"]} />
					</div>
				</form>
			</React.Fragment>
		);

		const FailureBlock = (
			<div className={formS["form__failure-block"]}>
				Что-то пошло не так. Попробуйте позже!
			</div>
		);

		let Template;

		// разная сетка в случае большого вьюпорта и мобильного/планшетного.
		// В случае настольной сетки сообщение об успешной отправке реализовано в виде поп-ап
		// в случае маленькой сетки форма больше не отрисовывается, вместо нее вся страница будет сообщением об успешной доставке с переходом на главную
		// в случаях загрузки либо неудачной загрузки - появится дополнительный блок - спиннер либо ошибка, без вылета со страницы формы (чтобы можно было отправить заново). добавлен как блок под формой

		const layoutState = getLayoutState(submittingStatus, viewportVersion);

		switch (layoutState) {
			case "form":
				Template = Form;
				break;
			case "mobileSubmitted":
				Template = (
					<SuccessBlock type="page" successMessage={successMessage} />
				);
				break;
			case "desktopSubmitted":
				Template = (
					<React.Fragment>
						{Form}
						<SuccessBlock
							type="popup"
							closePopup={this.closePopup}
							successMessage={successMessage}
						/>
					</React.Fragment>
				);
				break;
			case "loading":
				Template = (
					<React.Fragment>
						{Form}
						<Spinner />
					</React.Fragment>
				);
				break;
			case "failed":
				Template = (
					<React.Fragment>
						{Form}
						{FailureBlock}
					</React.Fragment>
				);
				break;
			default:
				Template = Form;
		}

		return (
			<section className={pageS["form-page"]}>
				<div className={pageS["form-page__inner"]}>{Template}</div>
			</section>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	const { viewportVersion } = state;
	return {
		viewportVersion,
		...ownProps
	};
};

const mapDispatchToProps = (dispatch: Function) => ({
	resetFormInStore() {
		dispatch(resetFormData());
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(FormTemplate);
