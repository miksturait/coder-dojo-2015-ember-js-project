import { describe, it, beforeEach, afterEach } from 'mocha';
import { expect } from 'chai';
import acceptanceHooks from 'merit-money/tests/helpers/module-for-acceptance';

describe('HomePage', function () {
  beforeEach(() => this.application = acceptanceHooks.startApp());
  afterEach(() => acceptanceHooks.destroyApp(this.application));

  it.skip('we need to write acceptance specs', function(){
    // todo
  });

});

