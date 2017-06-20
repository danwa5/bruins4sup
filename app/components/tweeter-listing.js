import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  actions: {
    deleteTweeter(tweeter) {
      this.get('store').findRecord('tweeter', tweeter.id, { backgroundReload: false }).then(function(tweeter) {
        tweeter.destroyRecord(); // => DELETE to /posts/2
      });
    }
  }
});
