# Self Balancing Trees

# Overview

<details>
<summary>Details</summary>

Self-Balancing-Binary-Search-Trees (Comparisons)
================================================


**Self-Balancing Binary Search Trees** are _**height-balanced**_ binary search trees that automatically keeps height as small as possible when insertion and deletion operations are performed on tree. The height is typically maintained in order of Log n so that all operations take O(Log n) time on average.

**Examples :**  
- Red Black Tree  
- AVL Tree:  

**How do Self-Balancing-Tree maintain height?**  
A typical operation done by trees is rotation. Following are two basic operations that can be performed to re-balance a BST without violating the BST property (keys(left) < key(root) < keys(right)).  
1) Left Rotation  
2) Right Rotation



We have already discussed [AVL tree](https://www.geeksforgeeks.org/avl-tree-set-1-insertion/), [Red Black Tree](https://www.geeksforgeeks.org/red-black-tree-set-1-introduction-2/) and [Splay Tree](https://www.geeksforgeeks.org/splay-tree-set-2-insert-delete/)

# Time Complexity of Balanced Trees

| Metric | RB Tree | AVL Tree | Splay Tree |
| --- | --- | --- | --- |
| **Insertion in**  
**worst case** | **O(1)** | **O(logn)** | **Amortized O(logn)** |
| **Maximum height**  
**of tree** | **2\*log(n)** | **1.44\*log(n)** | **O(n)** |
| **Search in**  
**worst case** | **O(logn),**  
**Moderate** | **O(logn),**  
**Faster** | **Amortized O(logn),**  
**Slower** |
| **Efficient Implementation requires** | **Three pointers with color bit per node** | **Two pointers with balance factor per**  
**node** | **Only two pointers with**  
**no extra information** |
| **Deletion in**  
**worst case** | **O(logn)** | **O(logn)** | **Amortized O(logn)** |
| **Mostly used** | **As universal data structure** | **When frequent lookups are required** | **When same element is**  
**retrieved again and again** |
| **Real world Application** | **Database Transactions** | **Multiset, Multimap, Map, Set, etc.** | **Cache implementation, Garbage collection Algorithms** |

</details>

# Common Examples

<details>
<summary>Red-Black Tree</summary>

# Red-Black Tree

### Definition
- A red-black tree is a binary search tree that satisfies the following properties:
  - Every node is either red or black.
  - The root is black.
  - Every leaf (NIL) is black.
  - If a node is red, then both its children are black.
  - For each node, all simple paths from the node to descendant leaves contain the same number of black nodes.

#### **Why Red-Black Trees?**

Most of the BST operations (e.g., search, max, min, insert, delete.. etc) take O(h) time where h is the height of the BST. The cost of these operations may become O(n) for a skewed Binary tree. If we make sure that the height of the tree remains O(log n) after every insertion and deletion, then we can guarantee an upper bound of O(log n) for all these operations. The height of a Red-Black tree is always O(log n) where n is the number of nodes in the tree.



```js
	class Node { // Red-Black Tree Node
		constructor(key) {
			this.key = key;
			this.left = null;
			this.right = null;
			this.color = 'RED';
		}
	}

	class RedBlackTree {
		constructor() {
			this.root = null;
		}

		getNewNode(key) {
			return new Node(key);
		}
		getMax(node) {
			if (node == null)
				return null;

			while (node.right != null)
				node = node.right;

			return node;
		}
		getMin(node) {
			if (node == null)
				return null;

			while (node.left != null)
				node = node.left;

			return node;
		}
```

</details>

<details>
<summary> AVL Tree</summary>

# AVL Tree

## Definition
- It is a self-balancing binary search tree (BST) where the heights of the two subtrees of any node never differ by more than one.

## Why AVL Trees?

> Most of the BST operations (e.g., search, max, min, insert, delete.. etc) take O(h) time where h is the height of the BST. The cost of these operations may become O(n) for a skewed Binary tree. If we make sure that height of the tree remains O(Logn) after every insertion and deletion, then we can guarantee an upper bound of O(Logn) for all these operations. The height of an AVL tree is always O(Logn) where n is the number of nodes in the tree

**Insertion**  
- To make sure that the given tree remains AVL after every insertion, we must augment the standard BST insert operation to perform some re-balancing. 
- Following are two basic operations that can be performed to re-balance a BST without violating the BST property (keys(left) < key(root) < keys(right)).  

1) Left Rotation  
2) Right Rotation

T1, T2 and T3 are subtrees of the tree 
rooted with y (on the left side) or x (on 
the right side)      
```

     y                               x
    / \\     Right Rotation          /  \\
   x   T3   - - - - - - - >        T1   y 
  / \\       < - - - - - - -            / \\
 T1  T2     Left Rotation            T2  T3
 ```
Keys in both of the above trees follow the 
following order 
 keys(T1) < key(x) < keys(T2) < key(y) < keys(T3)
So BST property is not violated anywhere.

**Implementation**  
Following is the implementation for AVL Tree Insertion. The following implementation uses the recursive BST insert to insert a new node. In the recursive BST insert, after insertion, we get pointers to all ancestors one by one in a bottom-up manner. So we don’t need parent pointer to travel up. The recursive code itself travels up and visits all the ancestors of the newly inserted node.  
1) Perform the normal BST insertion.  
2) The current node must be one of the ancestors of the newly inserted node. Update the height of the current node.  
3) Get the balance factor (left subtree height – right subtree height) of the current node.  
4) If balance factor is greater than 1, then the current node is unbalanced and we are either in Left Left case or left Right case. To check whether it is left left case or not, compare the newly inserted key with the key in left subtree root.  
5) If balance factor is less than -1, then the current node is unbalanced and we are either in Right Right case or Right-Left case. To check whether it is Right Right case or not, compare the newly inserted key with the key in right subtree root.


## Code Example

```js
<script>

	// JavaScript program for insertion in AVL Tree
	class Node {
		constructor(d) {
		this.key = d;
		this.height = 1;
		this.left = null;
		this.right = null;
		}
	}

	class AVLTree {
		constructor() {
		this.root = null;
		}

		// A utility function to get
		// the height of the tree
		height(N) {
		if (N == null) return 0;

		return N.height;
		}

		// A utility function to get
		// maximum of two integers
		max(a, b) {
		return a > b ? a : b;
		}

		// A utility function to right
		// rotate subtree rooted with y
		// See the diagram given above.
		rightRotate(y) {
		var x = y.left;
		var T2 = x.right;

		// Perform rotation
		x.right = y;
		y.left = T2;

		// Update heights
		y.height = this.max(this.height(y.left),
		this.height(y.right)) + 1;
		x.height = this.max(this.height(x.left),
		this.height(x.right)) + 1;

		// Return new root
		return x;
		}

		// A utility function to left
		// rotate subtree rooted with x
		// See the diagram given above.
		leftRotate(x) {
		var y = x.right;
		var T2 = y.left;

		// Perform rotation
		y.left = x;
		x.right = T2;

		// Update heights
		x.height = this.max(this.height(x.left),
		this.height(x.right)) + 1;
		y.height = this.max(this.height(y.left),
		this.height(y.right)) + 1;

		// Return new root
		return y;
		}

		// Get Balance factor of node N
		getBalance(N) {
		if (N == null) return 0;

		return this.height(N.left) - this.height(N.right);
		}

		insert(node, key) {
		/* 1. Perform the normal BST insertion */
		if (node == null) return new Node(key);

		if (key < node.key)
		node.left = this.insert(node.left, key);
		else if (key > node.key)
		node.right = this.insert(node.right, key);
		// Duplicate keys not allowed
		else return node;

		/* 2. Update height of this ancestor node */
		node.height =
			1 + this.max(this.height(node.left),
				this.height(node.right));

		/* 3. Get the balance factor of this ancestor
			node to check whether this node became
			unbalanced */
		var balance = this.getBalance(node);

		// If this node becomes unbalanced, then there
		// are 4 cases Left Left Case
		if (balance > 1 && key < node.left.key)
		return this.rightRotate(node);

		// Right Right Case
		if (balance < -1 && key > node.right.key)
			return this.leftRotate(node);

		// Left Right Case
		if (balance > 1 && key > node.left.key) {
			node.left = this.leftRotate(node.left);
			return this.rightRotate(node);
		}

		// Right Left Case
		if (balance < -1 && key < node.right.key) {
			node.right = this.rightRotate(node.right);
			return this.leftRotate(node);
		}

		/* return the (unchanged) node pointer */
		return node;
		}

		// A utility function to print preorder traversal
		// of the tree.
		// The function also prints height of every node
		preOrder(node) {
		if (node != null) {
			document.write(node.key + " ");
			this.preOrder(node.left);
			this.preOrder(node.right);
		}
		}
	}
	// Driver code
	var tree = new AVLTree();

	/* Constructing tree given in the above figure */
	tree.root = tree.insert(tree.root, 10);
	tree.root = tree.insert(tree.root, 20);
	tree.root = tree.insert(tree.root, 30);
	tree.root = tree.insert(tree.root, 40);
	tree.root = tree.insert(tree.root, 50);
	tree.root = tree.insert(tree.root, 25);

	/* The constructed AVL Tree would be
			30
			/ \
		20 40
		/ \ \
		10 25 50
		*/
	document.write(
	"Preorder traversal of the " + "constructed AVL tree is <br>"
	);
	tree.preOrder(tree.root);
	
</script>
```



# Time Complexity:
- **Rotation Operations**  are constant time.
- Time complexity of **insert*** **is O(Logn)**

<details>
<summary>Source Code</summary>

**Time Complexity:** The rotation operations (left and right rotate) take constant time as only a few pointers are being changed there. Updating the height and getting the balance factor also takes constant time. So the time complexity of AVL insert remains same as BST insert which is O(h) where h is the height of the tree. Since AVL tree is balanced, the height is O(Logn). So time complexity of AVL insert is O(Logn).  

</details>

**Comparison with Red Black Tree**  
- The AVL tree and other self-balancing search trees like Red Black are useful to get all basic operations done in O(log n) time. 
- The AVL trees are more balanced compared to Red-Black Trees, but they may cause more rotations during insertion and deletion. 
	- So if your application involves many frequent insertions and deletions, then Red Black trees should be preferred.
	- And if the insertions and deletions are less frequent and search is the more frequent operation, then AVL tree should be preferred over [Red Black Tree](https://www.geeksforgeeks.org/red-black-tree-set-1-introduction-2/).
</details>
