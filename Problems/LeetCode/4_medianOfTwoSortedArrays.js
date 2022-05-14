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

//!SOLUTION 1

var findMedianSortedArrays1 = function (left, right) {
  let result = []; // set result to an empty array
  while (left.length && right.length) {
    // while left and right are not empty
    if (left[0] < right[0]) {  // if the first element of left is smaller than the first element of right
      result.push(left.shift());
    } else { // if the first element of right is smaller than the first element of left
      result.push(right.shift());
    }
  }
  while (left.length) { // adds the remaining elements of left to result
    result.push(left.shift());
  }
  while (right.length) { // adds the remaining elements of right to result
    result.push(right.shift());
  }
  if (result.length % 2 !== 0) {
    console.log(result);
    return result[Math.floor(result.length / 2)];
  } else {
    let val =
      result[Math.floor(result.length / 2) - 1] +
      result[Math.floor(result.length / 2)];
    return val / 2;
  }
};
// Time Complexity: O(log(m+n))
// Space Complexity: O(1)


//! SOLUTION 2


function findMedianSortedArrays(nums1, nums2) {
  const len = nums1.length + nums2.length;
  const nums = [];
  let l = 0,
    r = 0;
  // Merge arrays
  while (nums.length < len) {
    if (nums1[l] < nums2[r] || r >= nums2.length) {
      // If nums1 is smaller than nums2 or nums2 is empty
      nums.push(nums1[l++]); // Push nums1 element and increment l
    } else if (nums1[l] >= nums2[r] || l >= nums1.length) {
      // If nums2 is smaller than nums1 or nums1 is empty
      nums.push(nums2[r++]); // Push nums2 element and increment r
    }
  }
  // Calculate and return median
  return len % 2
    ? nums[Math.floor(len / 2)]
    : (nums[len / 2 - 1] + nums[len / 2]) / 2;
}

//! Time Complexity: O(log(m+n))
