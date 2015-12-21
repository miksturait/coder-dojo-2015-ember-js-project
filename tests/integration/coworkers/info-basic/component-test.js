/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'coworkers/info-basic',
  'Integration: CoworkersInfoBasicComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#coworkers/info-basic}}
      //     template content
      //   {{/coworkers/info-basic}}
      // `);

      this.render(hbs`{{coworkers/info-basic}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
