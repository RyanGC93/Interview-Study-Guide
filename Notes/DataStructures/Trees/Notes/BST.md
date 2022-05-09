# Binary Search Tree

<details>
<summary>Overview</summary>

BST Properties
- **root.left < root**
- **root.right >= root**
- AND the left and Right subtree is a BST
## Time Complexity
| |Access|Search |Assertion|Deletion |Space|
|:----|:----|:----|:----|:----|:----|
|Binary Search Tree|O(n)|O(n)|O(n)|O(n)|O(n)|
> Insert, Delete, & Search are averagely O(log n)

</details>

<details>
<summary>Traversal Visualization</summary>

![](https://assets.aaonline.io/data_structures_algorithms/binary_search_trees/images/bsts.png)

</details>

<details>
<summary>Class Implementation</summary>

```js
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
    constructor() {
        this.root = null;
    }

    // Insert a node into the binary search tree
    insert(val, currentNode = this.root) {
        if (!currentNode) { // If the tree is empty
            this.root = new TreeNode(val); // Create a new node
            return 
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
            }
            else {
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
            return this.searchRecur(val, currentNode.left); //
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
            }else{
                currentNode = currentNode.right;
            }
        }
        return false;
    }

}
```
</details>

