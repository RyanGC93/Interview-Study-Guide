# Data Structures
   
1. [Graphs](./Graphs/README.md)
2. [Linked Lists](./LinkedLists/README.md)
3. [Queues And Stacks](./QueuesAndStacks/README.md)
4. [Trees](./Trees/README.md)

# Advantages of Different Data Structures

![](https://miro.medium.com/max/1400/1*TXcoRpFxDTdRl0YYawE3XA.png)

<details>
<summary>Arrays</summary>

Pros
----

*   Easy to create, Easy to use
*   Direct indexing: O(1)
*   Sequential access: O(N)

Cons
----

*   Sorting: O(NLogN)
*   Searching: O(N), and O(LogN) if sorted
*   Inserting and deleting: O(N) because of shifting items.

</details>

<details>
<summary>Linked List</summary>

Pros
----

*   Inserting and deleting: O(1)
*   Sequential Access: O(N)

> Inserting and deleting operations refers to the operation itself, as you might need to sequentially access all the nodes until the node you’are looking for.
> 
> Inserting and deleting is much easier with doubly linked list.

Cons
----

*   No Direct Access; Only Sequential Access
*   Searching: O(N)
*   Sorting: O(NLogN)

</details>

<details>
<summary>Stacks and Queues</summary>

Stacks and queues have very specific purposes. Stacks are last in, first out data structure (LIFO), while queues are first in, first out (FIFO).

Pros
----

*   Push/Add: O(1)
*   Pop/Remove: O(1)
*   Peek: O(1)

**Cons**
--------

If you’re trying to do anything else with stacks or queues, like if you’re asking _how can I pull an item from the middle?._ Then, you should be looking at a different data structure.

</details>

<details>
<summary>Hash Tables</summary>


Pros
----

*   Inserting and deleting: O(1) + Hashing & Indexing (**amortized**).
*   Direct access: O(1) + Hashing & Indexing.

> It takes a little processing for the hashing and indexing. But the good thing about that is it’s the same amount of processing every time, even if the hash table gets very large.
> 
> When the hash table gets full, it will increase it’s size. And, when the number of filled buckets is much smaller than the size of the hash table, it will then decrease it’s size. Both operations take a complexity of O(N). That’s why insertion and deletion takes O(1) amortized**.**

Cons
----

*   Some overhead as require a little more space in memory than arrays.
*   Retrieval of elements doesn’t guarantee a specific order.
*   Searching for a value (without knowing it’s key).

</details>

<details>
<summary>Sets</summary>

Pros
----

*   Checking membership; value existence.
*   Avoids duplicates

> The complexity of checking if a value contained in the set depends on the underlying data structure used to implemented the set.
> 
> In C++, It uses a binary search tree (probably a red black tree; a type of self balancing binary search tree). So, the complexity would be O(LogN), and O(N) if the tree is unbalanced.
> 
> In Java, HashSet class implements the Set Interface using the hash table data structure. So, the complexity would be same as the hash tables(see above).

Cons
----

Sets are intentionally limited. There aren’t much you can do with them. So, they’re are terrible at almost everything else.

</details>

<details>
<summary>Binary Search Trees (BST)</summary>

Pros
----

*   Inserting and deleting
*   Speed of Access
*   Maintains sorted order; retrieval of elements is in order.

> The complexity of insertion, deletion, and accessing would be O(LogN), and O(N) if the tree is unbalanced.

Cons
----

*   Some overhead because of their creation and management.

</details>

<details>
<summary>Heaps</summary>

Heaps are a type of binary tree that are great for priority queues.

Pros
----

*   Find Min/Find Max: O(1)
*   Inserting: O(LogN)
*   Delete Min/Delete Max: O(LogN)

Cons
----

*   Searching and deleting: O(N)

> In searching and deleting, we will have to scan all the elements as they don’t guarantee a specific order, unlike BST.
> 
> Deleting requires to traverse the whole tree to access the element first, then delete it, where the deletion operation itself requires O(LogN).

</details>

<br>

Choosing the Right Data Structure to solve problems
===================================================

<details>
<summary> <b>Matrix</b> </summary>
Matrix
------

Matrix is a data structure that stores the data using rows and columns. The developer can use Matrix in the following use cases.

*   Matrix arithmetic in graphic processing algorithms.
*   Represent the graph.
*   Represent quadratic forms and linear algebra solution.

</details>

<details>
<summary> <b>Graph</b> </summary>
Graph
-----

The graph is an abstract data type that is meant to implement the graph and directed graph concepts from mathematics. The developer can use Graph in the following use cases.

*   Networks have many uses in the practical side of graph theory.
*   Finding the shortest path between the cities.
*   Solve the maze game.
*   Find the optimized route between the cities.

</details>

<details>
<summary> <b>Lists</b> </summary>

Linked List
-----------

The linked list is a data structure that links each node to the next node. The developer can use the linked list in the following use cases.

*   When the developer needs constant time for insertion and deletion.
*   When the data dynamically grows.
*   Do not access random elements from the linked list.
*   Insert the element in any position of the list.


Circular Linked List
--------------------

A circular linked list is a linked list in which the link field of the tail node link to the head node. The developer can use a circular linked list in the following use cases.

*   Develop the buffer memory.
*   Represent a deck of cards in a game.
*   Browser cache allows hitting the BACK button.
*   Implement the Most Recently Used (MRU) list.
*   Undo functionality in Photoshop or Word.


Doubly Linked List
------------------

Doubly linked is a data structure in which each node contains data and two links. One link point to the previous node and another link point to the next node. The developer can use a doubly linked list in the following uses cases.

*   Easier to delete the node from the doubly linked list.
*   It can be iterated in reverse order without recursion implementation.
*   Insert or remove from double-linked lists faster.

</details>
<details>
<summary> <b>Arrays,Stacks,& Queues</b> </summary>

Array
-----

The array is a data structure to store the same type of elements continuously. The developer can use an array in the following use cases.

*   Need access to the elements using the index.
*   Know the size of the array before defining the memory.
*   Speed when iterating through all the elements in the sequence.
*   The array takes less memory compare than a linked list.

Stack
-----

The stack is a last-in, first-out data structure. The developer can use the stack in the following use cases.

*   Expression evaluation and syntax parsing.
*   Finding the correct path in a maze using backtracking.
*   Runtime memory management.
*   Recursion function.

Queue
-----

The queue is a first in, first-out (FIFO) data structure. The developer can use Queue in the following use cases.

*   Use a queue when the developer wants an order.
*   Processed in First In First Out order.
*   If the developer wants to add or remove both ends, they can use the queue or a double-ended queue.

</details>

<details>
<summary> <b>Hashing</b> </summary>
Hashing
-------

Hash table is a data structure used to implement an associative array, a structure that can map keys to values. The developer can use a Hash table in the following use cases.

*   Constant time operation.
*   Inserts are generally slow, reads are faster than trees.
*   Hashing is used so that searching a database can be done more efficiently.
*   Internet routers use hash tables to route the data from one computer to another.
*   The Internet search engine uses a hash functions effectively.

</details>

<details>
<summary> <b>Trees</b> </summary>

Binary Tree
-----------

A binary tree is a tree data structure in which each node has at most two child nodes. The developer can use Binary Tree in the following use cases.

*   Find the name in the phone book.
*   Sorted traversal of the tree.
*   Find the next closest element.
*   Find all elements less than or greater than a certain value.

Binary Search Tree
------------------

A binary search tree is a tree data structure in which the root node is less than or equal to the left subtree and greater than or equal to the right subtree. The developer can use Binary Search Tree in the following use cases.

*   Binary Search Trees are memory-efficient.
*   Use when the data need to be sorted.
*   Search can be done for a range of values.
*   Height balancing helps to reduce the running time.

Heap
----

A heap is a specialized tree-based abstract data type that satisfies the heap property. The developer can use Heap in the following use cases.

*   Implement Priority Queue.
*   whenever the developer wants quick access to the largest (or smallest) item.
*   Good for selection algorithms (finding the min or max).
*   Operations tend to be faster than for a binary tree.
*   Heap sort sorting methods being in-place and with no quadratic worst-case scenarios.
*   Graph algorithms are using heaps as internal traversal data structures, the run time will be reduced by polynomial order.

Red-Black Tree
--------------

Red–black tree is a binary search tree with an extra bit of data per node, its color, which can be either red or black. The developer can use Red-Black Tree in the following use cases.

*   Java TreeMap and C++ map implemented using Red Block Tree.
*   Computational Geometry Data structures.
*   Scheduler applications.

B-Tree
------

B-tree is a tree data structure that keeps data sorted and allows searches, sequential access, insertions, and deletions in logarithmic time. The developer can use B-Tree in the following use cases.

*   File systems.
*   Database operations.


Splay Tree
----------

A splay tree is a self-adjusting binary search tree with the additional property that recently accessed elements are quick to access again. The developer can use Splay Tree in the following use cases.

*   When the developer wants to access to the recent data easily.
*   Allow duplicate items.
*   Simple implementation and take less memory.
*   When the application deals with a lot of data, use the splay-tree.

AVL Tree
--------

AVL tree, the shape of the tree is constrained at all times such that the tree shape is balanced. The height of the tree never exceeds O(log n). The developer can use AVL Tree in the following use cases.

*   When the developer wants to control the tree height outside -1 to 1 range.
*   Fast looking element.

Trie
----

A Trie (digital tree and sometimes radix tree or prefix tree), is an ordered tree data structure that is used to store a dynamic set or associative array where the keys are usually strings. The developer can use Trie in the following use cases.

*   Fixed dictionary and want to look up quickly.
*   Require less storage for a large dictionary.
*   Matching sentences during string matching.
*   Predictable O(k) lookup time where k is the size of the key.
*   Lookup can take less than k time if it’s not there.
*   Supports ordered traversal.
*   No need for a hash function.
*   Deletion is straightforward.

Minimum Spanning Tree
---------------------

A spanning tree of that graph is a subgraph that is a tree and connects all the vertices together. A minimum spanning tree (MST) or minimum weight spanning tree is then a spanning tree with weight less than or equal to the weight of every other spanning tree. The developer can use Minimum Spanning Tree in the following use cases.

*   Describe financial markets.
*   Handwriting recognition of mathematical expressions.
*   Image registration and segmentation.
*   Constructing trees for broadcasting in computer networks.

We discussed different data structures and uses cases to choose the appropriate data structure. When the candidate attends the technical coding interview or uses the application programming interface in software development, the candidate must choose the correct data structure. If the candidate uses the incorrect data structure, it may work. But the programs may fail with more data or with the different use cases.

</details>

