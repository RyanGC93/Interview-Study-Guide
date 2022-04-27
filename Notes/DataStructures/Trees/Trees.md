# Trees

## Common Trees

- Generic binary tree
- Binary search tree
- AVL tree
- Red-black tree
- heap
- priority queue

## Basic Tree Terminology

- **tree** - graph with no cycles
- **binary tree** - tree where nodes have at most 2 nodes
- **root** - the ultimate parent, the single node of a tree that can access every other node through edges; by definition the root will not have a parent
- **internal node** - a node that has children
- **leaf** - a node that does not have any children
- **path** - a series of nodes that can be traveled through edges - for example A, B, E is a path through the above tree
- **edge** - a connection between two nodes
- **balanced** - a tree where the difference in height between any two nodes is at most 1
- **complete** - a tree where all levels are filled, with the possible exception of the last level and the bottom has all nodes filled as far left as possible
- **depth** - the number of edges from the root to a node
- **BFS** - breadth first search (Uses a queue)
- **DFS** - depth first search (Uses a stack)
  - **Pre-order** - visit the root node first, then visit the left subtree, then the right subtree
  - **In-order** - visit the left subtree, then the root node, then the right subtree
  - **Post-order** - visit the left subtree, then the right subtree, then the root node

## Binary Search Tree

---
### Definition

- the left subtree contains values less than the root **left < root**
- AND the right subtree contains values greater than or equal to the root **right >= root**
- AND the left subtree is a Binary Search Tree
- AND the right subtree is a Binary Search Tree


### Node Representation

```js
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
```



