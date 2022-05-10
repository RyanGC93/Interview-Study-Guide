class TreeNode {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

class BST {
	// Initialize an empty binary search tree
	constructor() {
		this.root = null;
	}

	// Insert a node into the binary search tree
	insert(val, currentNode = this.root) {
		if (!currentNode) {
			this.root = new TreeNode(val);
			return;
		}
		if (val < currentNode.val) {
			if (!currentNode.left) {
				currentNode.left = new TreeNode(val);
			} else {
				this.insert(val, currentNode.left);
			}
		} else {
			if (!currentNode.right) {
				currentNode.right = new TreeNode(val);
			} else {
				this.insert(val, currentNode.right);
			}
		}
	}

	// Perform a recursive search through the binary search tree
	searchRecur(val, currentNode = this.root) {
		if (!currentNode) {
			return false;
		}
		if (val === currentNode.val) {
			return true;
		}
		if (val < currentNode.val) {
			return this.searchRecur(val, currentNode.left);
		}
		if (val > currentNode.val) {
			return this.searchRecur(val, currentNode.right);
		}
	}
	// Perform an iterative search through the binary search tree
	searchIter(val, currentNode = this.root) {
		while (currentNode) {
			if (!currentNode) {
				return false;
			}
			if (val === currentNode.val) {
				return true;
			}
			if (val < currentNode.val) {
				currentNode = currentNode.left;
			} else {
				currentNode = currentNode.right;
			}
		}
		return false;
	}
}

module.exports = {
	TreeNode,
	BST,
};
