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
        // Your code here
    }

    // Insert a node into the binary search tree
    insert(val, currentNode=this.root) {
        // Your code here
    }

    // Perform a recursive search through the binary search tree
    searchRecur(val, currentNode=this.root) {
        // Your code here
    }

    // Perform an iterative search through the binary search tree
    searchIter(val) {
        // Your code here
    }
}

module.exports = {
    TreeNode,
    BST
};