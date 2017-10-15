import Ember from 'ember';

export default Ember.Component.extend({
  ajax: Ember.inject.service(),
  store: Ember.inject.service(),

  actions: {
    deleteTweeter(tweeter) {
      this.get('store').findRecord('tweeter', tweeter.id, { backgroundReload: false }).then(function(tweeter) {
        tweeter.destroyRecord();
      });
    },

    displayTweets(tweeter_uid) {
      this.sendAction('onClick', tweeter_uid);
    }
  }
});
