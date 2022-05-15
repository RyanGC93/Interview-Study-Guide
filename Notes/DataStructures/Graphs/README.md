# Graph
## Definition 

- A graph is a set of nodes and edges together with a set of unordered pairs of these vertices for an **undirected graph** or a set of ordered 
pairs for a **directed graph**.
  - It may or may not have cycles.
  - like a tree, it may or may not have a root.
  - have any number of edges leading from one node to another.

<br></br>

## Graph Representation

<details>
<summary style="margin-bottom:8px">Adjacency Matrix</summary>

  - A 2D array of nodes that are connected to each other.
  - Each node has a list of edges that connect to it.
  - Each edge has a node that it connects to.

```javascript
let matrix = [
/*          A       B       C       D       E       F   */
/*A*/    [true,  true,   true,   false,  true,   false],
/*B*/    [false, true,   false,  false,  false,  false],
/*C*/    [false, true,   true,   true,   false,  false],
/*D*/    [false, false,  false,  true,   false,  false],
/*E*/    [true,  false,  false,  false,  true,   false],
/*F*/    [false, false,  false,  false,  true,   true]
];
```

</details>
<details>
<summary style="margin-bottom:8px"> Adjacency List </summary> 

  - A list of nodes that are connected to each other.
  - Each node has a list of edges that connect to it.
  - Each edge has a node that it connects to.

```javascript
  let list = {
    a: ['b', 'c', 'e'],
    b: [],
    c: ['b', 'd'],
    d: [],
    e: ['a'],
    f: ['e']
  };
  ```

</details>
<details> 
<summary style="margin-bottom:8px"> Comparison</summary> 

| Adjacency List  | Adjacency List  |
|---|---|
| Can take up less space (in sparse graphs)  | Takes up more space (in sparse graphs)  |
| Faster to iterate over all edges  | Slower To iterate over all edges  |
| Can be slower to lookup specific edge  | Faster to lookup specific edge  |

</details>

---
<br></br>

## Class Representation

<details>
<summary style="margin-bottom:8px">Graph Node Representation</summary>

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

<details>
<summary style="margin-bottom:8px">Adjacency Graph Class Representation </summary>

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
    for (let neighbor of this.adjList[startingVertex]) { // for each neighbor of the starting vertex
      this.depthFirstTraversalRecursive(neighbor, visited, vertices); // recursively call depthFirstTraversalRecursive on the neighbor
    }
    return vertices;
  }
}

  ```
</details>

<details>
<summary style="margin-bottom:8px">Adjacency List Class Representation 2</summary>

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

<details>
<summary style="margin-bottom:8px">Adjacency Matrix Class Representation</summary>

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

---
<br></br>

## Traversing a graph

<details>
<summary style="margin-bottom:8px" style="text-indent: 20px; font-size:18px;margin-bottom:6px">Traversing with a <b>Node</b> implementation</summary>

#### Using a node implementation with recursion:

```js
function depthFirstRecur(node, visited=new Set()) { // A set is used to avoid cycles.
    
    if (visited.has(node.val)) return; // if this node has already been visited, then return early
    
    console.log(node.val); // otherwise it hasn't yet been visited,so print it's val and mark it as visited.
    visited.add(node.val);

    node.neighbors.forEach(neighbor => { // for each neighbor of this node 
        depthFirstRecur(neighbor, visited); // recursively call depthFirstRecur on each neighbor
    });
}

depthFirstRecur(f);
```

## Using a node implementation with iteration:

```js
function depthFirstIter(node) {
    let visited = new Set(); // create a set to keep track of visited nodes and avoid cycles
    let stack = [ node ]; // Since it is DFS we use a stack to keep track of the nodes we've visited.

    while (stack.length) {
        let node = stack.pop();

        if (visited.has(node.val)) continue; // if this node has already been visited, then skip this node
        
        console.log(node.val); // otherwise it hasn't yet been visited,so print it's val and mark it as visited.
        visited.add(node.val);

        stack.push(...node.neighbors); // then add its neighbors to the stack to be explored
    }
}

depthFirstIter(f);
```

</details>

<details>
<summary style="margin-bottom:8px" style="text-indent: 20px; font-size:18px;margin-bottom:6px">Traversing with a <b>Adjacency List</b> implementation</summary>

## Adjacency List
  - One advantage of an adjacency list is that, since we have a reference to the whole graph, we can access nodes that aren't connected to our starting point. This may or may not be desired, so we can implement our functions differently to account for this feature.


## Using an adjacency list with recursion:

```js
function depthFirst(graph) {
    let visited = new Set();

    for (let node in graph) { // This loop allows us to access every node/vertex, even if it wasn't connected to where we started.
        _depthFirstRecur(node, graph, visited); // If we only wanted to reach points from a starting location, we could take in that value as an argument and use it as the node directly with our helper function, no need to loop.
    }
}

function _depthFirstRecur(node, graph, visited) {
    if (visited.has(node)) return; // if this node has already been visited, then return early

    console.log(node);
    visited.add(node);

    graph[node].forEach(neighbor => { // for each neighbor of this node
        _depthFirstRecur(neighbor, graph, visited); // recursively call depthFirstRecur on each neighbor
    });
}

depthFirst(graph);
```

## Using an adjacency list with iteration:

```js
function depthFirstIter(graph, startNode) { // With starting node, not exploring all nodes, only the connected ones
  let stack = [startNode];
  let visited = new Set();

  while (stack.length > 0) { // while there are still nodes to explore
    let node = stack.pop(); // pop the last node off the stack
    if (visited.has(node)) continue; // if this node has already been visited, then skip this node
    console.log(node) // otherwise it hasn't yet been visited, so print it's val and mark it as visited.
    visited.add(node);  // add it to the visited set
    stack.push(...graph[node]); // then add its neighbors to the stack to be explored
  }
}

function depthFirstIter(graph) { // Exploring all nodes, even unconnected ones.
  let visited = new Set();
  
  for (let startNode in graph) {   // Just like with recursion, this loop allows us to access every node/vertex, even if it wasn't connected to where we started. // If we only wanted to reach points from a starting location, we could take in that value as an argument and use it as the startNode directly in our stack/queue (the implementation we have above).
    let stack = [startNode];
    while (stack.length > 0) {
      let node = stack.pop();
      if (visited.has(node)) continue;
      console.log(node)
      visited.add(node);
      stack.push(...graph[node]);
    }
  }
}
```

</details>

---