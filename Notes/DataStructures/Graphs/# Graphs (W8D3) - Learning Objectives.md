

2. Traverse a graph.



```js
// If you are unfamiliar, a Set is a data structure that does not allow for repeated values
// It makes sense to use here because it has constant lookup time with its `has` method
// and our visited nodes should never have repeats.
// We could have accomplished the same thing with a different data structure
// (object, array, etc.), but a Set makes sense with what we are tracking.
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

- Using a node implementation with iteration:

```js
// This is easy to swap to a breadth-first approach by using a queue instead of a stack!
// Instead of popping from the top, we can shift from the front
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

- Using an adjacency list with recursion:
  - One advantage of an adjacency list is that, since we have a reference to the whole graph, we can access nodes that aren't connected to our starting point. This may or may not be desired, so we can implement our functions differently to account for this feature.

```js
function depthFirst(graph) {
    let visited = new Set();

    // This loop allows us to access every node/vertex, even if it wasn't connected
    // to where we started.
    // If we only wanted to reach points from a starting location, we could take in
    // that value as an argument and use it as the node directly with our helper
    // function, no need to loop.
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

depthFirst(graph);
```

- Using an adjacency list with iteration:

```js
// With starting node, not exploring all nodes, only the connected ones
function depthFirstIter(graph, startNode) {
  // Just like our node implementation, if we want to operate breadth-first, we
  // can utilize a queue instead of a stack, shifting instead of popping
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

  // Just like with recursion, this loop allows us to access every node/vertex,
  // even if it wasn't connected to where we started.
  // If we only wanted to reach points from a starting location, we could take in
  // that value as an argument and use it as the startNode directly in our
  // stack/queue (the implementation we have above).
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

- With all of thes implementations, we should be able to make conclusions from these traversals as well instead of just console logging.
  - Is it possible to get from node A to node B?
    - Here we're really implementing a search, like the breadthFirstSearch problem.
  - What is the maximum/minimum value we can encounter if we start at node X?
    - Instead of returning a boolean, we want to compare values of nodes and return the appropriate value
      - If we do this recursively we can compare this node and to each of its neighbors values and return the maximum up the call stack.
      - If we do this iteratively, we can keep a currentMax variable as we traverse and update it if we find a new max value.
  - etc.