class Graph {
  constructor() {
    this.adjList = {};
  }

  addVertex(vertex) {
    if (!this.adjList[vertex]) this.adjList[vertex] = []; // if vertex doesn't exist, create it
  }

  addEdges(srcValue, destValue) {
    if (!this.adjList[srcValue]) this.addVertex(srcValue); // if srcValue doesn't exist, create it
    if (!this.adjList[destValue]) this.addVertex(destValue); // if destValue doesn't exist, create it

    this.adjList[srcValue].push(destValue); // add destValue to srcValue's adjacency list
    this.adjList[destValue].push(srcValue); // add srcValue to destValue's adjacency list
  }

  buildGraph(edges) {
    // edges is an array of arrays of vertices
    for (let edge of edges) {
      // for each edge in the array of arrays of vertices
      if (edge.length === 1) {
        // if edge is a single vertex (i.e. a vertex with no neighbors)
        this.addVertex(edge[0]); // add the vertex to the graph
      } else {
        this.addEdges(edge[0], edge[1]); // add the edge to the graph
      }
    }
    return this.adjList;
  }

  breadthFirstTraversal(startingVertex) {
    const visited = new Set(); // We use a set to keep track of visited vertices to avoid cycles
    const vertices = [];
    const queue = [startingVertex]; // Queue is used since BFS is a FIFO

    while (queue.length) {
      // while there are vertices in the queue (i.e. vertices that have not been visited)
      let currentVertex = queue.shift(); // remove the first vertex from the queue
      if (visited.has(currentVertex)) continue; // if the vertex has already been visited, skip it(avoid cycles)
      visited.add(currentVertex); // add the vertex to the set of visited vertices
      vertices.push(currentVertex); // add the vertex to the array of vertices

      queue.push(...this.adjList[currentVertex]); // add all of the vertices in the current vertex's adjacency list to the queue
    }

    return vertices;
  }

  depthFirstTraversalIterative(startingVertex) {
    const visited = new Set(); // We use a set to keep track of visited vertices to avoid cycles
    const vertices = [];
    const stack = [startingVertex]; // Stack is used since DPS is a LIFO

    while (stack.length) {
      // while there are vertices in the stack (i.e. vertices that have not been visited)
      let currentVertex = stack.pop(); // remove the last vertex from the stack
      if (visited.has(currentVertex)) continue; // if the vertex has already been visited, skip it(avoid cycles)
      visited.add(currentVertex); // add the vertex to the set of visited vertices
      vertices.push(currentVertex); // add the vertex to the array of vertices

      stack.push(...this.adjList[currentVertex]); // add all of the vertices in the current vertex's adjacency list to the stack
    }

    return vertices;
  }

  depthFirstTraversalRecursive(
    startingVertex,
    visited = new Set(),
    vertices = []
  ) {
    if (visited.has(startingVertex)) return;
    visited.add(startingVertex);
    vertices.push(startingVertex);
    for (let neighbor of this.adjList[startingVertex]) {
      // for each neighbor of the starting vertex
      this.depthFirstTraversalRecursive(neighbor, visited, vertices); // recursively call depthFirstTraversalRecursive on the neighbor
    }
    return vertices;
  }
}

module.exports = {
  Graph,
};
