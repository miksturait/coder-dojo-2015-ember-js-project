/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'coworkers/kudos-received',
  'Integration: CoworkersKudosReceivedComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#coworkers/kudos-received}}
      //     template content
      //   {{/coworkers/kudos-received}}
      // `);

      this.render(hbs`{{coworkers/kudos-received}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
