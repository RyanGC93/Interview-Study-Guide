# Linked Lists


<details>
<summary>Linked List Class Properties</summary>


**Linked List Class Properties:**
| Property | Description                                         |
| -------- | --------------------------------------------------- |
| `head`   | The first node in the list.                         |
| `tail`   | The last node in the list.                          |
| `length` | The number of nodes in the list; the list's length. |

**Linked List Node Class Properties:**

| Property   | Description                                            |
| ---------- | ------------------------------------------------------ |
| `value`    | The actual value this node represents.                 |
| `next`     | The next node in the list (relative to this node).     |
| `previous` | The previous node in the list (relative to this node). |

**NOTE:** The `previous` property is for Doubly Linked Lists only!

</details>

<details>
<summary>Types of Linked Lists</summary>

**Linked List Types:**

| List Type         | Description                                                                                                     | Directionality                |
| ----------------- | --------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| Singly Linked     | Nodes have a single pointer connecting them in a single direction.                                              | Head→Tail                     |
| Doubly Linked     | Nodes have two pointers connecting them bi-directionally.                                                       | Head⇄Tail                     |
| Multiply Linked   | Nodes have two or more pointers, providing a variety of potential node orderings.                               | Head⇄Tail, A→Z, Jan→Dec, etc. |
| Circularly Linked | Final node's `next` pointer points to the first node, creating a non-linear, circular version of a Linked List. | Head→Tail→Head→Tail           |

</details>

<details>
<summary>Linked List Methods</summary>

**Linked List Methods:**

| Type      | Name         | Description                                                         | Returns             |
| --------- | ------------ | ------------------------------------------------------------------- | ------------------- |
| Insertion | `addToTail`  | Adds a new node to the tail of the Linked List.                     | Updated Linked List |
| Insertion | `addToHead`  | Adds a new node to the head of the Linked List.                     | Updated Linked List |
| Insertion | `insertAt`   | Inserts a new node at the "index", or position, specified.          | Boolean             |
| Deletion  | `removeTail` | Removes the node at the tail of the Linked List.                    | Removed node        |
| Deletion  | `removeHead` | Removes the node at the head of the Linked List.                    | Removed node        |
| Deletion  | `removeFrom` | Removes the node at the "index", or position, specified.            | Removed node        |
| Search    | `contains`   | Searches the Linked List for a node with the value specified.       | Boolean             |
| Access    | `get`        | Gets the node at the "index", or position, specified.               | Node at index       |
| Access    | `set`        | Updates the value of a node at the "index", or position, specified. | Boolean             |
| Meta      | `size`       | Returns the current size of the Linked List.                        | Integer             |

</details>

<details>
<summary>Linked List Time Complexity</summary>

Time and Space Complexity Analysis
----------------------------------

**Single Linked List Time Complexity:**

| Data Structure Operation | Time Complexity (Avg) | Time Complexity (Worst) | Space Complexity (Worst) |
| ------------------------ | --------------------- | ----------------------- | ------------------------ |
| Access                   | `Θ(n)`                | `O(n)`                  | `O(n)`                   |
| Search                   | `Θ(n)`                | `O(n)`                  | `O(n)`                   |
| Insertion                | `Θ(1)`                | `O(1)`                  | `O(n)`                   |
| Deletion                 | `Θ(1)`                | `O(1)`                  | `O(n)`                   |

**Doubly Linked List Time Complexity:**

| Data Structure Operation | Time Complexity (Avg) | Time Complexity (Worst) | Space Complexity (Worst) |
| ------------------------ | --------------------- | ----------------------- | ------------------------ |
| Access                   | `Θ(n)`                | `O(n)`                  | `O(n)`                   |
| Search                   | `Θ(n)`                | `O(n)`                  | `O(n)`                   |
| Insertion                | `Θ(1)`                | `O(1)`                  | `O(1)`                   |
| Deletion                 | `Θ(1)`                | `O(1)`                  | `O(1)`                   |

</details>

<details>
<summary>Linked List Code Implementation</summary>

### Single Linked List Implementation

---

```js 

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
```


### Doubly Linked List Implementation

```js
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
        }
    }
    pop() {
        if (!this.head) {
            return undefined;
        }
        let current = this.head;
        this.head = current.next;
        this.head.prev = null;
        current.next = null;
        this.length--;
        return current;
    }
    shift() {
        if (!this.head) {
            return undefined;
        }
        let current = this.head;
        this.head = current.next;
        this.head.prev = null;
        current.next = null;
        this.length--;
        return current;
    }
    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }
    get(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }
    set(index, val) {
        let current = this.get(index);
        if (current) {
            current.val = val;
            return true;
        }
        return false;
    }
    insert(index, val) {
        if (index < 0 || index > this.length) {
            return false;
        }
        if (index === this.length) {
            this.push(val);
        } else if (index === 0) {
            this.unshift(val);
        }
        else {
            let newNode = new Node(val);
            let before = this.get(index - 1);
            let after = before.next;
            before.next = newNode;
            newNode.prev = before;
            newNode.next = after;
            after.prev = newNode;
            this.length++;
        }
        return true;
    }
    remove(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        if (index === 0) {
            return this.shift();
        }
        if (index === this.length - 1) {
            return this.pop();
        }
        let removed = this.get(index);
        removed.prev.next = removed.next;
        removed.next.prev = removed.prev;
        removed.next = null;
        removed.prev = null;
        this.length--;
        return removed;
    }
}

```

</details>

<details>
<summary>Problem Solving Techniques</summary>

Fast/Slow Pointer

-  Slow Pointer is used to find the middle of the linked list
-  Fast Pointer is used to find the middle of the linked list and fast pointer are simply the two pointers name 
- If the fast pointer reaches the end of the linked list, then the slow pointer will be in the middle of the linked list
- The only difference between the fast and slow pointer is that the fast pointer will move two steps each time while the slow pointer will move one step each time

---

**[Examples](https://codeburst.io/fast-and-slow-pointer-floyds-cycle-detection-algorithm-9c7a8693f491)**

Dummy Node--> when you have a problem dealing with deleting or adding a node make a dummy head to take care of edge cases such as a list with only one node, or removing the head of the list 


</details>