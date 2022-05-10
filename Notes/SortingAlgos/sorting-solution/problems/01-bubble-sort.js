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

module.exports = {
	bubbleSort,
	swap,
};
