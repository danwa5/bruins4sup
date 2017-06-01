import Ember from 'ember';

export default Ember.Component.extend({
  label: null,
  name: null,
  value: null,
  isValid: false,

  didUpdateAttrs() {
    this._super(...arguments);
    let val = this.get('value') || '';
    val = val.toString();

    if (val.length > 0) {
      this.set('isValid', true);
    } else {
      this.set('isValid', false);
    }
  }
});
