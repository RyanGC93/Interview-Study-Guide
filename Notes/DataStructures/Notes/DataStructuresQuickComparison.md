[Link to Article](https://medium.com/omarelgabrys-blog/data-structures-a-quick-comparison-6689d725b3b0)
----

Data Structures — A Quick Comparison 
=============================================


![bigocheatsheet.com](https://miro.medium.com/max/1225/1*TXcoRpFxDTdRl0YYawE3XA.png)

Each data structure has it’s own unique characteristics and uses cases.

Arrays
======

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

Linked List
-----------

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

Stacks and Queues
=================

Stacks and queues have very specific purposes. Stacks are last in, first out data structure (LIFO), while queues are first in, first out (FIFO).

Pros
----

*   Push/Add: O(1)
*   Pop/Remove: O(1)
*   Peek: O(1)

**Cons**
--------

If you’re trying to do anything else with stacks or queues, like if you’re asking _how can I pull an item from the middle?._ Then, you should be looking at a different data structure.

Hash Tables
===========

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

Sets
====

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

Binary Search Trees (BST)
=========================

Pros
----

*   Inserting and deleting
*   Speed of Access
*   Maintains sorted order; retrieval of elements is in order.

> The complexity of insertion, deletion, and accessing would be O(LogN), and O(N) if the tree is unbalanced.

Cons
----

*   Some overhead because of their creation and management.

Heaps
=====

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
