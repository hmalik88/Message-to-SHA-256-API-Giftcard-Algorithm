const expect = require('chai').expect;
const giftcard = require('../giftcard.js');
const items = giftcard.items;

describe('Giftcard tool', () => {
  it ('with a balance of 2500', () => {
    expect(giftcard.printPair(items, 2500)).to.equal('Candy Bar 500, Earmuffs 2000');
  });

  it ('with a balance of 2300', () => {
    expect(giftcard.printPair(items, 2300)).to.equal('Paperback Book 700, Headphones 1400');
  });

  it ('with a balance of 10000', () => {
    expect(giftcard.printPair(items, 10000)).to.equal('Earmuffs 2000, Bluetooth Stereo 6000');
  });

  it ('with a balance of 1100', () => {
    expect(giftcard.printPair(items, 1100)).to.equal('Not possible');
  });

})

