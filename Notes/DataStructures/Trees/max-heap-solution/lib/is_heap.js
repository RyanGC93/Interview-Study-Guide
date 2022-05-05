// you may assume that the array will always have a null element at the 0-th index
function isMaxHeap(array, idx = 1) {
	if (array[idx] === undefined) return true;
	let leftIdx = 2 * idx;  // Index of the left child
	let rightIdx = 2 * idx + 1; // Index of the right child
	let leftChild = array[leftIdx] === undefined ? -Infinity : array[leftIdx]; // If the value is undefined, set it to -Infinity >>>> This is to avoid undefined errors and to make a safe comparison
	let rightChild = array[rightIdx] === undefined ? -Infinity : array[rightIdx];

	return (
		array[idx] > leftChild && // If the value is greater than the left child
		array[idx] > rightChild && // If the value is greater than the right child
		isMaxHeap(array, leftIdx) && // If the left child is a max heap structure
		isMaxHeap(array, rightIdx) // If the right child is a max heap structure
	);
}

module.exports = {
	isMaxHeap,
};
