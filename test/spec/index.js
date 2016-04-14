var expect = require('chai').expect;


describe('random-index', function () {

  var randomIndex = require('../../');

  it('common', function () {
    expect(randomIndex()).to.be.within(0, 4294967295);
    expect(randomIndex(1)).to.be.within(0, 1);
    expect(randomIndex('10')).to.be.within(0, 10);
    expect(randomIndex(0)).to.be.equal(0);
  });
});
