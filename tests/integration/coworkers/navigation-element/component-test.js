/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'coworkers/navigation-element',
  'Integration: CoworkersNavigationElementComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#coworkers/navigation-element}}
      //     template content
      //   {{/coworkers/navigation-element}}
      // `);

      this.render(hbs`{{coworkers/navigation-element}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
