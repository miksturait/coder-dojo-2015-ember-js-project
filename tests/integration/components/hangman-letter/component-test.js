import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('hangman-letter', 'Integration | Component | hangman letter', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{hangman-letter letter='x'}}`);
  assert.equal(this.$().text().trim(), 'x');
});
