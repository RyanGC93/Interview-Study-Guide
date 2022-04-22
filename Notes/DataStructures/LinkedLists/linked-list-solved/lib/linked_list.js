// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

// TODO: Implement a Singly Linked List class here
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // TODO: Implement the addToTail method here
  addToTail(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // TODO: Implement the removeTail method here
  removeTail() {
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return this;
    }
    let current = this.head;
    while (current.next !== this.tail) {
      current = current.next;
    }
    let tail = this.tail;
    current.next = null;
    this.tail = current;
    this.length--;
    return tail;
  }

  // TODO: Implement the addToHead method here
  addToHead(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // TODO: Implement the removeHead method here
  removeHead() {
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return this;
    }
    let head = this.head;
    this.head = this.head.next;
    this.length--;
    return head;
  }

  // TODO: Implement the contains method here
  contains(target) {
    let current = this.head;
    while (current) {
      if (current.value === target) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  // TODO: Implement the get method here
  get(index) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (count === index) {
        return current;
      }
      current = current.next;
      count++;
    }
    return null;
  }

  // TODO: Implement the set method here
  set(index, val) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (count === index) {
        current.value = val;
        return true;
      }
      current = current.next;
      count++;
    }
    return false;
  }

  // TODO: Implement the insert method here
  insert(index, val) {
    if (index === 0) {
      this.addToHead(val);
    } else if (index === this.length) {
      this.addToTail(val);
    } else {
      let newNode = new Node(val);
      let current = this.head;
      let count = 0;
      while (current) {
        if (count === index - 1) {
          newNode.next = current.next;
          current.next = newNode;
          this.length++;
          return true;
        }
        current = current.next;
        count++;
      }
    }
    return false;
  }

  // TODO: Implement the remove method here
  remove(index) {
    if (index === 0) {
      this.removeHead();
    } else if (index === this.length - 1) {
      this.removeTail();
    } else {
      let current = this.head;
      let count = 0;
      while (current) {
        if (count === index - 1) {
          let removed = current.next;
          current.next = current.next.next;
          this.length--;
          return removed;
        }
        current = current.next;
        count++;
      }
    }
    return undefined;
  }

  // TODO: Implement the size method here
  size() {
    return this.length;
  }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
