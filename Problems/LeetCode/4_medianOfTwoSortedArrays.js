/*
4. Median of Two Sorted Arrays


Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.

Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
*/

function findMedianSortedArrays(nums1, nums2) {
	const len = nums1.length + nums2.length;
	const nums = [];
	let l = 0,
		r = 0;
	// Merge arrays
	while (nums.length < len) {
		if (nums1[l] < nums2[r] || r >= nums2.length) { // If nums1 is smaller than nums2 or nums2 is empty
			nums.push(nums1[l++]); // Push nums1 element
		} else if (nums1[l] >= nums2[r] || l >= nums1.length) { // If nums2 is smaller than nums1 or nums1 is empty
			nums.push(nums2[r++]);  // Push nums2 element
		}
 	}
	 // Calculate and return median
	return len % 2
		? nums[Math.floor(len / 2)]
		: (nums[len / 2 - 1] + nums[len / 2]) / 2;
}
