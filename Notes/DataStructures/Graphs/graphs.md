# Graph
## Definition 

- A graph is a set of nodes and edges together with a set of unordered pairs of these vertices for an **undirected graph** or a set of ordered 
pairs for a **directed graph**.
  - It may or may not have cycles.
  - like a tree, it may or may not have a root.
  - have any number of edges leading from one node to another.


### Graph Representation
- Adjacency List
  - A list of nodes that are connected to each other.
  - Each node has a list of edges that connect to it.
  - Each edge has a node that it connects to.
- Adjacency Matrix
  - A 2D array of nodes that are connected to each other.
  - Each node has a list of edges that connect to it.
  - Each edge has a node that it connects to.
- Adjacency Set
  - A set of nodes that are connected to each other.
  - Each node has a list of edges that connect to it.
  - Each edge has a node that it connects to.

### Node Class Representation

<details>
<summary>Code</summary>

```js
class GraphNode {
  constructor(value) {
    this.value = value;
    this.edges = [];
  }
}
class GraphNode {
  constructor(value) {
    this.value = value;
    this.edges = [];
  }
}
```

</details>
## Class Representation (adjacent list)

<details>
<summary>Class Representation Code</summary>

  ```js
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

  ```
</details>




<br>
<br>
<br>

### Adjacency List

<details>
<summary>Adjacency List Code</summary>

```js
class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addNode(node) {
    if (!this.adjacencyList[node]) this.adjacencyList[node] = [];
  }
  addEdge(node1, node2) {
    this.adjacencyList[node1].push(node2);
    this.adjacencyList[node2].push(node1);
  }
  removeEdge(node1, node2) {
    this.adjacencyList[node1] = this.adjacencyList[node1].filter(node => node !== node2);
    this.adjacencyList[node2] = this.adjacencyList[node2].filter(node => node !== node1);
  }
  removeNode(node) {
    this.adjacencyList[node].forEach(neighbor => {
      this.removeEdge(node, neighbor);
    });
    delete this.adjacencyList[node];
  }
}
```

</details>

### Adjacency Matrix

<details>
<summary>Adjacency Matrix Code</summary>

```js
class Graph {
  constructor() {
    this.adjacencyMatrix = [];
  }
  addNode(node) {
    if (!this.adjacencyMatrix[node]) this.adjacencyMatrix[node] = [];
    this.adjacencyMatrix.forEach(row => {
      row.push(0);
    });
    this.adjacencyMatrix.push(Array(this.adjacencyMatrix.length).fill(0));
  }
  addEdge(node1, node2) {
    this.adjacencyMatrix[node1][node2] = 1;
    this.adjacencyMatrix[node2][node1] = 1;
  }
  removeEdge(node1, node2) {
    this.adjacencyMatrix[node1][node2] = 0;
    this.adjacencyMatrix[node2][node1] = 0;
  }
  removeNode(node) {
    this.adjacencyMatrix.forEach((row, i) => {
      if (i === node) return;
      row.forEach((edge, j) => {
        if (j === node) return;
        this.adjacencyMatrix[i][j] = 0;
      });
    });
    this.adjacencyMatrix.splice(node, 1);
    this.adjacencyMatrix.forEach(row => {
      row.splice(node, 1);
    });
  }
}
```

</details>

## Graph Traversal

### Graph Traversal w/ GraphNode

<details>
<summary>Graph Traversal w/ GraphNode Code</summary>


---

```js
// using GraphNode representation

function depthFirstRecur(node, visited=new Set()) {
    // if this node has already been visited, then return early
    if (visited.has(node.val)) return;

    // otherwise it hasn't yet been visited,
    // so print it's val and mark it as visited.
    console.log(node.val);
    visited.add(node.val);

    // then explore each of its neighbors
    node.neighbors.forEach(neighbor => {
        depthFirstRecur(neighbor, visited);
    });
}

depthFirstRecur(f);

```

### Iterative Depth First Search

```js
function depthFirstIter(node) {
    let visited = new Set();
    let stack = [ node ];

    while (stack.length) {
        let node = stack.pop();

        // if this node has already been visited, then skip this node
        if (visited.has(node.val)) continue;

        // otherwise it hasn't yet been visited,
        // so print it's val and mark it as visited.
        console.log(node.val);
        visited.add(node.val);

        // then add its neighbors to the stack to be explored
        stack.push(...node.neighbors);
    }
}

depthFirstIter(f);
```

</details>

<details>
<summary>Depth First Search Code with Adjacency List</summary>

# Graph Traversal w/ Adjacency List


  
```js
  // using Adjacency List representation

function depthFirstRecur(node, graph, visited=new Set()) {
    if (visited.has(node)) return;
    visited.add(node);
    graph[node].forEach(neighbor => {
        depthFirstRecur(neighbor, graph, visited);
    });
}

// Refactored

function depthFirst(graph) {
    let visited = new Set();

    for (let node in graph) {
        _depthFirstRecur(node, graph, visited);
    }
}

function _depthFirstRecur(node, graph, visited) {
    if (visited.has(node)) return;

    console.log(node);
    visited.add(node);

    graph[node].forEach(neighbor => {
        _depthFirstRecur(neighbor, graph, visited);
    });
}

