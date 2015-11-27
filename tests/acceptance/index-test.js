import { describe, it, beforeEach, afterEach } from 'mocha';
import { expect } from 'chai';
import acceptanceHooks from 'merit-money/tests/helpers/module-for-acceptance';

describe('HomePage', function () {
  beforeEach(() => this.application = acceptanceHooks.startApp());
  afterEach(() => acceptanceHooks.destroyApp(this.application));

  it('allow to visit main page', function () {
    visit('/');

    andThen(function () {
      expect(find(':contains(HangMan)').length).to.be.ok;
      expect(find('.hangman-letter:contains(z)').length).to.be.ok;
      expect(currentURL()).to.be.eq('/');
    });
  });

  it('allow to type word', function () {
    visit('/');
    fillIn('input[name=word]', 'bob');
    keyEvent('input[name=word]', 'keyup', 13);

    andThen(function () {
      expect(find(':contains(Oh Buddy, you better guess this.)').length).to.be.ok;
    });
  });

  it('can win the game', function () {
    visit('/');
    fillIn('input[name=word]', 'bob');
    keyEvent('input[name=word]', 'keyup', 13);

    click('.hangman-letter:contains(b)');
    click('.hangman-letter:contains(o)');

    andThen(function () {
      expect(find(':contains(You are the man - you win!)').length).to.be.ok;
    });
  });

  it('can loose the game', function () {
    visit('/');
    fillIn('input[name=word]', 'bob');
    keyEvent('input[name=word]', 'keyup', 13);

    click('.hangman-letter:contains(t)');
    click('.hangman-letter:contains(g)');
    click('.hangman-letter:contains(x)');
    click('.hangman-letter:contains(z)');
    click('.hangman-letter:contains(t)');
    click('.hangman-letter:contains(a)');
    click('.hangman-letter:contains(c)');
    click('.hangman-letter:contains(d)');
    click('.hangman-letter:contains(q)');

    andThen(function () {
      expect(find(':contains(\'You lost the game :-( Try once again\')').length).to.be.ok;
    });
  });
});

