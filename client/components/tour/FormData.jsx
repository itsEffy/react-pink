// @flow

import React, { Component } from "react";
import FormTemplate from "./FormTemplate";

type Props = {};

type State = {
	settings: {},
	formId: string,
	successMessage: { title: string, text: string, buttonLabel: string },
	buttonLabel: string
};

class FormData extends Component<Props, State> {
	state = {
		formId: "tour",
		successMessage: {
			title: "Ваша заявка отправлена",
			text:
				"Спасибо за ваше участие, ваша заявка уже поступила к нам. В ближайшее время мы рассмотрим ее и оповестим вас.",
			buttonLabel: "Вернуться на главную"
		},
		buttonLabel: "Отправить форму",
		settings: {
			surname: {
				type: "text",
				name: "surname",
				label: "Фамилия",
				placeholder: "Укажите фамилию",
				validation: {
					required: true,
					minLength: 2,
					pattern: /^[а-я-']{2,}\s*$/gi
				}
			},
			name: {
				type: "text",
				name: "name",
				label: "Имя",
				placeholder: "Введите ваше имя",
				validation: {
					required: true,
					minLength: 2,
					pattern: /^[а-я-']{2,}\s*$/gi
				}
			},
			patronymic: {
				type: "text",
				name: "patronymic",
				label: "Отчество",
				placeholder: "Ну и отчество тоже",
				validation: {
					required: false,
					minLength: 5,
					pattern: /^[а-я-']{5,}\s*$/gi
				}
			},
			appOptions: {
				name: "appOptions",
				valueList: [
					{ value: "ios", label: "Pink для iOS" },
					{ value: "android", label: "Pink на Android" },
					{ value: "windows", label: "Windows Phone" }
				],
				validation: {
					required: false
				}
			},
			achieves: {
				name: "achieves",
				valueList: [
					{
						value: "selfie",
						label: `Сделал селфи с\u00A0акулой`
					},
					{
						value: "burnt",
						label: `Обгорел на\u00A0пляже`
					},
					{
						value: "sawseleb",
						label: "Видел Чака Норриса"
					},
					{
						value: "souvenirs",
						label: "Накупил сувениров"
					},
					{
						value: "hold",
						label: "Удержал башню"
					},
					{
						value: "destroy",
						label: "Разгромил отель"
					}
				],
				validation: {
					required: true
				}
			},
			tel: {
				type: "tel",
				name: "tel",
				label: "Номер телефона",
				placeholder: "Номер, пожалуйста",
				validation: {
					required: false
				}
			},
			email: {
				type: "email",
				name: "email",
				label: "Адрес почты",
				placeholder: "Введите вашу почту",
				validation: {
					required: true,
					pattern: /^[a-z\d^$%#._-{}'&*+/=?|~]{2,}@[a-z]{2,}.[a-z]{2,}\s*$/gi
				}
			},
			emotions: {
				name: "emotions",
				placeholder: "Можно прям в красках, не стесняясь в выражениях",
				validation: {
					required: true,
					messageAboutRequirement: false
				}
			}
		}
	};

	render() {
		return (
			<FormTemplate
				settings={this.state.settings}
				formId={this.state.formId}
				successMessage={this.state.successMessage}
				buttonLabel={this.state.buttonLabel}
			/>
		);
	}
}

export default FormData;
