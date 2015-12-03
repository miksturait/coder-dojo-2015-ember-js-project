import { describeModule, it } from 'ember-mocha';
import { expect } from 'chai';


describeModule(
  'controller:application',
  'Unit | Controller | application',
  {},
  function() {

    it.skip('exists', function(){
      let controller = this.subject();
      expect(controller).to.be.ok;
    });
  }
);

