function breadthFirstSearch(startingNode, targetVal) {
  let queue = [startingNode]; // Queue is used since BFS is a FIFO
  let visited = new Set(); // We use a set to keep track of visited vertices to avoid cycles

  while (queue.length) {
    // while there are vertices in the queue (i.e. vertices that have not been visited)
    let node = queue.shift(); // remove the first vertex from the queue
    if (visited.has(node)) continue; // if the vertex has already been visited, skip it(avoid cycles)
    visited.add(node); // add the vertex to the set of visited vertices
    if (node.val === targetVal) return node; // if the vertex has the target value, return it

    queue.push(...node.neighbors); // add all of the vertices in the current vertex's adjacency list to the queue
  }
  return null;
}

module.exports = {
  breadthFirstSearch,
};
