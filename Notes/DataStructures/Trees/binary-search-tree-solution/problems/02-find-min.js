function findMin(root) {
  if (!root) return null; // if the root is null, return null
  if(!root.left && !root.right){ // if the root has no left and no right child, return the root
      return root
  }
  if (!root.left && root.right) { // if the root has no left child but has a right child, return the right child
    return root
  }
  if (root.left) { // if the root has a left child, return the left child
    return findMin(root.left)
  }
  return root
}


module.exports = {
  findMin
};