// Uncomment the following lines to execute `npm test` in your terminal.
var assert = require('chai').assert;
var square = require('./implementation');

describe('square', function () {
  it('returns the square of a number', function () {
    assert.equal(square(2), 4);
  });
});

describe.skip('addTwo', function() {
  it('returns a value plus 2', function() {
    assert.equal(addTwo(5), 7);
  });
});

describe.skip('multiply', function() {
  it('multiplies two numbers together', function() {
    assert.equal(multiply(5, 6), 30);
  });
});

describe.skip('subtract', function() {
  it('subtracts one value from another', function() {
    assert.equal(subtract(5, 10), 5);
  });
});

describe.skip('divide', function() {
  it('divides one number by another', function() {
    assert.equal(divide(30, 5), 6);
  });
});