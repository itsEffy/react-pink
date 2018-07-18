// @flow

// TODO - вот здесь нужно отбрасывать все опасные значения.

// все, что не является одним из следующих разрешеных символов
const forbidden = /[^@a-z\d^$%#._-{}'&*+/=?|~]*/gi;

const handleEmailValue = (value: string) => value.replace(forbidden, "");

export default handleEmailValue;
