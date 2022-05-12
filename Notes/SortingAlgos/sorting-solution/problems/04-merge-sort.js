
function merge(left, right) {
	let result = []; // set result to an empty array
	while (left.length && right.length) {
		// while left and right are not empty
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
	if (arr.length < 2) {
		// if the array is less than 2, return the array
		return arr;
	}
	let mid = Math.floor(arr.length / 2); // set mid to the middle of the array
	let left = arr.slice(0, mid); // set left to the first half of the array
	let right = arr.slice(mid); // set right to the second half of the array
	return merge(mergeSort(left), mergeSort(right));
}
module.exports = {
	merge,
	mergeSort,
};
