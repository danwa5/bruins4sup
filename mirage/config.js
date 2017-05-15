export default function() {
  this.namespace = '/api/v1';

  this.get('/tweeters', function() {
    return {
      data: [{
        id: 1,
        uid: "512418287",
        name: "UCLA Football",
        screen_name: "UCLAFootball",
        description: "The official Twitter account of UCLA Football.",
        created_at: "2017-05-14 21:46:00",
        updated_at: "2017-05-14 21:46:56"
      },{
        id: 2,
        uid: "524643600",
        name: "UCLA Basketball",
        screen_name: "UCLAMBB",
        description: "The official Twitter account of the UCLA Men's Basketball team.",
        created_at: "",
        updated_at: ""
      }]
    };
  });
}
