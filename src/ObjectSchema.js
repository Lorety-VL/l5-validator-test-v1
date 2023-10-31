export default class ObjectSchema {
  constructor(schema) {
    this.schema = schema;
  }
  // eslint-disable-next-line
  shape(obj) {
    return new ObjectSchema(obj);
  }

  isValid(value) {
    const keys = Object.keys(value);
    const keys2 = Object.keys(this.schema);
    if (keys.length !== keys2.length) {
      return false;
    }
    return keys.every((key) => this.schema[key].isValid(value[key]));
  }
}
