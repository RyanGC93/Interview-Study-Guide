// ============================================================================
// Implementation Exercise: Queue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below using a NODE implementation
// (your Queue should not contain any built-in JavaScript Arrays)
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.length = 0;
  }

  enqueue(val) {
    let newNode = new Node(val);
    if (!this.length) {
      this.front = newNode;
      this.back = newNode;
      this.length++;
      return this.length;
    } else {
      this.back.next = newNode;
      this.back = newNode;
      this.length++;
      return this.length;
    }
  }
  dequeue() {
    let popped = this.front;
    if (!this.front) return null;
    if (this.back === this.front) {
      this.back = null;
      this.front = null;
    } else {
      this.front = this.front.next;
    }
    this.length--;
    return popped.value;
  }
  size() {
    return this.length;
  }
}

exports.Node = Node;
exports.Queue = Queue;
