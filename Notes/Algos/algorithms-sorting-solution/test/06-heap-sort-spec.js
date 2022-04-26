const { expect } = require('chai');
const { heapSort } = require('../problems/06-heap-sort');


describe('heapSort()', () => {
  // it should accept an array of numbers as an arg
  context('when the input array contains 0 or 1 elements', () => {
    it('should return the array', () => {
      expect(heapSort([])).to.eql([]);
      expect(heapSort([2])).to.eql([2]);
    });
  });

  context('when the input array contains more than 1 element', () => {
    it('should return an array containing the elements in increasing order', () => {
      expect(heapSort([2, -1, 4, 3, 7, 3])).to.eql([-1, 2, 3, 3, 4, 7]);
    });
  });
});
