## Graph

#### Defintion 

- A graph is a set of nodes and edges.
  - It may or may not have cycles.
  - like a tree, it may or may not have a root.
  - have any number of edges leading from one node to another.


#### Node Representation

```js
class GraphNode {
  constructor(value) {
    this.value = value;
    this.edges = [];
  }
}
```

### Adjacency List

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


### Adjacency Matrix

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

#### Graph Traversal
