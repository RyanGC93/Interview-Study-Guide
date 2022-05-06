# Big O 

## Complexity Classes

<details>
<summary>Overview</summary>

|Big-O Complexity | Class Name | Description |
|------------------|------------| ----------- |
| O(1) | constant | |
| O(log n) | logarithmic | "Halving" |
| O(n) | linear | "access each item once" |
| O(n log n) | loglinear | "access each item once(linear), then halve the list (logarithmic)" |
| O(n^2) | quadratic | "usually an indication of a bad algorithm (nested loops)" |
| O(2^n) | exponential |
| O(n!) | factorial |

</details>

<details>
<summary>Diagram</summary>

# Diagram

![](https://learntocodetogether.com/wp-content/uploads/2019/08/download-1-1-1024x677.png)
</details>

<details>
<summary>Code Examples</summary>

# Constant 
```js
// O(1)
function constant1(n) {
  return n * 2 + 1;
}

// O(1)
function constant2(n) {
  for (let i = 1; i <= 100; i++) {
    console.log(i);
  }
}

```

# Logarithmic

```js
// O(log(n))
function logarithmic1(n) {
  if (n <= 1) return;
  logarithmic1(n / 2);
}

// O(log(n))
function logarithmic2(n) {
  let i = n;
  while (i > 1) {
    i /= 2;
  }
}

```

# Linear

```js
// O(n)
function linear1(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

// O(n), where n is the length of the array
function linear2(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(i);
  }
}

// O(n)
function linear3(n) {
  if (n === 1) return;
  linear3(n - 1);
}
```
# Loglinear

```js
// O(n * log(n))
function loglinear(n) {
  if (n <= 1) return;

  for (let i = 1; i <= n; i++) {
    console.log(i);
  }

  loglinear(n / 2);
  loglinear(n / 2);
}
```

# Polynomial

```js
// O(n^2)
function quadratic(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {}
  }
}

// O(n^3)
function cubic(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      for (let k = 1; k <= n; k++) {}
    }
  }
}
```

# Exponential

```js
// O(2^n)
function exponential2n(n) {
  if (n === 1) return;
  exponential_2n(n - 1);
  exponential_2n(n - 1);
}

// O(3^n)
function exponential3n(n) {
  if (n === 0) return;
  exponential_3n(n - 1);
  exponential_3n(n - 1);
  exponential_3n(n - 1);
}
```

# Factorial

```js
// O(n!)
function factorial(n) {
  if (n === 1) return;

  for (let i = 1; i <= n; i++) {
    factorial(n - 1);
  }
}
```
</details>

## Time Complexities

<details>
<summary>Common  Data Structures Operations (@worst)</summary>

### Common  Data Structures Operations (@worst)

| |Access|Search |Assertion|Deletion |Space|
|:----|:----|:----|:----|:----|:----|
|Array|O(1)|O(n)|O(n)|O(n)|O(n)|
|Stack|O(n)|O(n)|O(1)|O(1)|O(n)|
|Queue|O(n)|O(n)|O(1)|O(1)|O(n)|
|Singly-Linked List|O(n)|O(n)|O(1)|O(1)|O(n)|
|Doubly-Linked List|O(n)|O(n)|O(1)|O(1)|O(n)|
|Hash Table|N/A|O(n)|O(n)|O(n)|O(n)|
|Binary Search Tree|O(n)|O(n)|O(n)|O(n)|O(n)|
|Hash|N/A|O(n)|O(n)|O(n)|O(n)|

</details>

<details>
<summary style=""> Sorting Algorithms</summary>

| Sorting Algo  |  Worst Time Complexity | Space Complexity   |
|:---|---|---|
| [Bubble Sort](./algorithms-sorting-solved/problems/01-bubble-sort.js) | O(n^2) | O(1) |
| [Selection Sort](./algorithms-sorting-solved/problems/02-selection-sort.js)   | O(n^2)  | O(1)  |
| [Insertion Sort](./algorithms-sorting-solved/problems/03-insertion-sort.js)   | O(n^2)  | O(n)   |
| [Merge Sort](./algorithms-sorting-solved/problems/04-merge-sort.js)  | O(n log n)   |  O (log n) |
| [Quick Sort](./algorithms-sorting-solved/problems/05-quick-sort.js)  | O(n^2)   | O (log n)  |
| Heap Sort  | O(n log n)  |  O(1) |
| Radix Sort  | O(n)  | O(n)  |
</details>