// Write a function that takes in the root of a
// binary search tree and returns the height.
// You may use your BST implementation to test this out.
function getHeight(root) {
  if (!root) return -1;
  if (!root.left && !root.right) return 0;
  if (root.right) return 1 + getHeight(root.right);

  if (root.left) return 1 + getHeight(root.left);
  return 1 + getHeight(root.right);
}

module.exports = {
  getHeight
};