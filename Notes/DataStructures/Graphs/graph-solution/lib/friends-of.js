/**
 * In this file, you will implement the friendsOf function that will calculate
 * the group of friends that a person has a certain distance from them.
 *
 * @param {Object} adjacencyList - The adjacency list that describes the graph,
 * never null or undefined
 * @param {string} name - The name of the person from where you will start your
 * search, never null or undefined
 * @param {number} distance - The distance away that you will traverse to find
 * the person's friends-of list, always a value greater than or equal to 1
 *
 * You will also need to implement a friendsOfRecursion function that will
 * recurse through your friends graph. friendsOf will call this.
 *
 * @param {string} name - the name of the person from where you will start
 * your search, never null or undefined.
 * @param {Object} adjacencyList - The adjacency list that describes the graph,
 * never null or undefined
 * @param {Set} visited - A list of all the graph nodes we have visited
 * @param {number} maxDistance - the maximum distance you want to recurse into
 * the graph, for example 1 should find immediate friends and 3 should find
 * immediate friends, friends of immediate friends, and friends of those friends
 * @param {number} currentDistance - the current distance we are at during our
 * recursion
 *
 * Hint: You can convert a Set into an Array using the `Array.from()` method.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
 *
 * Hint: refer to the documentation of Set on MDN here:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 */

 function friendsOfRecursion(target, adjacencyList, visited, maxDistance, currentDistance) {
  if (currentDistance >= maxDistance) return; // if we have reached the maximum distance, return

  visited.add(target); // add the target to the visited set

  for (let nextFriend of adjacencyList[target]) { // for each friend of the target
    friendsOfRecursion(nextFriend, adjacencyList, visited, maxDistance, currentDistance + 1); // recurse through the graph
  }
}

function friendsOf(adjacencyList, target, distance) { 
  if (target in adjacencyList) { // if the target is in the graph object
    let visited = new Set(); // create a new set to store the visited nodes(prevents infinite recursion)

    for (let name of adjacencyList[target]) { // for each friend of the target
      friendsOfRecursion(name, adjacencyList, visited, distance, 0); // recurse through the graph
    }

    visited.delete(target); // remove the target from the visited set
    return Array.from(visited); // convert the visited set into an array
  }
}

/******************************************************************************
* Do not change code beneath this line.
*/
try {
exports.friendsOf = friendsOf;
} catch (e) {
exports.friendsOf = () => { throw new Error('Cannot export friendsOf.') };
}
