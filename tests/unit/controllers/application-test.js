import { describeModule, it } from 'ember-mocha';
import { expect } from 'chai';


describeModule(
  'controller:application',
  'Unit | Controller | application',
  {},
  function() {

    it('exists', function(){
      let controller = this.subject();
      expect(controller).to.be.ok;
    });
  }
);

