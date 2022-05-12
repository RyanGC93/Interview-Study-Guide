function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		// loop through the array
		let min = i; // set the minimum value to the current index
		for (let j = i + 1; j < arr.length; j++) {
			// loop through the array again
			if (arr[j] < arr[min]) {
				// if the value at the current index is less than the minimum value
				min = j; // set the minimum value to the current index
			}
		}
		if (min !== i) {
			// if the minimum value is not the current index
			let temp = arr[i]; // set the temp value to the current index
			arr[i] = arr[min]; // set the current index to the minimum value
			arr[min] = temp; // set the minimum value to the temp value
		}
	}
	return arr; // return the sorted array
}
//! Time Complexity = O(n^2)
//! Space Complexity = O(1)

module.exports = {
	selectionSort,
	swap,
};
