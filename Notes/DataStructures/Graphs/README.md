# Graph
## Overview

<details>
<summary style="margin-bottom:8px">Definition</summary>

- A graph is a set of nodes and edges together with a set of unordered pairs of these vertices for an **undirected graph** or a set of ordered 
pairs for a **directed graph**.
  - It may or may not have cycles.
  - like a tree, it may or may not have a root.
  - have any number of edges leading from one node to another.

</details>

<details>
<summary style="margin-bottom:8px">Types of Graphs</summary>

**Undirected graphs**
> The edges between any two vertices in an “undirected graph” do not have a direction, indicating a two-way relationship.

**Directed graphs**
>The edges between any two vertices in a “directed graph” graph are directional.

**Weighted graphs**
> Each edge in a “weighted graph” has an associated weight. The weight can be of any metric, such as time, distance, size, etc. The most commonly seen “weighted map” in our daily life might be a city map.

</details>

---

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
<summary style="margin-bottom:8px">Graph Node Class Representation</summary>

```js
class GraphNode {
  constructor(value) {
    this.value = value;
    this.edges = [];
  }
}
```

</details>

<details>
<summary style="margin-bottom:8px">Adjacency List Class Representation </summary>

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
<summary style="margin-bottom:8px">Overview</summary>

# Graph Traversals Can Be either Breadth First Search or Depth First Search

### When to use which traversal?

- [Graph Traversal](https://visualgo.net/en/dfsbfs)

- Breadth First Search (Uses a Queue)
  - Used to find shortest path
  - Used to find connected components
  - Used when backtracking is not needed
- Depth First Search (Uses a Stack)
  - [Code Example](https://leetcode.com/explore/featured/card/graph/619/depth-first-search-in-graph/3893/)
  - Time Complexity: O(V + E)
  - Space Complexity: O(V)
  - Used to find connected components
  - Used to find strongly connected components
  - Used to find all possible paths
  - Used to search a graph for a specific value
  - Used when backtracking is needed



</details>

<details>
<summary style="margin-bottom:8px" style="text-indent: 20px; font-size:18px;margin-bottom:6px">Traversing with a <b>Node</b> implementation</summary>

#### Using a node implementation with recursion:

##### Breadth First Search

```js
function breadthFirstSearchIter(graph, startingVertex) {
  const visited = new Set();
  const queue = [startingVertex];
  while (queue.length) {
    let currentVertex = queue.shift();
    if (visited.has(currentVertex)) continue;
    visited.add(currentVertex);
    queue.push(...graph.adjList[currentVertex]);
  }
  return visited;
}
```

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
```

</details>

---

<br></br>

## Problem Solving Techniques

<details>
<summary style="margin-bottom:8px">Backtracking</summary>


**Overview**


> [backtracking](https://en.wikipedia.org/wiki/Backtracking) is a general algorithm that incrementally builds candidates to the solutions, and abandons a candidate (_"backtrack"_) as soon as it determines that the candidate cannot possibly lead to a valid solution.

- Backtracking uses a stack to keep track of the nodes we've visited. (DFS)
- [Template](https://gist.github.com/RuolinZheng08/cdd880ee748e27ed28e0be3916f56fa6)

Typical Backtracking Structure:

```js
function backTrackAlgorithm(parameters) {
  function backtrack(startingState) {
    if (final condition is met) {
      // add result;
    } else {
      loop from the starting state
        // try a candidate;
        backtrack(adjustedStartingState);
        remove the candidate;
    }
  }
  
  // handle edge cases
  // initialize the result structure;
  backtrack(startingState);
  return result;
}
```

Links
- [The JS Technical Interview Guide to Backtracking](https://betterprogramming.pub/the-technical-interview-guide-to-backtracking-e1a03ca4abad)

</details>
</details>
<details>
<summary style="margin-bottom:8px">Bit Manipulation</summary>

**Overview**

Bit manipulation is a technique that is used to solve problems that are related to binary numbers. Bitwise operators can be used to create, manipulate, and compare binary numbers helping to save memory compared to collections of booleans.

Links

- [Bit Manipulation and Bitwise Operators in JS](https://algodaily.com/lessons/bitwise-operators-and-bit-manipulation-for-interviews)
- [Bit Manipulation](https://www.geeksforgeeks.org/bit-manipulation-set-1-introduction-and-basic-operations/)
- [What is a bitmask and a mask](https://stackoverflow.com/questions/31575691/what-is-a-bitmask-and-a-mask)

</details>

<details>
<summary style="margin-bottom:8px">Disjointed Set Union/ Union Find</summary>

**Overview**
- Check if two vertices are in the same component

The two important functions of a "disjointed set union" are:
- `find(x)`: returns the root of the component containing x, or x itself if x is the given vertex of a component.
- `union(x, y)`: merges the components containing x and y into one component. which means the union function will modify the root node of vertex 4 or vertex 5 to the same root node.

### There are two ways to implement a “disjoint set”.

* * *

*   Implementation with Quick Find: in this case, the time complexity of the `find` function will be O(1)O(1)O(1). However, the `union` function will take more time with the time complexity of O(N)O(N)O(N).
*   Implementation with Quick Union: compared with the Quick Find implementation, the time complexity of the `union` function is better. Meanwhile, the `find` function will take more time in this case.

### Union Find Implementation

```js
// Javascript program for union-find
// algorithm to detect cycle
// in a graph

const unionFind = {
  // initialize the disjoint set
  init: function(n) {
    this.parent = new Array(n);
    this.rank = new Array(n);
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
      this.rank[i] = 0;
    }
  }
  // find the root of the component
  // that the vertex belongs to
  find: function(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }
  // merge the components of two vertices
  // with the same rank
  union: function(x, y) {
    let rootX = this.find(x);
    let rootY = this.find(y);
    if (rootX !== rootY) {
      if (this.rank[rootX] > this.rank[rootY]) {
        this.parent[rootY] = rootX;
      } else {
        this.parent[rootX] = rootY;
      }
    }
  }
}
```
 

 ```js
// V-> no. of vertices &
// E->no.of edges 
var V, E;   
 
// Collection of all edges
var edge;
 
class Edge
{
    constructor()
    {
        this.src = 0;
        this.dest = 0;
    }
};
 
// Creates a graph with V
// vertices and E edges
function initialize(v,e)
{
    V = v;
    E = e;
    edge = Array.from(Array(E), () => Array());
}
 
// A utility function to find
// the subset of an element i
function find(parent, i)
{
    if (parent[i] == -1)
        return i;
         
    return find(parent,
                parent[i]);
}
 
// A utility function to do
// union of two subsets
function Union(parent, x, y)
{
    parent[x] = y;
}
 
// The main function to check
// whether a given graph
// contains cycle or not
function isCycle()
{
     
    // Allocate memory for
    // creating V subsets
    var parent = Array(V).fill(0);
     
    // Initialize all subsets as
    // single element sets
    for(var i = 0; i < V; ++i)
        parent[i] =- 1;
     
    // Iterate through all edges of graph,
    // find subset of both vertices of every
    // edge, if both subsets are same, then
    // there is cycle in graph.
    for (var i = 0; i < E; ++i)
    {
        var x = find(parent,
                     edge[i].src);
        var y = find(parent,
                     edge[i].dest);
         
        if (x == y)
            return 1;
         
        Union(parent, x, y);
    }
    return 0;
}
```

### Time Complexity

* * *

|  | Union-find Constructor | Find | Union | Connected |
| --- | --- | --- | --- | --- |
| **Time Complexity** | O(N)O(N)O(N) | O(1)O(1)O(1) | O(N)O(N)O(N) | O(1)O(1)O(1) |

- Trade Off
  - `O(N)O(N)O(N)`: The time complexity of the `find` function is O(1)O(1)O(1). However, the `union` function will take more time with the time complexity of O(N)O(N)O(N).
  - `O(1)O(1)O(1)`: The time complexity of the `union` function is better. Meanwhile, the `find` function will take more time in this case.
  - `O(N)O(N)O(N)`: The time complexity of the `isCycle` function is O(N)O(N)O(N).
  - `O(1)O(1)O(1)`: The time complexity of the `isCycle` function is O(1)O(1)O(1).

We have implemented two kinds of “disjoint sets” so far, and they both have a concerning inefficiency. Specifically, the quick find implementation will always spend O(n) time on the union operation and in the quick union implementation, as shown in Figure 6, it is possible for all the vertices to form a line after connecting them using union, which results in the worst-case scenario for the find function. Is there any way to optimize these implementations?

### Quick Union Implementation


**Links**
- [Disjointed Set Union](https://www.geeksforgeeks.org/disjoint-set-union/)

**Example Problems**
- [Leet Code #323](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/)

</details>


<details>
<summary style="margin-bottom:8px">Detect A Cycle In an undirected Graph</summary>

**Strategies**

1) Use a **_visited_** set to keep track of nodes that have been visited.
2) The first strategy is to simply delete the opposite direction edges from the adjacency list. In other words, when we follow an edge A → B, we should lookup Bs adjacency list and delete A from it, effectively removing the opposite edge of B → A.
3) The second strategy is, instead of using a seen set, to use a seen map that also keeps track of the "parent" node that we got to a node from. We'll call this map parent. Then, when we iterate through the neighbours of a node, we ignore the "parent" node as otherwise it'll be detected as a trivial cycle (and we know that the parent node has already been visited by this point anyway). The starting node (0 in this implementation) has no "parent", so put it as -1.

At first, it's a little more difficult to understand why this strategy even works. A good way to think about it is to remember that like the first approach, we just want to avoid going along edges we've already been on (in the opposite direction). The parent links prevent that, as each node is only entered for exploration once. So, imagine you're walking through a maze, with the condition that you're not allowed to go back along any path you've already been on. If you still somehow end up somewhere you were previously, there must have been a cycle!

</details>

<details>
<summary style="margin-bottom:8px">Topological Sort</summary>

## Real-World Example
- School Prerequisite Checker
- Event Scheduler
- Program Dependency Checker -- Recipes
- Single Source Shortest Path can be solved efficiently using a topological sort on a DAG **O(V+E)**.

## Overview

- A topological sort is a linear ordering **(O)N** of vertices such that all the vertices in the graph are visited before any of the vertices are visited again.
- Note Topoligal Sorting is Not Guaranteed to be Unique.
- Directed Acyclic Graph (DAG) - Not every graph can have a topological sort. A graph with a cycle will not have a topological sort.
  - One Way to Detect A Cycle In A Graph is Tarjan's Algorithm.


  ## Tarjan's Algorithm High Level

  1. pick an unvisited node
  2. Begin a DFS from that node exploring only unvisited nodes.
  3. On the recursive callback of the dfs, add the current node to the topological ordering in reverse order.

## Topsort pseudocode
  
  ```
# Assumption: graph is stored as adjacency list
function topsort(graph):
N = graph.numberOfNodes()
V = [false,m,false] # Length N
ordering = [0,m,0] # Length N
i = N - 1 # Index for ordering array
for(at = 0; at < N; at++):
if Vlat] == false:
visitedNodes = []
dfs(at, V, visitedNodes, graph)
for nodeId in visitedNodes:
orderingli] = nodeId
i = i — 1
return ordering
```

</details>