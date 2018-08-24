var assert = require('chai').assert;
var square = require('./implementation');

describe('reverse', function() {
  it('should take in a string and reverse the order of characters, returning a new string', function () {
    assert.equal(reverseString('reverse', 'esrever'));
  });
});

