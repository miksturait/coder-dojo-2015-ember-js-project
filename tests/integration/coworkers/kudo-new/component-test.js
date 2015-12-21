/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'coworkers/kudo-new',
  'Integration: CoworkersKudoNewComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#coworkers/kudo-new}}
      //     template content
      //   {{/coworkers/kudo-new}}
      // `);

      this.render(hbs`{{coworkers/kudo-new}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
