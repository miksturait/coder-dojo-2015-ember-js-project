import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  kudo: Ember.computed(function() {
    return this._newKudo();
  }),

  actions: {
    create() {
      let kudo = this.get('kudo');
      kudo.set('coworker', this.get('coworker'));
      kudo.save();
      this.set('kudo', this._newKudo());
    }
  },

  _newKudo() {
    return this.get('store').createRecord('kudo', {value: 1, comment: ':-)'});
  }
});
