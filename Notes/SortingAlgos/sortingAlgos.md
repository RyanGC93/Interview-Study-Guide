# Todo

- [ ] Add Heap Sort Gif
- [ ] Add Radix Sort Gif

# Sorting Algorithms Overview

<details>
<summary style="text-indent: 20px; font-size:18px"> Cheat Sheet </summary>

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
<details>
<summary style="text-indent: 20px; font-size:18px"> Resources </summary>

- [ App Academy ](https://open.appacademy.io/learn/js-py---sep-2020-online/week-7-sep-2020-online/selection-sort-code-breakdown)
- [ Cheat Sheet ](https://www.interviewcake.com/sorting-algorithm-cheat-sheet)
- [ Practice Problems Repo] (https://github.com/appacademy-starters/algorithms-sorting-starter)

- [ Visualization ](https://visualgo.net/en/sorting?slide=1)
</details>

<details>
<summary style="text-indent: 20px; font-size:18px"> Stability </summary>

| Stable | Unstable |
|:---|---|
| Counting Sort | Quick Sort |
| Merge Sort | Heap Sort |
| Insertion Sort | Selection Sort |

</details>

<details>
<summary style="text-indent: 20px; font-size:18px"> In Depth  </summary>

# Sorting Algorithms
<details>


<summary style="text-decoration: underline;margin-top: 5px; font-size: 18px">Bubble Sort  </summary>
<details>
<summary style="text-indent: 20px;"> Overview </summary>

- The bubble sort algorithm is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
checking each pair of adjacent items and swapping them if they are in the wrong order.
- The pass through the list is repeated until the list is sorted.
- The algorithm, which is a comparison sort, is named for the way smaller or larger elements "bubble" to the top of the list.
- Bubble sort is a comparison sort, meaning that it can sort items of any type for which a “less-than” relation is defined.
</details>
<details>
<summary style="text-indent: 20px;">Code </summary>

```js

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

```

</details>
<details>
<summary style="text-indent: 20px;">Use Case </summary>

- **Bubble sort is an inefficient algorithm and can be pratical for only small data sets**

</details>
<details>
<summary style="text-indent: 20px"> Visualization </summary>

![Visual](https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/naive_sorting_algorithms/bubble_sort/images/BubbleSort.gif)
</details>
</details>

[//]: # (New Section)
<details>
<summary style="text-decoration: underline;margin-top: 5px; font-size: 18px">Selection Sort  </summary>
<details>
<summary style="text-indent: 20px;"> Overview </summary>

- The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning.
- The algorithm maintains two subarrays in a given array.
- The first subarray is always sorted.
- The second subarray is unsorted.
- In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray.
</details>
<details>
<summary style="text-indent: 20px;">Code </summary>

```js

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

```

</details>
<details>
<summary style="text-indent: 20px;">Use Case </summary>

- **Selection sort is an inefficient algorithm and can be practical for only small data sets**

</details>
<details>
<summary style="text-indent: 20px"> Visualization </summary>

![Visual](https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/naive_sorting_algorithms/selection_sort/images/SelectionSort.gif)
</details>
</details>

[//]: # (New Section)
<details>
<summary style="text-decoration: underline;margin-top: 5px; font-size: 18px">Insertion Sort  </summary>
<details>
<summary style="text-indent: 20px;"> Overview </summary>

- The insertion sort algorithm sorts an array by repeatedly inserting an element into a sorted array.
- The algorithm maintains two subarrays in a given array.
- The first subarray is always sorted.
- The second subarray is unsorted.
- In every iteration of insertion sort, an element from the unsorted subarray is picked and inserted into the sorted subarray.
</details>

<details>
<summary style="text-indent: 20px;">Code </summary>

```js

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      let temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
      j--;
    }
  }
  return arr;
}

```

</details>
<details>
<summary style="text-indent: 20px;">Use Case </summary>

- **Insertion sort is an inefficient algorithm and can be practical for only small data sets**

</details>
<details>
<summary style="text-indent: 20px"> Visualization </summary>

![Visual](https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/naive_sorting_algorithms/insertion_sort/images/InsertionSort.gif)
</details>
</details>

[//]: # (New Section)
<details>
<summary style="text-decoration: underline;margin-top: 5px; font-size: 18px">Merge Sort  </summary>
<details>
<summary style="text-indent: 20px;"> Overview </summary>

- The merge sort algorithm is a Divide and Conquer algorithm.
- It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves.
- The merge() function is used for merging two halves.
- The merge(arr1, arr2) function is used to merge two halves.
- The merge(arr1, arr2) function is used to merge two halves.

</details>
<details>
<summary style="text-indent: 20px;">Code </summary>

```js

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

```

</details>
<details>
<summary style="text-indent: 20px;">Use Case </summary>

- **Merge sort is an efficient algorithm and can be practical for large data sets and is a stable sorting algo**
-

</details>
<details>
<summary style="text-indent: 20px"> Visualization </summary>

![Visual](https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/efficient_sorting_algorithms/merge_sort/images/MergeSort.gif)
</details>
</details>

[//]: # (New Section)
<details>
<summary style="text-decoration: underline;margin-top: 5px; font-size: 18px">Quick Sort  </summary>
<details>
<summary style="text-indent: 20px;"> Overview </summary>

- The quick sort algorithm is a Divide and Conquer algorithm.
- It picks an element as pivot and partitions the given array around the picked pivot.
- There are many different versions of quick sort.
- Hoare's version is the original one.
- Lomuto's version is often used.
- The algorithm picks an element as pivot and partitions the given array around the picked pivot.
- The partition process can be done in-place.
- The algorithm can be implemented using recursion.

</details>
<details>
<summary style="text-indent: 20px;">Code </summary>

```js

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[0];
  let left = [];
  let right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

```

</details>
<details>
<summary style="text-indent: 20px;">Use Case </summary>

- **Quick sort is an efficient algorithm and can be practical for large data sets but is not a stable sorting algo**
- a good default choice. It tends to be fast in practice, and with some small tweaks its dreaded O(n^2)O(n2) worst-case time complexity becomes very unlikely. A tried and true favorite.
</details>
<details>
<summary style="text-indent: 20px"> Visualization </summary>

![Visual](https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/efficient_sorting_algorithms/quick_sort/images/QuickSort.gif)
</details>
</details>

[//]: # (New Section)
<details>
<summary style="text-decoration: underline;margin-top: 5px; font-size: 18px">Heap Sort  </summary>
<details>
<summary style="text-indent: 20px;"> Overview </summary>

- The heap sort algorithm is a comparison-based sorting algorithm.
- It works by building a heap data structure from the input data and then extracts elements one by one.
- The heap is a complete binary tree.

</details>
<details>
<summary style="text-indent: 20px;">Code </summary>

```js

function heapSort(arr) {
  let heap = new MaxHeap(arr);
  let sorted = [];
  while (heap.size() > 0) {
    sorted.push(heap.remove());
  }
  return sorted;
}

```

</details>
<details>
<summary style="text-indent: 20px;">Use Case </summary>

- **is a good choice if you can't tolerate a worst-case time complexity of O(n^2)O(n
2
 ) or need low space costs. The Linux kernel uses heapsort instead of quicksort for both of those reasons.**

</details>
<details>
<summary style="text-indent: 20px"> Visualization </summary>

![Visual](https://upload.wikimedia.org/wikipedia/commons/4/4d/Heapsort-example.gif?20110419031008)
</details>
</details>

[//]: # (New Section)
<details>
<summary style="text-decoration: underline;margin-top: 5px; font-size: 18px">Radix Sort  </summary>
<details>
<summary style="text-indent: 20px;"> Overview </summary>

- The radix sort algorithm is a non-comparison sort algorithm.
- It sorts data based on the digits in the number.
- It is a counting sort algorithm.

</details>
<details>
<summary style="text-indent: 20px;">Code </summary>

```js

function radixSort(arr) {
  let max = Math.max(...arr);
  let exp = 1;
  while (max / exp > 0) {
    let buckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arr.length; i++) {
      let bucket = Math.floor((arr[i] / exp) % 10);
      buckets[bucket].push(arr[i]);
    }
    arr = [].concat(...buckets);
    exp *= 10;
  }
  return arr;
}

```

</details>
<details>
<summary style="text-indent: 20px;">Use Case </summary>

- **Radix sort is a stable sorting algorithm and can be practical for large data sets**
- It is a good choice if you can't tolerate a worst-case time complexity of O(n^2)O(n2) or need low space costs. The Linux kernel uses heapsort instead of quicksort for both of those reasons.
</details>
</details>

</details>