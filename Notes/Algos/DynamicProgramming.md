# Dynamic programming (Memoization and Tabulation)

- Most of the time, we can solve a problem with dynamic programming in two ways
  - Memoization **(top-down)**
    - The Top Down approach is to solve the problem by solving the subproblems first and then combine the solutions.
  - Tabulation **(bottom-up)**
    - The bottom-up approach is to solve the problem by combining the solutions of the subproblems.


## Memoization

<details>
<summary>Overview</summary>

### Overview

- Memoization is a technique to solve a problem in a way that can be used to solve the same problem in the future.
- There are two features that compromise memoization:
  - the function is recursive
  - the additional data is stored in a memo object
- Performance
  - Time complexity >> **O(n)**
  - Space complexity >> **O(n)**

</details>


<details>
<summary> Main Features </summary>

### Memoization Main Features

- The function is recursive
- the additional data is stored in a memo(an object)

</details>

<details>
<summary> Memoization Formula </summary>

## The memoization formula

Now that you understand memoization, when should you apply it? Memoization is useful when attacking recursive problems that have many overlapping sub-problems. You'll find it most useful to draw out the visual tree first. If you notice duplicate sub-trees, time to memoize. Here are the hard and fast rules you can use to memoize a slow function:

1. Write the unoptimized, brute force recursion and make sure it works.
2. Add the memo object as an additional argument to the function. The keys will represent unique arguments to the function, and their values will represent the results for those arguments.
3. Add a base case condition to the function that returns the stored value if the function's argument is in the memo.
4. Before you return the result of the recursive case, store it in the memo as a value and make the function's argument it's key.

</details>

## Tabulation


<details>
<summary> Overview </summary>



### Overview

- Tabulation is a technique to solve a problem in a way that can be used to solve the same problem in the future.
- There are two features that compromise tabulation:
  - the function is not recursive and iterative
  - the additional data is stored in a table

- Performance
  - Time complexity >> **O(n)**
  - Space complexity >> **O(n)**
    - Can be refactored to **O(1)**

</details>

<details>
<summary> Main Features </summary>

### Tabulation Main Features

- The function is not recursive and iterative
- the additional data is stored in a table(typically a 2D array)

</details>

<details>
<summary> Tabulation Formula </summary>

### The Tabulation Formula

Here are the general guidelines for implementing the tabulation strategy. This is just a general recipe, so adjust for taste depending on your problem:

1. Create the table array based off of the size of the input, which isn't always straightforward if you have multiple input values
2. Initialize some values in the table that "answer" the trivially small subproblem usually by initializing the first entry (or entries) of the table
3. Iterate through the array and fill in remaining entries, using previous entries in the table to perform the current calculation
4. Your final answer is (usually) the last entry in the table

</details>

## Coding Example: 

<details>
	<summary style="text-indent: 20px;">Fibonacci</summary>



<details>
		<summary style="text-indent: 40px;">Naive Approach</summary>

```js
function fib(n) {
  if (n === 1 || n === 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

fib(6);     // 8

```

</details>

<details>
		<summary style="text-indent: 40px;">Memoization</summary>


```js
function fastFib(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n === 1 || n === 2) return 1;

  memo[n] = fastFib(n - 1, memo) + fastFib(n - 2, memo);
  return memo[n];
}

fastFib(6);     // => 8
fastFib(50);
```

</details>


<details>
		<summary style="text-indent: 40px;">Tabulation</summary>


```js
    function tabulatedFib(n) {
  // create a blank array with n reserved spots
  let table = new Array(n);

  // seed the first two values
  table[0] = 0;
  table[1] = 1;

  // complete the table by moving from left to right,
  // following the fibonacci pattern
  for (let i = 2; i <= n; i += 1) {
    table[i] = table[i - 1] + table[i - 2];
  }

  return table[n];
}

console.log(tabulatedFib(7));      // => 13
```

Refactored to **O(1)**

```js
function fib(n) {
  let mostRecentCalcs = [0, 1];

  if (n === 0) return mostRecentCalcs[0];

  for (let i = 2; i <= n; i++) {
    const [ secondLast, last ] = mostRecentCalcs;
    mostRecentCalcs = [ last, secondLast + last ];
  }

  return mostRecentCalcs[1];
}
```

</details>
</details>
