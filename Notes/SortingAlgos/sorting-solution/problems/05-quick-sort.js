function quickSort(arr) {
	// O(n log n)
	if (arr.length < 2) {
		// if the array is empty or has one element, it is already sorted
		return arr;
	}
	let pivot = arr[0]; // set the pivot to the first element
	let left = []; // create an array to store the elements smaller than the pivot
	let right = []; // create an array to store the elements larger than the pivot
	for (let i = 1; i < arr.length; i++) {
		// loop through the array
		if (arr[i] < pivot) {
			// if the current element is smaller than the pivot
			left.push(arr[i]); // add it to the left array
		} else {
			right.push(arr[i]); // add it to the right array
		}
	}
	return [...quickSort(left), pivot, ...quickSort(right)]; // return the sorted array
}

module.exports = {
	quickSort,
};
