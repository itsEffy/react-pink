// @flow

// TODO - вот здесь нужно отбрасывать все опасные значения.

// Обработка строки дублирована на случай вставки готового value.
// Это будет происходить редко

const forbidden = /[<>]+/gi; // запретить угловые скобки (xss)

const handleStringValue = (value: string) => value.replace(forbidden, "");

export default handleStringValue;
