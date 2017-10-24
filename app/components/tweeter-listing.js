import Ember from 'ember';

export default Ember.Component.extend({
  ajax: Ember.inject.service(),
  store: Ember.inject.service(),

  tagName: 'a',
  classNames: ['list-group-item'],
  classNameBindings: ['isSelected:list-group-item-info'],
  href: '#',
  attributeBindings: ['href'],

  isSelected: false,
  selectedTweeter: null,

  didUpdateAttrs(){
    if (this.get('selectedTweeter') === this.get('t')) {
      this.set('isSelected', true);
    }
  },

  actions: {
    deleteTweeter(tweeter) {
      this.get('store').findRecord('tweeter', tweeter.id, { backgroundReload: false }).then(function(tweeter) {
        tweeter.destroyRecord();
      });
    }
  }
});
