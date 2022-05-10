function getDigit(num, i) {
	return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
	if (num === 0) return 1;
	return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
	let maxDigits = 0;
	for (let i = 0; i < nums.length; i++) {
		maxDigits = Math.max(maxDigits, digitCount(nums[i]));
	}
	return maxDigits;
}

function radixSort(nums) {
	let maxDigitCount = mostDigits(nums);
	for (let k = 0; k < maxDigitCount; k++) {
		let digitBuckets = Array.from({ length: 10 }, () => []);
		for (let i = 0; i < nums.length; i++) {
			let digit = getDigit(nums[i], k);
			digitBuckets[digit].push(nums[i]);
		}
		nums = [].concat(...digitBuckets);
	}
	return nums;
}

//! Time Complexity = O(nk)
//! Space Complexity = O(n)

//! Solution 2:
function radixSort(arr) {
	// O(n)
	let max = Math.max(...arr); // get max in the array
	let exp = 1; // initialize exponent
	while (max / exp > 0) {
		// while max is greater than 0
		let buckets = Array.from({ length: 10 }, () => []); // create buckets
		for (let i = 0; i < arr.length; i++) {
			// for each element in the array
			let bucket = Math.floor((arr[i] / exp) % 10); // get the bucket number
			buckets[bucket].push(arr[i]); // push the element into the bucket
		}
		arr = [].concat(...buckets); // concatenate the buckets
		exp *= 10; // increase the exponent
	}
	return arr;
}

module.exports = {
	radixSort,
};
