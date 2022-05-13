# Trees

<details>
<summary>What is a Tree? </summary>

First of all, a tree is a graph with no cycles.
  - A graph is a set of nodes and edges.


</details>

<details>
<summary>Common Types of Trees</summary>

## Common Trees

- Generic binary tree
- [Binary search tree](./Notes/BST.md)
- [Avl tree](./Notes/AVL.md)
- [Hash](./Notes/Hash.md)
- [Heap](./Notes/Heap.md)
- [Red-black tree](./Notes/RedBlack.md)

</details>


<details>
<summary>Node Representation</summary>

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
</details>


<details>
<summary>Basic Tree Terminology</summary>

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

</details>

<details>
<summary>Tree Traversal</summary>

### All Traversal Methods are O(n)

<details>
<summary> Tree Traversal Visualization                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </summary>

![](https://miro.medium.com/max/1004/1*eyqACQAziXkSuMNmMeTa6A.png)

</details>

1. **BFS** - breadth first search (Uses a queue)

```js
function bfs(root) {
  const queue = [root];
  const visited = [];

  while (queue.length) {
    const node = queue.shift();
    visited.push(node);

    if (node.left) {
      queue.push(node.left);
    }

    if (node.right) {
      queue.push(node.right);
    }
  }

  return visited;
}
```

2. **DFS** - depth first search (Uses a stack)
  - **Pre-order** - root, left, right >> [leetcode](https://leetcode.com/problems/binary-tree-preorder-traversal/)
  - **In-order** - left, root, right >> [leetcode](https://leetcode.com/problems/binary-tree-inorder-traversal/)
  - **Post-order** - left, right, root >> [leetcode](https://leetcode.com/problems/binary-tree-postorder-traversal/)

```js
function dfs(root) {
  const stack = [root];
  const visited = [];

  while (stack.length) {
    const node = stack.pop();
    visited.push(node);

    if (node.right) {
      stack.push(node.right);
    }

    if (node.left) {
      stack.push(node.left);
    }
  }

  return visited;
}
```
**DFS Recursive**

```js

/*
! Recursive solution
*/

   
function preOrderArrayRecur(root) { // root, left, right
    if (!root) return [];

    return [ 
        root.val,
        ...preOrderArrayRecur(root.left), // left
        ...preOrderArrayRecur(root.right) 
    ];
}

function inOrderArrayRecur(root) { // left, root, right
    if (!root) return [];

    return [ 
        ...inOrderArrayRecur(root.left), 
        root.val, 
        ...inOrderArrayRecur(root.right) 
    ];
}

function postOrderArrayRecur(root) { // left, right, root
    if (!root) return [];

    return [
        ...postOrderArrayRecur(root.left),
        ...postOrderArrayRecur(root.right),
        root.val,
    ];
}


```



</details>
<br>
<br>



