export default class NumberSchema {
  constructor(...validators) {
    this.validators = validators;
  }

  isValid(value) {
    return this.validators.every((validator) => validator(value));
  }

  odd() {
    const validator = (value) => value % 2 === 1;
    return new NumberSchema(...this.validators, validator);
  }

  even() {
    const validator = (value) => value % 2 === 0;
    return new NumberSchema(...this.validators, validator);
  }
}
