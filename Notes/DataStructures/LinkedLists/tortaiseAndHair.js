class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }

    return this;
  }

  includes(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

}

//! Examples of Two Pointers(fast and slow, Tortoise and Hare) Implementations
//! Time Complexity: O(n), Space Complexity: O(1)

//! check if a linked list has a cycle
function cycleCheck(list) { // O(n)
  let slow = list.head; // Define slow pointer
  let fast = list.head; // Define fast pointer

  while (fast && fast.next) { // While fast pointer is not null and fast pointer next is not null
    slow = slow.next; // Move slow pointer to next
    fast = fast.next.next;  // Move fast pointer to next next (2 steps)
    if (slow === fast) { // If slow pointer and fast pointer are equal
      return true; // Return true
    }
  }
  return false; // If fast pointer is null and fast pointer next is null, return false
}

//! find if there is an intersection in a linked list
function intersection(list1, list2) { // O(n)
  if (cycleCheck(list1) || cycleCheck(list2)) { // If either list has a cycle
    return null; // Return null
  } else { // If neither list has a cycle
    let current1 = list1.head; // Define current1 as head of list1
    let current2 = list2.head; // Define current2 as head of list2
    while (current1.next) { // While current1 is not null
      current1 = current1.next; // Move current1 to next
    }
    while (current2.next) { // While current2 is not null
        current2 = current2.next; // Move current2 to next
        }    
    if (current1 === current2) { // If current1 and current2 are equal
        return current1; // Return current1
        }
    return null; // If current1 and current2 are not equal, return null
  }
}

function findDuplicates(list) { // O(n)
  let current = list.head; // Define current as head of list
  let values = {}; // Define values as an object
  while (current) { // While current is not null
    if (values[current.value]) { // If value of current is in values
      return true; // Return true
    }
    values[current.value] = true; // Add value of current to values
    current = current.next; // Move current to next
  }
  return false;     // If current is null, return false
}