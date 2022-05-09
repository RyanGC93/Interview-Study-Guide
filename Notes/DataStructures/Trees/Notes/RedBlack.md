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