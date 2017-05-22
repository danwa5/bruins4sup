import Ember from 'ember';

export default Ember.Component.extend({
  ajax: Ember.inject.service(),
  flashMessages: Ember.inject.service(),

  disableSave: true,
  foundTwitterUser: null,

  actions: {
    findTwitterUser() {
      var input = this.get('twitterScreenName');

      return this.get('ajax').request('/api/v1/twitter/users/' + input)
      .then((res) => {
        this.set('foundTwitterUser', res);
        this.get('flashMessages').success(`Twitter User @${input} was found!`)
      }).catch(() => {
        this.get('flashMessages').danger(`Twitter User @${input} does not exist!`);
      });
    },

    saveTwitterUser() {
      return this.get('ajax').post('/api/v1/tweeters', {
        data: {
          tweeter: {
            uid: this.get('foundTwitterUser')['id'],
            screen_name: this.get('foundTwitterUser')['screen_name'],
            name: this.get('foundTwitterUser')['name'],
            description: this.get('foundTwitterUser')['description'],
            profile_image_url: this.get('foundTwitterUser')['profile_image_url']
          }
        }
      }).then(() =>
        this.get('flashMessages').success(`Twitter User @${this.get('foundTwitterUser')['screen_name']} was successfully saved!`)
      ).catch(() => {
        this.get('flashMessages').danger(`Twitter User @${this.get('foundTwitterUser')['screen_name']} could not be saved!`);
      });
    }
  }
});
