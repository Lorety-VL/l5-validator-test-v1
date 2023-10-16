export default class NumberSchema {
    rules = null
    odd() {
        this.rules = 'odd';
        return this;
    }
    even() {
        this.rules = 'even';
        return this;
    }
    isValid(value) {
        if (typeof value !== 'number') {
            return false;
        }
        if (this.rules === 'odd') {
            return value % 2 === 1;
        }
        if (this.rules === 'even') {
            return value % 2 === 0;
        }
        return true;
    }
}
