import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  kudo: null,

  init() {
    this._setKudo();
    this._super();
  },

  actions: {
    create() {
      let kudo = this.get('kudo');
      kudo.set('coworker', this.get('coworker'));
      kudo.save().then(
        () => this._setKudo(),
        () => kudo.set('coworker', null)
      );
    }
  },

  _setKudo() {
    this.set('kudo',
      this.get('store').createRecord('kudo', {value: 1, comment: ':-)'}));
  }
});
