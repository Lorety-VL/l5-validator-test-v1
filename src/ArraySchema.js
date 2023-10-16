export default class ArraySchema {
    len = null
    length(newLen) {
        this.len = newLen;
        return this;
    }
    isValid(value) {
        if (!Array.isArray(value)) {
            return false;
        }
        if (this.len) {
            return this.len === value.length ? true : false;
        }
        return true;
    }
}
