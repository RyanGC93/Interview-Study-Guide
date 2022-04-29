function dfs(root){
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

module.exports = { dfs };