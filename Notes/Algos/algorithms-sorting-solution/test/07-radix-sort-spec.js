const { expect } = require('chai');
const { radixSort } = require('../problems/07-radix-sort');


describe('radixSort()', () => {
  // it should accept an array of numbers as an arg
  context('when the input array contains 0 or 1 elements', () => {
    it('should return the array', () => {
      expect(radixSort([])).to.eql([]);
      expect(radixSort([2])).to.eql([2]);
    });
  });

  context('when the input array contains more than 1 element', () => {
    it('should return an array containing the elements in increasing order', () => {
      expect(radixSort([2, -1, 4, 3, 7, 3])).to.eql([-1, 2, 3, 3, 4, 7]);
    });
  });
});
