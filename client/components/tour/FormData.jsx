// @flow

import React, { Component } from "react";
import FormTemplate from "./FormTemplate.jsx";

type Props = {
	posted: boolean
};

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
					// точный паттерн, устанавливающий конкретный регистр (нельзя использовать флаг i, html не понимает)
					pattern: /^[А-Я]?[а-я']+(-[А-Я]?[а-я']+)?\s*$/g
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
					pattern: /^[А-Я]?[а-я']+([-\s][А-Я]?[а-я']+)?\s*$/g
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
					pattern: /^[А-Я]?[а-я']+(-[А-Я]?[а-я']+)?\s*$/g
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
					required: false,
					pattern: /^[\+\-\d\s)(]{11,}\s*$/g
				}
			},
			email: {
				type: "email",
				name: "email",
				label: "Адрес почты",
				placeholder: "Введите вашу почту",
				validation: {
					required: true,
					pattern: /^[a-zA-z\d^$%#._-{}'&*+/=?|~]{2,}@[a-zA-z]{2,}.[a-zA-Z]{2,}\s*$/g
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
				posted={this.props.posted}
			/>
		);
	}
}

export default FormData;
