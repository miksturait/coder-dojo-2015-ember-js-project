import { test } from 'qunit';
import moduleForAcceptance from 'merit-money/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | index');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.ok(find(':contains(Merit-Money)').length, 'merit money');
    assert.ok(find('.hangman-letter:contains(z)').length, 'a letter is on the page');
    assert.equal(currentURL(), '/');
  });
});

test('visiting / and typing a word', function(assert) {
  visit('/');
  fillIn('input[name=word]', 'bob' );
  keyEvent('input[name=word]', 'keyup', 13);


  andThen(function() {
    assert.ok(find(':contains(Oh Buddy, you better guess this.)').length, 'merit money');
  });
});

test('visiting / and typing a word and winning', function(assert) {
  visit('/');
  fillIn('input[name=word]', 'bob' );
  keyEvent('input[name=word]', 'keyup', 13);

  click('.hangman-letter:contains(b)');
  click('.hangman-letter:contains(o)');


  andThen(function() {
    assert.ok(find(':contains(You are the man - you win!)').length, 'merit money');
  });
});

test('visiting / and typing a word and loosing', function(assert) {
  visit('/');
  fillIn('input[name=word]', 'bob' );
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

  andThen(function() {
    assert.ok(find(':contains(You lost the game :-( Try once again))').length, 'merit money');
  });
});
