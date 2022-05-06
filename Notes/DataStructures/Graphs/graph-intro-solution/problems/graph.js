
class Graph {
  constructor() {
    this.adjList = {};
  }

  addVertex(vertex) {
    this.adjList[vertex] = [];
  }
  addEdges(vertex1, vertex2) {
    this.adjList[vertex1].push(vertex2);
    this.adjList[vertex2].push(vertex1);
  }
  removeEdges(vertex1, vertex2) {
    this.adjList[vertex1] = this.adjList[vertex1].filter(v => v !== vertex2);
    this.adjList[vertex2] = this.adjList[vertex2].filter(v => v !== vertex1);
  }
  removeVertex(vertex) {
    while (this.adjList[vertex].length) {
      const adjacentVertex = this.adjList[vertex].pop();
      this.removeEdges(vertex, adjacentVertex);
    }
    delete this.adjList[vertex];
  }
  depthFirstTraversal(start) {
    const visited = {};
    const result = [];
    const adjacents = this.adjList[start];
    (function dfsHelper(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacents.forEach(v => {
        if (!visited[v]) {
          dfsHelper(v);
        }
      });
    })(start);
    return result;
  }
  breadthFirstTraversal(start) {
    const visited = {};
    const result = [];
    const queue = [start];
    visited[start] = true;
    while (queue.length) {
      const currentVertex = queue.shift();
      result.push(currentVertex);
      this.adjList[currentVertex].forEach(v => {
        if (!visited[v]) {
          visited[v] = true;
          queue.push(v);
        }
      });
    }
    return result;
  }

}

module.exports = {
  Graph
};









