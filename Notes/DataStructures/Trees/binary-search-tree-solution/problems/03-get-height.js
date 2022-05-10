function getHeight(root) {
  if (!root) return -1; // if the root is null, return -1
  if (!root.left && !root.right) return 0; // if the root has no left and no right child, return 0
  if (root.right) return 1 + getHeight(root.right); // if the root has a right child, return 1 + the height of the right child

  if (root.left) return 1 + getHeight(root.left); // if the root has a left child, return 1 + the height of the left child
  return 1 + getHeight(root.right); // if the root has no left child but has a right child, return 1 + the height of the right child
}

module.exports = {
  getHeight
};