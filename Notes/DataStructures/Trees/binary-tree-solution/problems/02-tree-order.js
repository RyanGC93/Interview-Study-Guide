function preOrderArray(root) {
    if(!root) return [];
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

function inOrderArray(root) {
    if(!root) return [];
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

function postOrderArray(root) {
    if(!root) return [];
    const result = [];
    const stack = [root];
    let current = root;
    while (stack.length) {
        current = stack.pop();
        result.push(current.val);
        if (current.left) {
            stack.push(current.left);
        }
        if (current.right) {
            stack.push(current.right);
        }
    }
    return result;
}
module.exports = {
  preOrderArray,
  inOrderArray,
  postOrderArray
};
