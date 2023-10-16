export default class ObjectSchema {
  localSchema = null;

  shape(obj) {
    this.localSchema = obj;
    return this;
  }

  isValid(toValidate) {
    const schemeKeys = Object.keys(this.localSchema);
    const objKeys = Object.keys(toValidate);
    if (schemeKeys.length !== objKeys.length) {
      return false;
    }
    return schemeKeys.every((key) => {
      const code = this.localSchema[key];
      return code.isValid(toValidate[key]);
    });
  }
}
