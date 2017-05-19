// import Ember from 'ember';
import DS from 'ember-data';

// const { String: { pluralize, underscore } } = Ember;

export default DS.JSONAPIAdapter.extend({
  host: 'http://127.0.0.1:3000',
  namespace: 'api/v1'
});
