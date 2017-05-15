import { test } from 'qunit';
import moduleForAcceptance from 'bruins4sup/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list tweeters');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/tweeters');
  });
});
