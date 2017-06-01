import Ember from 'ember';

export default Ember.Component.extend({
  twitterUser: null,

  actions: {
    saveTwitterUser: function() {
      this.sendAction('onSubmit');
    }
  }
});
