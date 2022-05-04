function breadthFirstSearch(startingNode, targetVal) {
    if(startingNode.val === targetVal) {
        return startingNode;
    }
    let queue = [startingNode];
    while(queue.length > 0) {
        let currentNode = queue.shift();
        if(currentNode.val === targetVal) {
            return currentNode;
        } else {
            if(currentNode.left) {
                queue.push(currentNode.left);
            }
            if(currentNode.right) {
                queue.push(currentNode.right);
            }
        }  
    }
    return null;
}

module.exports = {
    breadthFirstSearch
};