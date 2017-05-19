import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),

  actions: {
    findTwitterUser() {
      return this.get('ajax').request('/api/v1/twitter/users/uclafootball').then(function(response) {
        console.log(response);
      });
    }
  }
});
