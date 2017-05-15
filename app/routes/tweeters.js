import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [{
      id: 1,
      uid: "512418287",
      name: "UCLA Football",
      screen_name: "UCLAFootball",
      description: "The official Twitter account of UCLA Football.",
      profile_image_url: "http://pbs.twimg.com/profile_images/839560337099644929/SjmmG0Ac_normal.jpg",
      created_at: "2017-05-14 21:46:00",
      updated_at: "2017-05-14 21:46:56"
    },{
      id: 2,
      uid: "524643600",
      name: "UCLA Basketball",
      screen_name: "UCLAMBB",
      description: "The official Twitter account of the UCLA Men's Basketball team.",
      profile_image_url: "http://pbs.twimg.com/profile_images/860235941033553920/zxD9lT9N_normal.jpg",
      created_at: "",
      updated_at: ""
    },{
      id: 3,
      uid: "381816948",
      name: "UCLA Baseball",
      screen_name: "UCLABaseball",
      description: "The official Twitter account of UCLA Baseball https://t.co/TzG9XNM9MD – https://t.co/3ZTrg4muV4",
      profile_image_url: "http://pbs.twimg.com/profile_images/860235879209508864/9h4Ygbsk_normal.jpg",
      created_at: "",
      updated_at: ""
    }]
  }
});
