import Ember from 'ember';

export default Ember.Controller.extend({
  kudo: Ember.computed( function(){
    return this._newKudo();
  }),

  actions: {
    create() {
      let kudo = this.get('kudo'),
        coworker = this.store.peekRecord('coworker', this.model.id);

      kudo.set('coworker', coworker);
      kudo.save();
      this.set('kudo', this._newKudo());
    }
  },

  _newKudo() {
    return this.store.createRecord('kudo', {value: 1, comment: ':-)'});
  }
});
