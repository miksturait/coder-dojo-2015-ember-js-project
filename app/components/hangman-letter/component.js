import Ember from 'ember';

export default Ember.Component.extend({
  game: Ember.inject.service('game'),

  click() {
    this.get('game').playLetter(this.get('letter'));
  }
});
