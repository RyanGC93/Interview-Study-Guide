/*
! Iterative solution
*/

function preOrderArrayIter(root) { // Preorder traversal => root, left, right
  if (!root) return []; // base case
  const result = [];
  const stack = [root];
  while (stack.length) {
    const node = stack.pop(); // pop the last element
    result.push(node.val);  // push the value 1) visit root
    if (node.right) {
      stack.push(node.right); // push the right child
    }
    if (node.left) {
      stack.push(node.left); // push the left child
    }
  }
  return result;
}

function inOrderArrayIter(root) { // Inorder traversal => left, root, right
  if (!root) return [];
  const result = [];
  const stack = [];
  let current = root;
  while (stack.length || current) { // while the stack is not empty or the current node is not null
    if (current) { // if the current node is not null
      stack.push(current); // push the current node to the stack
      current = current.left; // set the current node to the left child
    } else {
      current = stack.pop();  // set the current node to the last element in the stack
      result.push(current.val); // push the value of the current node to the result
      current = current.right; // set the current node to the right child
    }
  }
  return result; // return the result
}

function postOrderArrayIter(root) { // Postorder traversal => left, right, root
  if (!root) return [];
  const result = [];
  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    result.push(node.val);
    if (node.left) {
      stack.push(node.left);
    }
    if (node.right) {
      stack.push(node.right);
    }
  }
  return result.reverse(); // return the result
}

/*
! Recursive solution
*/

   
function preOrderArrayRecur(root) {
    if (!root) return [];

    return [ 
        root.val,
        ...preOrderArrayRecur(root.left), 
        ...preOrderArrayRecur(root.right) 
    ];
}

function inOrderArrayRecur(root) {
    if (!root) return [];

    return [ 
        ...inOrderArrayRecur(root.left), 
        root.val, 
        ...inOrderArrayRecur(root.right) 
    ];
}

function postOrderArrayRecur(root) {
    if (!root) return [];

    return [
        ...postOrderArrayRecur(root.left),
        ...postOrderArrayRecur(root.right),
        root.val,
    ];
}

/*
COMMENT: The recusive solution utilizes a call stack to traverse the tree while the iterative does the same but uses a user-defined stack.
*/



module.exports = {
  preOrderArrayIter,
  inOrderArrayIter,
  postOrderArrayIter,
  preOrderArrayRecur,
  inOrderArrayRecur,
  postOrderArrayRecur,
};
