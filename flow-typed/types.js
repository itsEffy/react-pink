// @flow

declare var module: {
	hot: {
		accept(path: string, callback: () => void): void
	}
};

export type AboutPhotoData = {
	authorName: string,
	timeStamp: string,
	description: string,
	likes: number,
	id: string,
	liked?: boolean,
	copyright?: string
};

declare type ActionType = string;
/*
  | "OPEN_CLOSE_MOBILE_MENU"
  | "CLOSE_MOBILE_MENU"
  | "SET_SURNAME"
  | "SHOW_USER_INFO"
  | "SHOW_USER_PHOTOS"
  | "SET_LOADING_STATUS"
  | "SET_VIEWPORT_VERSION"; */

declare type LoadingStatusType = '' | 'loading' | 'loaded' | 'failed';
declare type ViewportVersionType = 'mobile' | 'tablet' | 'desktop' | 'wide';

declare type ActionT<A: ActionType, P> = {|
	type: A,
	payload: P
|};

export type Action =
	| ActionT<'SET_SEARCH_TEXT', string>
	| ActionT<'OPEN_CLOSE_MOBILE_MENU', boolean>
	| ActionT<'SHOW_USER_INFO', Object>
	| ActionT<'SET_USER_INFO_LOADING_STATUS', LoadingStatusType>
	| ActionT<'SET_VIEWPORT_VERSION', ViewportVersionType>
	| ActionT<'ADD_MORE_PHOTOS', Object>
	| ActionT<'ADD_PANORAM', AboutPhotoData>
	| ActionT<'SET_NAME_VALUE', string>
	| ActionT<'SET_SURNAME_VALUE', string>
	| ActionT<'SET_APPOPTIONS_VALUE', 'android' | 'ios' | 'windows'>
	| ActionT<'SET_PATRONYMIC_VALUE', string>
	| ActionT<'SET_TEL_VALUE', string>
	| ActionT<'SET_EMAIL_VALUE', string>
	| ActionT<'SET_EMOTIONS_VALUE', string>
	| ActionT<'SET_ACHIEVE_VALUE', string>
	| ActionT<'RESET_FORM', {}>
	| ActionT<'LIKE_PANORAM', boolean>
	| ActionT<'LIKE_PHOTO', {}>;

export type Review = {
	id: string,
	authorName: string,
	authorAbout: string,
	text: string
};

export type Reviews = Array<Review> | null | false;

export type Tarif = {
	id: number,
	name: string,
	price: string,
	currency: string,
	features: Object,
	label: string | false
};

export type InputType = 'text' | 'email' | 'tel' | 'textarea' | 'file';

export type InputSettings = {
	type: InputType,
	name: string,
	label: string,
	placeholder: string,
	validation: {
		required: boolean,
		minLength?: number,
		pattern?: RegExp
	}
};

export type CheckboxGroupSettings = {
	name: string,
	valueList: Array<{ value: string, label: string }>,
	validation: {
		required: boolean
	}
};

export type RadioGroupSettings = {
	name: string,
	valueList: Array<{ value: string, label: string }>,
	validation: {
		required: boolean
	}
};

export type TextAreaSettings = {
	label: string,
	name: string,
	placeholder: string,
	validation: {
		required: boolean
	}
};

export type ValidationStateOfField = {
	valid: boolean,
	validationMessage: string
};

export type LayoutStateType =
	| 'form'
	| 'loading'
	| 'failed'
	| 'desktopSubmitted'
	| 'mobileSubmitted';
