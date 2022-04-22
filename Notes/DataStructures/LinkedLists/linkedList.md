# Linked Lists






**Linked List Properties:**

| Property | Description |
| --- | --- |
| `head` | The first node in the list. |
| `tail` | The last node in the list. |
| `length` | The number of nodes in the list; the list's length. |



**Linked List Node Properties:**

| Property | Description |
| --- | --- |
| `value` | The actual value this node represents. |
| `next` | The next node in the list (relative to this node). |
| `previous` | The previous node in the list (relative to this node). |

**NOTE:** The `previous` property is for Doubly Linked Lists only!

**Linked List Types:**

| List Type | Description | Directionality |
| --- | --- | --- |
| Singly Linked | Nodes have a single pointer connecting them in a single direction. | Head→Tail |
| Doubly Linked | Nodes have two pointers connecting them bi-directionally. | Head⇄Tail |
| Multiply Linked | Nodes have two or more pointers, providing a variety of potential node orderings. | Head⇄Tail, A→Z, Jan→Dec, etc. |
| Circularly Linked | Final node's `next` pointer points to the first node, creating a non-linear, circular version of a Linked List. | Head→Tail→Head→Tail |

**Linked List Methods:**

| Type | Name | Description | Returns |
| --- | --- | --- | --- |
| Insertion | `addToTail` | Adds a new node to the tail of the Linked List. | Updated Linked List |
| Insertion | `addToHead` | Adds a new node to the head of the Linked List. | Updated Linked List |
| Insertion | `insertAt` | Inserts a new node at the "index", or position, specified. | Boolean |
| Deletion | `removeTail` | Removes the node at the tail of the Linked List. | Removed node |
| Deletion | `removeHead` | Removes the node at the head of the Linked List. | Removed node |
| Deletion | `removeFrom` | Removes the node at the "index", or position, specified. | Removed node |
| Search | `contains` | Searches the Linked List for a node with the value specified. | Boolean |
| Access | `get` | Gets the node at the "index", or position, specified. | Node at index |
| Access | `set` | Updates the value of a node at the "index", or position, specified. | Boolean |
| Meta | `size` | Returns the current size of the Linked List. | Integer |


Time and Space Complexity Analysis
----------------------------------

| Data Structure Operation | Time Complexity (Avg) | Time Complexity (Worst) | Space Complexity (Worst) |
| --- | --- | --- | --- |
| Access | `Θ(n)` | `O(n)` | `O(n)` |
| Search | `Θ(n)` | `O(n)` | `O(n)` |
| Insertion | `Θ(1)` | `O(1)` | `O(n)` |
| Deletion | `Θ(1)` | `O(1)` | `O(n)` |