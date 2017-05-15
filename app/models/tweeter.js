import DS from 'ember-data';

export default DS.Model.extend({
  uid: DS.attr('string'),
  name: DS.attr('string'),
  screen_name: DS.attr('string'),
  description: DS.attr('string'),
  profile_image_url: DS.attr('string')
});
