// @flow

// TODO - вот здесь нужно отбрасывать все опасные значения.

// Обработка строки дублирована на случай вставки готового value.
// Это будет происходить редко

const forbidden = /[^а-яa-z-']*/gi; // все, что не является простой буквой, тире или апострофм в любом регистре

const handleStringValue = (value: string) => value.replace(forbidden, "");

export default handleStringValue;
