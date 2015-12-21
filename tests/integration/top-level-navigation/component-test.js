/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'top-level-navigation',
  'Integration: TopLevelNavigationComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#top-level-navigation}}
      //     template content
      //   {{/top-level-navigation}}
      // `);

      this.render(hbs`{{top-level-navigation}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
