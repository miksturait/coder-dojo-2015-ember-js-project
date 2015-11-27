import { describeComponent, it } from 'ember-mocha';
import { expect } from 'chai';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'hangman-letter',
  'Integration | Component | hangman letter',
  {integration: true},
  function () {

    it('renders', function () {
      this.render(hbs`{{hangman-letter letter='x'}}`);

      expect(this.$().html()).to
        .include('<span class="hangman-letter">\n  x\n</span>');
    });
  }
);


