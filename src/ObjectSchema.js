export default class ObjectSchema {
    localSchema = null;
    shape(obj) {
        this.localSchema = obj;
        return this;
    }
    isValid(toValidate) {
        if (!this.localSchema) {
            return true;
        }
        const validateErrors = Object.entries(this.localSchema).filter((key, valid) => {
            const func = valid;
            return func.isValid(toValidate[key]) !== true;
        });
        return validateErrors === 0;
    }
}
