
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

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

  size() {
    return this.length;
  }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
