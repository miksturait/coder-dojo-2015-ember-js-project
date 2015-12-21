/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'edziennik/uczen-row',
  'Integration: EdziennikUczenRowComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#edziennik/uczen-row}}
      //     template content
      //   {{/edziennik/uczen-row}}
      // `);

      this.render(hbs`{{edziennik/uczen-row}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
