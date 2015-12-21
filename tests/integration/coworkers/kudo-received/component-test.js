/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'coworkers/kudo-received',
  'Integration: CoworkersKudoReceivedComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#coworkers/kudo-received}}
      //     template content
      //   {{/coworkers/kudo-received}}
      // `);

      this.render(hbs`{{coworkers/kudo-received}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
