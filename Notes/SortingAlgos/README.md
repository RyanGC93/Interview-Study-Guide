# Sorting Algorithms Overview

<details>
<summary style="text-indent: 20px; font-size:18px"> Big O Cheat Sheet </summary>

| Sorting Algo                                                                | Worst Time Complexity | Space Complexity |
| :-------------------------------------------------------------------------- | --------------------- | ---------------- |
| [Bubble Sort](./algorithms-sorting-solved/problems/01-bubble-sort.js)       | O(n^2)                | O(1)             |
| [Selection Sort](./algorithms-sorting-solved/problems/02-selection-sort.js) | O(n^2)                | O(1)             |
| [Insertion Sort](./algorithms-sorting-solved/problems/03-insertion-sort.js) | O(n^2)                | O(n)             |
| [Merge Sort](./algorithms-sorting-solved/problems/04-merge-sort.js)         | O(n log n)            | O (n)        |
| [Quick Sort](./algorithms-sorting-solved/problems/05-quick-sort.js)         | O(n^2)                | O (log n)        |
| Heap Sort                                                                   | O(n log n)            | O(1)             |
| Radix Sort                                                                  | O(n)                  | O(n)             |
</details>

<details>
<summary style="text-indent: 20px; font-size:18px"> Resources </summary>

- [App Academy](https://open.appacademy.io/learn/js-py---sep-2020-online/week-7-sep-2020-online/selection-sort-code-breakdown)
- [Cheat Sheet](https://www.interviewcake.com/sorting-algorithm-cheat-sheet)
- [Practice Problems Repo](https://github.com/appacademy-starters/algorithms-sorting-starter)

- [ Visualization ](https://visualgo.net/en/sorting?slide=1)
</details>

<details>
<summary style="text-indent: 20px; font-size:18px"> Stability </summary>

| Stable         | Unstable       |
| :------------- | -------------- |
| Counting Sort  | Quick Sort     |
| Merge Sort     | Heap Sort      |
| Insertion Sort | Selection Sort |

- *Stability matters when we have key-value pairs where duplicate keys are possible*

</details>

<details>
<summary style="text-indent: 20px; font-size:18px">All Sorting Algos In Depth  </summary>

## Sorting Algorithms

<details>


<summary style="text-decoration: underline;margin-top: 5px; font-size: 22px;margin-bottom: 10px">Bubble Sort  </summary>

<details >
<summary style="text-indent: 20px;"> Overview </summary>

> - The bubble sort algorithm is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
checking each pair of adjacent items and swapping them if they are in the wrong order.
> - The pass through the list is repeated until the list is sorted.
> - The algorithm, which is a comparison sort, is named for the way smaller or larger elements "bubble" to the top of the list.
> - Bubble sort is a comparison sort, meaning that it can sort items of any type for which a “less-than” relation is defined.

</details>
<details>
<summary style="text-indent: 20px;">Code </summary>

```js

function swap(array, idx1, idx2) {
	//swap two elements in an array
	let temp = array[idx1];
	array[idx1] = array[idx2];
	array[idx2] = temp;
}

function bubbleSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		// outer loop
		for (let j = 0; j < arr.length - i - 1; j++) {
			// inner loop
			if (arr[j] > arr[j + 1]) {
				// if the current element is greater than the next element
				if (array[j] > array[j + 1]) swap(array, j, j + 1); // swap the two elements
			}
		}
	}
	return arr; // return the sorted array
}

//! Time Complexity = O(n^2)
//! Space Complexity = O(1)

```

</details>
<details>
<summary style="text-indent: 20px;">Use Case </summary>

> - **Bubble sort is an inefficient algorithm and can be pratical for only small data sets**

</details>
<details>
<summary style="text-indent: 20px"> Visualization </summary>

![Visual](https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/naive_sorting_algorithms/bubble_sort/images/BubbleSort.gif)
</details>

---


</details>


[//]: # (New Section)
<details>
<summary style="text-decoration: underline;margin-top: 5px; font-size: 22px;margin-bottom: 10px">Selection Sort  </summary>
<details>
<summary style="text-indent: 20px;"> Overview </summary>

> - The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning.
> - The algorithm maintains two subarrays in a given array.
> - The first subarray is always sorted.
> - The second subarray is unsorted.
> - In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray.

</details>
<details>
<summary style="text-indent: 20px;">Code </summary>

```js

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) { // loop through the array
      let min = i; // set the minimum value to the current index
      for (let j = i + 1; j < arr.length; j++) { // loop through the array again
        if (arr[j] < arr[min]) { // if the value at the current index is less than the minimum value
          min = j; // set the minimum value to the current index
        }
      }
      if (min !== i) { // if the minimum value is not the current index  // This can also be implemented by as a swap function
        let temp = arr[i]; // set the temp value to the current index
        arr[i] = arr[min]; // set the current index to the minimum value
        arr[min] = temp; // set the minimum value to the temp value
    }
  }
  return arr; // return the sorted array
}
```

</details>
<details>
<summary style="text-indent: 20px;">Use Case </summary>

> - **Selection sort is an inefficient algorithm and can be practical for only small data sets**

</details>
<details>
<summary style="text-indent: 20px"> Visualization </summary>

![Visual](https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/naive_sorting_algorithms/selection_sort/images/SelectionSort.gif)
</details>

---

</details>


[//]: # (New Section)
<details>
<summary style="text-decoration: underline;margin-top: 5px; font-size: 22px;margin-bottom: 10px">Insertion Sort  </summary>
<details>
<summary style="text-indent: 20px;"> Overview </summary>

> - The insertion sort algorithm sorts an array by repeatedly inserting an element into a sorted array.
> - The algorithm maintains two subarrays in a given array.
> - The first subarray is always sorted.
> - The second subarray is unsorted.
> - In every iteration of insertion sort, an element from the unsorted subarray is picked and inserted into the sorted subarray.

</details>

<details>
<summary style="text-indent: 20px;">Code </summary>

```js

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) { // loop through the array
      let j = i; // set j to i
      while (j > 0 && arr[j - 1] > arr[j]) { // while j is greater than 0 and the value at j is greater than the value at j - 1
        let temp = arr[j]; // set temp to the value at j
        arr[j] = arr[j - 1]; // set the value at j to the value at j - 1
        arr[j - 1] = temp; // set the value at j - 1 to temp
        j--; // decrement j
      }
    }
    return arr; // return the array
  }
```

</details>
<details>
<summary style="text-indent: 20px;">Use Case </summary>

> - **Insertion sort is an inefficient algorithm and can be practical for only small data sets**

</details>
<details>
<summary style="text-indent: 20px"> Visualization </summary>

![Visual](https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/naive_sorting_algorithms/insertion_sort/images/InsertionSort.gif)
</details>

---

</details>

[//]: # (New Section)
<details>
<summary style="text-decoration: underline;margin-top: 5px; font-size: 22px;margin-bottom: 10px">Merge Sort  </summary>
<details>
<summary style="text-indent: 20px;"> Overview </summary>

> - The merge sort algorithm is a Divide and Conquer algorithm.
> - It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves.
> - The merge(arr1,arr2) function is used for merging two halves recursively.
**Interesting enough merge sort space complexity is O(1) for Linked List but O(N) for arrays. This is due how memory is distributed in Linked List (random addresses). When implementing make sure to not have memory leaks**

</details>
<details>
<summary style="text-indent: 20px;">Code </summary>

```js

function merge(left, right) {
  let result = []; // set result to an empty array
  while (left.length && right.length) { // while left and right are not empty
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }
  return result;
}

function mergeSort(arr) {
  if (arr.length < 2) { // if the array is less than 2, return the array
    return arr;
  }
  let mid = Math.floor(arr.length / 2); // set mid to the middle of the array
  let left = arr.slice(0, mid); // set left to the first half of the array
  let right = arr.slice(mid); // set right to the second half of the array
  return merge(mergeSort(left), mergeSort(right));
}
  
```

</details>
<details>
<summary style="text-indent: 20px;">Use Case </summary>

> - **Merge sort is an efficient algorithm and can be practical for large data sets and is a stable sorting algo**

</details>
<details>
<summary style="text-indent: 20px"> Visualization </summary>

![Visual](https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/efficient_sorting_algorithms/merge_sort/images/MergeSort.gif)
</details>

---

</details>

[//]: # (New Section)
<details>
<summary style="text-decoration: underline;margin-top: 5px; font-size: 22px;margin-bottom: 10px">Quick Sort  </summary>
<details>
<summary style="text-indent: 20px;"> Overview </summary>

> - It picks an element as pivot and partitions the given array around the picked pivot.
> - The partition process can be done in-place and can be implemented using recursion.
> - Hoare's version is the original one and Lomuto's version is often used.

</details>
<details>
<summary style="text-indent: 20px;">Code </summary>

```js

function quickSort(arr) { // O(n log n)
    if (arr.length < 2) { // if the array is empty or has one element, it is already sorted
      return arr;
    }
    let pivot = arr[0]; // set the pivot to the first element
    let left = []; // create an array to store the elements smaller than the pivot
    let right = []; // create an array to store the elements larger than the pivot
    for (let i = 1; i < arr.length; i++) { // loop through the array
      if (arr[i] < pivot) { // if the current element is smaller than the pivot
        left.push(arr[i]); // add it to the left array
      } else {
        right.push(arr[i]); // add it to the right array
      }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]; // return the sorted array
  }
  
```

</details>
<details>
<summary style="text-indent: 20px;">Use Case </summary>

> - **Quick sort is an efficient algorithm and can be practical for large data sets but is not a stable sorting algo**
> - **a good default choice. It tends to be fast in practice, and with some small tweaks its dreaded O(n^2)O(n2) worst-case time complexity becomes very unlikely. A tried and true favorite.**

</details>
<details>
<summary style="text-indent: 20px"> Visualization </summary>

![Visual](https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/efficient_sorting_algorithms/quick_sort/images/QuickSort.gif)
</details>

---

</details>

[//]: # (New Section)
<details>
<summary style="text-decoration: underline;margin-top: 5px; font-size: 22px;margin-bottom: 10px">Heap Sort  </summary>
<details>
<summary style="text-indent: 20px;"> Overview </summary>

> - The heap sort algorithm is a comparison-based sorting algorithm.
> - It works by building a heap data structure from the input data and then extracts elements one by one.
> - The heap is a complete binary tree.

</details>
<details>
<summary style="text-indent: 20px;">Code </summary>

```js

function heapSort(arr) {  // O(n log n)
    let heap = new MaxHeap(arr); // create a max heap
    let sorted = []; // create an empty array to store the sorted array
    while (heap.size() > 0) { // while the heap is not empty
      sorted.push(heap.remove()); // add the max value to the sorted array
    }
    return sorted; // return the sorted array
  }

```

</details>
<details>
<summary style="text-indent: 20px;">Use Case </summary>

> - **is a good choice if you can't tolerate a worst-case time complexity of O(n^2)O(n2) or need low space costs. The Linux kernel uses heapsort instead of quicksort for both of those reasons.**

</details>
<details>
<summary style="text-indent: 20px"> Visualization </summary>

![Visual](https://upload.wikimedia.org/wikipedia/commons/4/4d/Heapsort-example.gif?20110419031008)
</details>

---

</details>

[//]: # (New Section)
<details>
<summary style="text-decoration: underline;margin-top: 5px; font-size: 22px;margin-bottom: 10px">Radix Sort  </summary>
<details>
<summary style="text-indent: 20px;"> Overview </summary>

> - The radix sort algorithm is a non-comparison sort algorithm that sorts data based on the digits in the number.

</details>
<details>
<summary style="text-indent: 20px;">Code </summary>

```js

function radixSort(arr) { // O(n)
    let max = Math.max(...arr); // get max in the array
    let exp = 1; // initialize exponent
    while (max / exp > 0) { // while max is greater than 0
      let buckets = Array.from({ length: 10 }, () => []); // create buckets
      for (let i = 0; i < arr.length; i++) { // for each element in the array
        let bucket = Math.floor((arr[i] / exp) % 10); // get the bucket number
        buckets[bucket].push(arr[i]); // push the element into the bucket
      }
      arr = [].concat(...buckets); // concatenate the buckets
      exp *= 10; // increase the exponent
    }
    return arr;
  }

```

</details>
<details>
<summary style="text-indent: 20px;">Use Case </summary>

> - **Radix sort is a stable sorting algorithm and can be practical for large data sets**
> - **It is a good choice if you can't tolerate a worst-case time complexity of O(n^2)O(n2) or need low space costs. The Linux kernel uses heapsort instead of quicksort for both of those reasons.**

</details>
</details>
</details>

---
# Searching Algorithms

<details>
<summary style="text-decoration: underline;margin-top: 5px; font-size: 22px;margin-bottom: 10px">Linear Search  </summary>

> A simple approach is to do a linear search, i.e  
> Start from the leftmost element of arr[] and one by one > compare x with each element of arr[]
> If x matches with an element, return the index.
> If x doesn’t match with any of elements, return -1.

> Time Complexity: O(N)
> Space Complexity: O(1)

</details>


<details>
<summary style="text-decoration: underline;margin-top: 5px; font-size: 22px;margin-bottom: 10px"> Binary Search </summary>

> A searching Algo used in a sorted array by repeatedly dividing the search interval in half

> Binary Search requires that the array is already sorted

> **Binary Search Algorithm Steps:** 
> *   Begin with an interval covering the whole array.
> *   If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half.
> *   Otherwise, narrow it to the upper half.
> *   Repeatedly check until the value is found or the interval is empty.

> - Time Complexity: O(log n), possible implementation of O(1)
> - Space complexity: O(n)


**CODE**
```js 
// Returns simply true/false for presence
function binarySearch(array, target) {
if (array.length === 0) {
    return false;
}

let midIdx = Math.floor(array.length / 2);
let leftHalf = array.slice(0, midIdx);
let rightHalf = array.slice(midIdx + 1);

if (target < array[midIdx]) {
    return binarySearch(leftHalf, target);
} else if (target > array[midIdx]) {
    return binarySearch(rightHalf, target);
} else {
    return true;
}
}

// Returns the index or -1 if not found
function binarySearchIndex(array, target) {
  if (!array.length) return -1;

  const midIdx = Math.floor(array.length / 2);
  const midEl = array[midIdx];

  if (target < midEl) {
    return binarySearchIndex(array.slice(0, midIdx), target);
  } else if (target > midEl) {
    // Since our recursive call will have new indices for the subarray, we have to adjust the return value to align it with the indices of our original array.
    // If the recursive call returns -1, it was not found and we can immediately return -1
    // If it was found in the subarray, we have to add on the number of elements that were removed from the beginning of our larger original array.
    // For example, if we try to find 15 in an array of [5, 10, 15]:
      // - Our first call to binarySearchIndex will check our middle element of 10
      // - Since our target is greater, we will recursively call our search on elements to the right, being the subarray [15]
      // - On our recursive call we found our target! It's index in this call is 0.
      // - When we return 0 to where binarySearchIndex was called, we need to adjust it to line up with this larger array (the 0th element of this larger array is 5, but our target was at the 0th index of the subarray)
      // - Since we sliced off 2 elements from the beginning before making our recursive call, we add 2 to the return value to adjust it back to line up with our original array.
    const idxShift = binarySearchIndex(array.slice(midIdx + 1), target);
    
    return idxShift === -1 ? -1 : idxShift + midIdx + 1;
  } else {
    return midIdx;
  }
}

```
