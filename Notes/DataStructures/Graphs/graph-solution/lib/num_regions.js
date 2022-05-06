
function numRegions(graph) {
    let visited = new Set();
    let regions = 0;

    for (let node in graph) { // for each node in the graph
        if (isNewRegion(node, graph, visited)) regions++; // if the node is a new region, increment the region count
    }

    return regions;
}

function isNewRegion(node, graph, visited) {
    if (visited.has(node)) return false; // if the node has already been visited, return false

    visited.add(node); // add the node to the visited set

    graph[node].forEach((neighbor) => { // for each neighbor of the node
        isNewRegion(neighbor, graph, visited); // recurse through the graph to find all the neighbors of the neighbors
    });

    return true;
}


module.exports = {
    numRegions
};