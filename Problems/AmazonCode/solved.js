// # Currated Problems
// ###
//! 1\. [Two Sum](https://leetcode.com/problems/two-sum) 
var twoSum = function(nums, target) {
    if (nums.length === 2) return [0, 1];
    let map = {};
    for(let i = 0; i < nums.length; i++) {

        let find = map[target - nums[i]];
        if(find !== undefined) return [find, i];
        else map[nums[i]] = i;
    }
};


//! 2\. [Add Two Numbers](https://leetcode.com/problems/add-two-numbers)

var addTwoNumbers = function(l1, l2) {
    const head = new ListNode();
    let cursor = head;
    let carry = 0;
    while (l1 || l2 || carry) {
      cursor.next = new ListNode();
      cursor = cursor.next;
      let val = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
      carry = val >= 10 ? 1 : 0;
      cursor.val = val % 10;
      l1 = l1 ? l1.next : null;
      l2 = l2 ? l2.next : null;
    }
    return head.next;
  };

//! 3\. [Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays)

var findMedianSortedArrays = function(nums1, nums2) {
    var nums = nums1.concat(nums2);
    nums.sort(function(a, b){return a - b});
    var len = nums.length;
    if(len % 2 === 0){
        return (nums[len/2] + nums[len/2 - 1])/2
    } else {
        return nums[Math.floor(len/2)]
    }
};

//! 4\. [Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring)

var longestPalindrome = function (s) {
    let maxPal = '';
    
    for(let i = 0; i < s.length; i++) {
        bubble(i, i); // odd palindrome
        bubble(i, i+1); // even palindrome
    }
    
    function bubble(left, right) {

        while(left >= 0 && s[left] === s[right]) {
            left--;
            right++;
        }
        left++;
        right--;
        
        if(maxPal.length < right-left+1) {
            maxPal = s.slice(left, right+1)
        }
    }
    return maxPal;
};
    
//! 5\. [String to Integer (atoi)](https://leetcode.com/problems/string-to-integer-atoi)
var myAtoi = function(input) {
let [min,max, parsed] = [-2147483648,2147483647, Number.parseInt(input)]  
return (Number.isNaN(parsed)) ? 0: (parsed < min) ? min: (parsed > max) ? max : parsed
}
//! 6\. [Integer to Roman](https://leetcode.com/problems/integer-to-roman)

    
//! 7\. [Roman to Integer](https://leetcode.com/problems/roman-to-integer)
    
//! 8\. [Valid Parentheses](https://leetcode.com/problems/valid-parentheses)
    
//! 9\. [Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists)
    
//! 10\. [Valid Sudoku](https://leetcode.com/problems/valid-sudoku)
    
//! 11\. [Combination Sum](https://leetcode.com/problems/combination-sum)
    
//! 12\. [Permutations](https://leetcode.com/problems/permutations)
    
//! 13\. [Merge Intervals](https://leetcode.com/problems/merge-intervals)
    
//! 14\. [Rotate List](https://leetcode.com/problems/rotate-list)
    
//! 15\. [Minimum Path Sum](https://leetcode.com/problems/minimum-path-sum)
    
//! 16\. [Sort Colors](https://leetcode.com/problems/sort-colors)
    
//! 17\. [Word Search](https://leetcode.com/problems/word-search)
    
//! 18\. [Restore IP Addresses](https://leetcode.com/problems/restore-ip-addresses)
    
//! 19\. [Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree)
    
//! 20\. [Same Tree](https://leetcode.com/problems/same-tree)
    
//! 21\. [Symmetric Tree](https://leetcode.com/problems/symmetric-tree)
    
//! 22\. [Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal)
    
//! 23\. [Convert Sorted List to Binary Search Tree](https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree)
    
//! 24\. [Path Sum II](https://leetcode.com/problems/path-sum-ii)
    
//! 25\. [Populating Next Right Pointers in Each Node](https://leetcode.com/problems/populating-next-right-pointers-in-each-node)
    
//! 26\. [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock)
    
//! 27\. [Word Ladder II](https://leetcode.com/problems/word-ladder-ii)
    
//! 28\. [Word Ladder](https://leetcode.com/problems/word-ladder)
    
//! 29\. [Candy](https://leetcode.com/problems/candy)
    
//! 30\. [LRU Cache](https://leetcode.com/problems/lru-cache)
    
//! 31\. [Min Stack](https://leetcode.com/problems/min-stack)
    
//! 32\. [Number of Islands](https://leetcode.com/problems/number-of-islands)
    
//! 33\. [Course Schedule](https://leetcode.com/problems/course-schedule)
    
//! 34\. [Course Schedule II](https://leetcode.com/problems/course-schedule-ii)
    
//! 35\. [Design Add and Search Words Data Structure](https://leetcode.com/problems/design-add-and-search-words-data-structure)
    
//! 36\. [Word Search II](https://leetcode.com/problems/word-search-ii)
    
//! 37\. [Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum)
    
//! 38\. [Integer to English Words](https://leetcode.com/problems/integer-to-english-words)
    
//! 39\. [Game of Life](https://leetcode.com/problems/game-of-life)
    
//! 40\. [Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream)
    
//! 41\. [Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence)
    
//! 42\. [Pacific Atlantic Water Flow](https://leetcode.com/problems/pacific-atlantic-water-flow)
    
//! 43\. [Minesweeper](https://leetcode.com/problems/minesweeper)
    
//! 44\. [Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree)
    
//! 45\. [Reorganize String](https://leetcode.com/problems/reorganize-string)