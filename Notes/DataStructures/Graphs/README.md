# Graph
## Definition 

- A graph is a set of nodes and edges together with a set of unordered pairs of these vertices for an **undirected graph** or a set of ordered 
pairs for a **directed graph**.
  - It may or may not have cycles.
  - like a tree, it may or may not have a root.
  - have any number of edges leading from one node to another.


### Graph Representation

<details>
<summary>Adjacency Matrix</summary>


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
<summary> Adjacency List </summary> 

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
<summary> Comparison</summary> 


| Adjacency List  | Adjacency List  |
|---|---|
| Can take up less space (in sparse graphs)  | Takes up more space (in sparse graphs)  |
| Faster to iterate over all edges  | Slower To iterate over all edges  |
| Can be slower to lookup specific edge  | Faster to lookup specific edge  |

</details>

---

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


<details>
<summary>Graph Class Representation </summary>

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


---

## Graph Traversal

---

<details>
<summary>Graph Traversal Overview</summary>

- We can use recursion or iteration to traverse each node.
- We generally want to keep track of each node that we've visited already so that we don't get trapped in cycles. Easiest way to do this is to keep a Set variable that we update as we traverse to each node.
- The projects from W08D03 and their solutions are a great resource here.
  - Be comfortable with taking either an iterative or a recursive approach to traversing a graph, as well as being able to work with either an adjacency list (like in the friendsOf problem) or a node class (like in the breadthFirstSearch or maxValue problems).
  - Practice taking the implementation that you did in the project and converting it to a different implementation. You probably used recursion for friendsOf, so try using iteration with a stack array, etc.
- THE INTENTION OF ALL OF THESE CODE BLOCKS IS NOT TO MEMORIZE THEM! You should be comfortable with reasoning out why we are implementing them differently.
  - The main difference between a node implementation and an adjacency list is that we are accessing the node's `neighbors` attribute just like we are accessing the values on the list (ie, with an adjacency list saved to a `graph` variable, `graph[node]` gives all of `node`'s neighbors).
  - The main difference between a depth-first and breadth-first is utilizing a stack vs a queue.
  - etc.
- Some possible example implementations:
- Using a node implementation with recursion:

</details




### Graph Traversal w/ GraphNode

<details>
<summary>Graph Traversal w/ GraphNode Code</summary>

### Recursion Depth First Search
---

```js
function depthFirstRecur(node, visited=new Set()) {
  if (visited.has(node.val)) return; // if this node has already been visited, then return early

  console.log(node.val);// otherwise it hasn't yet been visited,
  visited.add(node.val);// so print it's val and mark it as visited.

  node.neighbors.forEach(neighbor => { // for each neighbor of this node
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

        if (visited.has(node.val)) continue;  // if this node has already been visited, then skip this node

        console.log(node.val); // otherwise it hasn't yet been visited,
        visited.add(node.val); // so print it's val and mark it as visited.

        stack.push(...node.neighbors); // then add its neighbors to the stack to be explored
    }
}

depthFirstIter(f);
```

</details>

<details>
<summary>Depth First Search Code with Adjacency List</summary>

# Graph Traversal w/ Adjacency List

- Using an adjacency list with Recursion:
  
```js
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
```

- Using an adjacency list with iteration:

```js
// With starting node, not exploring all nodes, only the connected ones
function depthFirstIter(graph, startNode) {
  let stack = [startNode];
  let visited = new Set();

  while (stack.length > 0) {
    let node = stack.pop();
    if (visited.has(node)) continue;
    console.log(node)
    visited.add(node);
    stack.push(...graph[node]);
  }
}

// Exploring all nodes, even unconnected ones.
function depthFirstIter(graph) {
  let visited = new Set();

  for (let startNode in graph) {
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
