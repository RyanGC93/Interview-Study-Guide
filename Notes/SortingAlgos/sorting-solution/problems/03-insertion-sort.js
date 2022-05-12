function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		// loop through the array
		let j = i; // set j to i
		while (j > 0 && arr[j - 1] > arr[j]) {
			// while j is greater than 0 and the value at j is greater than the value at j - 1
			let temp = arr[j]; // set temp to the value at j
			arr[j] = arr[j - 1]; // set the value at j to the value at j - 1
			arr[j - 1] = temp; // set the value at j - 1 to temp
			j--; // decrement j
		}
	}
	return arr; // return the array
}
//! Time Complexity = O(n^2)
//! Space Complexity = O(1)

module.exports = {
	insertionSort,
};
