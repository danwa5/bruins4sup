export default function() {
  this.namespace = '/api/v1';

  this.get('/tweeters', function() {
    return {
      data: [{
        type: 'tweeters',
        id: 1,
        attributes: {
          uid: "512418287",
          name: "UCLA Football",
          screen_name: "UCLAFootball",
          description: "The official Twitter account of UCLA Football.",
          profile_image_url: "http://pbs.twimg.com/profile_images/839560337099644929/SjmmG0Ac_normal.jpg"
        }
      },{
        type: 'tweeters',
        id: 2,
        attributes: {
          uid: "524643600",
          name: "UCLA Basketball",
          screen_name: "UCLAMBB",
          description: "The official Twitter account of the UCLA Men's Basketball team.",
          profile_image_url: "http://pbs.twimg.com/profile_images/860235941033553920/zxD9lT9N_normal.jpg"
        }
      },{
        type: 'tweeters',
        id: 3,
        attributes: {
          uid: "381816948",
          name: "UCLA Baseball",
          screen_name: "UCLABaseball",
          description: "The official Twitter account of UCLA Baseball https://t.co/TzG9XNM9MD – https://t.co/3ZTrg4muV4",
          profile_image_url: "http://pbs.twimg.com/profile_images/860235879209508864/9h4Ygbsk_normal.jpg"
        }
      }]
    };
  });
}
