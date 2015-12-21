import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  kudo: null,
  errors: null,

  init() {
    this._setKudo();
    this._super();
  },

  actions: {
    create() {
      let kudo = this.get('kudo');
      kudo.set('coworker', this.get('coworker'));
      kudo.save().then(function (response) {
        this._setKudo();
        this.set('errors', null);
      }, function (response) {
        kudo.set('coworker', null);
        // this.set('errors', response.errors.mapBy('detail').join(' '));
      });
    }
  },

  _setKudo() {
    this.set('kudo',
      this.get('store').createRecord('kudo', {value: 1, comment: ':-)'}));
  }
});
