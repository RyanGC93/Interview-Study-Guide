function maxValue(node, visited=new Set()) {
    if (visited.has(node)) return 0; // if the vertex has already been visited, return 0
    visited.add(node); // add the vertex to the set of visited vertices
    let max = node.val; // assign the value of the current vertex to max
    for (let neighbor of node.neighbors) { // for each neighbor of the current vertex
        max = Math.max(max, maxValue(neighbor, visited)); // recursively call maxValue on the neighbor and assign the result to max
    }
    return max;
}

module.exports = {
    maxValue
};