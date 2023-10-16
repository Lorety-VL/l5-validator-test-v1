import NumberSchema from './NumberSchema.js';
import ArraySchema from './ArraySchema.js';
import ObjectSchema from './ObjectSchema.js';

export default class Validator {
  uselessVarForLinter = 'useless?';

  number() {
    this.uselessVarForLinter = 'useless...';
    return new NumberSchema();
  }

  array() {
    this.uselessVarForLinter = 'really useless';
    return new ArraySchema();
  }

  object() {
    this.uselessVarForLinter = 'absolutely useless';
    return new ObjectSchema();
  }
}
