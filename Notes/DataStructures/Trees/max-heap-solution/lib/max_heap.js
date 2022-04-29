class MaxHeap {
  constructor() {
    this.array = [null];
  }
  getParent(idx) {
    return Math.floor(idx / 2);
  }
  getLeftChild(idx) {
    return idx * 2;
  }
  getRightChild(idx) {
    return idx * 2 + 1;
  }
  siftUp(idx) {
    let parentIdx = this.getParent(idx);
    if (parentIdx === 0) {
      return;
    }
    if (this.array[parentIdx] < this.array[idx]) {
      [this.array[parentIdx], this.array[idx]] = [this.array[idx], this.array[parentIdx]];
      this.siftUp(parentIdx);
    }
  }
  insert(val) {
    this.array.push(val);
    this.siftUp(this.array.length - 1);
  }
  siftDown(idx) {
    let leftIdx = this.getLeftChild(idx);
    let rightIdx = this.getRightChild(idx);
    let leftChild = this.array[leftIdx];
    let rightChild = this.array[rightIdx];
    let maxIdx = idx;
    if (leftChild && leftChild > this.array[maxIdx]) {
      maxIdx = leftIdx;
    }
    if (rightChild && rightChild > this.array[maxIdx]) {
      maxIdx = rightIdx;
    }
    if (maxIdx !== idx) {
      [this.array[maxIdx], this.array[idx]] = [this.array[idx], this.array[maxIdx]];
      this.siftDown(maxIdx);
    }

  }
  deleteMax() {
    let max = this.array[1];
    this.array[1] = this.array.pop();
    this.siftDown(1);
    return max;
  }

}
  module.exports = {
	MaxHeap,
};
