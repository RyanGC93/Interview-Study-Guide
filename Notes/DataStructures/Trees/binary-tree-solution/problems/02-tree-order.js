/*
! Iterative solution
*/

function preOrderArrayIter(root) {
  if (!root) return [];
  const result = [];
  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    result.push(node.val);
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }
  return result;
}

function inOrderArrayIter(root) {
  if (!root) return [];
  const result = [];
  const stack = [];
  let current = root;
  while (stack.length || current) {
    if (current) {
      stack.push(current);
      current = current.left;
    } else {
      current = stack.pop();
      result.push(current.val);
      current = current.right;
    }
  }
  return result;
}

function postOrderArrayIter(root) {
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
  return result.reverse();
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
