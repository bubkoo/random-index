var expect         = require('chai').expect;
var MAX_ARR_LENGTH = require('max-array-length');


describe('random-index', function () {

  var randomIndex = require('../../');

  it('common', function () {
    expect(randomIndex()).to.be.within(0, MAX_ARR_LENGTH);
    expect(randomIndex({ max: 1 })).to.be.within(0, 1);
    expect(randomIndex({ max: '10' })).to.be.within(0, 10);
    expect(randomIndex({ max: 0 })).to.be.equal(0);

    expect(randomIndex({
      min: 10,
      max: 100,
      inspected: true
    })).to.be.within(10, 100);

  });
});
