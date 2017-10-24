import Ember from 'ember';

export default Ember.Component.extend({
  ajax: Ember.inject.service(),
  flashMessages: Ember.inject.service(),
  store: Ember.inject.service(),

  disableSave: true,
  foundTwitterUser: null,
  selectedTweeter: null,
  tweeters: [],
  tweets: [],

  actions: {
    selectTweeter(selectedTweeter, selectedTweeterUID) {
      this.set('selectedTweeter', selectedTweeter);
      this.send('displayTweets', selectedTweeterUID);
    },

    displayTweets(tweeter_uid) {
      return this.get('ajax').request(`/api/v1/twitter/users/${tweeter_uid}/tweets`, {
      }).then((response) => {
        this.set('tweets', response);
      });
    },

    findTwitterUser() {
      var input = this.get('twitterScreenName');

      return this.get('ajax').request('/api/v1/twitter/users/' + input)
      .then((res) => {
        this.set('foundTwitterUser', res);
        // this.get('flashMessages').success(`Twitter User @${input} was found!`);
      }).catch(() => {
        this.set('foundTwitterUser', null);
        this.get('flashMessages').danger(`Twitter User @${input} does not exist!`);
      });
    },

    saveTwitterUser() {
      let tweeter = this.get('store').createRecord('tweeter', {
        uid: this.get('foundTwitterUser')['id'],
        screen_name: this.get('foundTwitterUser')['screen_name'],
        name: this.get('foundTwitterUser')['name'],
        description: this.get('foundTwitterUser')['description'],
        profile_image_url: this.get('foundTwitterUser')['profile_image_url']
      });

      tweeter.save().then(() => {
        this.get('flashMessages').success(`Twitter User @${this.get('foundTwitterUser')['screen_name']} was successfully saved!`);
        this.set('foundTwitterUser', null);
        this.set('tweets', null);
        document.getElementById("twitter-user-search-form").reset();
      }).catch(() => {
        tweeter.unloadRecord()
        this.get('flashMessages').danger(`Twitter User @${this.get('foundTwitterUser')['screen_name']} could not be saved!`);
      });
    }
  }
});
