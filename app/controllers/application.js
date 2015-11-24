import Ember from 'ember';

export default Ember.Controller.extend({
  game: Ember.inject.service('game'),
  letters: Ember.computed( () => 'abcdefghijklmnopqrstuvwxyz'.split('') ),
  actions: {
    playWord() {
      let word = this.get('newWord');
      this.get('game').playWord(word);
      this.set('newWord', '');
    }
  }
});
