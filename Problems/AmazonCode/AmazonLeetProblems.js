/*
Leetcode Problems for Amazon
https://leetcode.com/list/954v5ops/

Keyword Search
//! Left at

*/

//! 1. Two Sum (Easy)
var twoSum = function (nums, target) {
	var dict = {};
	for (var i = 0; i < nums.length; i++) {
		if (nums[i] in dict) {
			return [dict[nums[i]], i];
		}
		dict[target - nums[i]] = i;
	}
};

var twoSum = function(nums, target) {
    for(var i = 0; i< nums.length; i++){
		// work out the complement
		// eg. nums[i] === 3, target === 7, the complement will be 4
        var complement = target - nums[i];
		
		// Iterate the rest of the number and check if the complement of nums[i] exists
		// This part takes a lot of time
        var found = nums.indexOf(complement, i + 1);
        if(found !== -1){
            return [i, found];
        }
    }
    return [0, 0];
};
//! A much faster solution - Two-pass hash table
//! Result: 72ms (beats 97.15%), 17.2 MB

/**
Two-pass Hash Table

eg. nums = [3,5,9,12,15], target = 21

const hashTable = {
	3: 0,
	5: 1,
	9: 2,
	12: 3,
	15: 4
}

1. Create a hashTable
2. Iterate nums
	2.1 Find the complement of nums[i] in the hashTable by checking the key of the hashTable object. In this way, the iteration time will be significantly reduced. If found, return [i, found]
3. If not found, return [0,0]

*/
var twoSum = function(nums, target) {
    if (nums.length === 2) return [0, 1];
    const len = nums.length;
    let hashTable = {};
	for(let i = 0; i < len; i++){
		// Add a new obj to the hashTable where key = nums[i] and value = i
		hashTable[nums[i]] = i;
	}
	
    for(let i = 0; i < len; i++) {
        let complement = target - nums[i];
        let found = hashTable[complement]; // Determine whether the complement exist in the hashTable
        if(found !== undefined && found != i) return [i, found];
	}
	return [0,0];
}
//! An even faster solution with less memory consumption - One-pass hash table
//! Result: 68ms (beats 100%), 16 MB
//! Thanks for https://leetcode.com/problems/two-sum/discuss/182680/JavaScript-Beats-86

var twoSum = function(nums, target) {
    if (nums.length === 2) return [0, 1];
    const len = nums.length;
    let map = {};
    for(let i = 0; i < len; i++) {
        let n = target - nums[i];
        let find = map[n];
        if(find !== undefined) return [find, i];
        else map[nums[i]] = i;
    }
};

//! 2. Add Two Numbers
//! https://leetcode.com/problems/add-two-numbers/discuss
var addTwoNumbers = function (l1, l2) {
	var result = new ListNode(0);
	var curr = result;
	var carry = 0;
	while (l1 || l2) {
		var sum = carry;
		if (l1) {
			sum += l1.val;
			l1 = l1.next;
		}
		if (l2) {
			sum += l2.val;
			l2 = l2.next;
		}
		curr.next = new ListNode(sum % 10);
		curr = curr.next;
		carry = Math.floor(sum / 10);
	}
	if (carry) {
		curr.next = new ListNode(carry);
	}
	return result.next;
};

//! 3. Median of Two Sorted Arrays
var findMedianSortedArrays = function (nums1, nums2) {
	var nums = nums1.concat(nums2);
	nums.sort(function (a, b) {
		return a - b;
	});
	var len = nums.length;
	if (len % 2 === 0) {
		return (nums[len / 2] + nums[len / 2 - 1]) / 2;
	} else {
		return nums[Math.floor(len / 2)];
	}
};
//! 4. Longest Palindromic Substring

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
//! 5. String to Integer (atoi)


var myAtoi = function(input) {
	let [min,max, parsed] = [-2147483648,2147483647, Number.parseInt(input)]  
  return (Number.isNaN(parsed)) ? 0: (parsed < min) ? min: (parsed > max) ? max : parsed
};
//! 6. Integer to Roman
var intToRoman = function (num) {
	var roman = "";
	var digits = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
	var symbols = [
		"M",
		"CM",
		"D",
		"CD",
		"C",
		"XC",
		"L",
		"XL",
		"X",
		"IX",
		"V",
		"IV",
		"I",
	];
	for (var i = 0; i < digits.length; i++) {
		while (num >= digits[i]) {
			num -= digits[i];
			roman += symbols[i];
		}
	}
	return roman;
};

function intToRoman(num) {
    const map = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
    let result = '';
    Object.entries(map).forEach(([letter, n]) => {
        result += letter.repeat(Math.floor(num / n));
        num %= n;
    });
    return result;
}

//! 7. Roman to Integer

var romanToInt = function (s) {
	var roman = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};
	var sum = 0;
	for (var i = 0; i < s.length; i++) {
		if (i + 1 < s.length && roman[s[i]] < roman[s[i + 1]]) {
			sum -= roman[s[i]];
		} else {
			sum += roman[s[i]];
		}
	}
	return sum;
};

//! 8. Valid Parentheses

var isValid = function (s) {
	var stack = [];
	var map = {
		")": "(",
		"}": "{",
		"]": "[",
	};
	for (var i = 0; i < s.length; i++) {
		if (s[i] in map) {
			if (stack.pop() !== map[s[i]]) {
				return false;
			}
		} else {
			stack.push(s[i]);
		}
	}
	return stack.length === 0;
};

//! 9. Merge k Sorted Lists
var mergeKLists = function (lists) {
    const mergeSort = (arr) => {
        if(arr.length === 0) return null;
        if(arr.length === 1) return arr[0];
        const left = arr.splice(0, arr.length / 2);
        return merge(mergeSort(left), mergeSort(arr));
    }
    
    const merge = (a,b) => {
        const root = new ListNode();
        let aux = root;
        while(a && b) {
            if(a.val < b.val) {
                aux.next = a;
                a = a.next;
            } else {
                aux.next = b;
                b = b.next;
            }
            aux = aux.next;
        }
        aux.next =  a || b;
        return root.next;
    }
    
    return mergeSort(lists);
};


//! 10. Valid Sudoku
var isValidSodoku = function (board) {
    for (let i = 0; i < 9; i++) {
        let row = new Set(), col = new Set(), sqr = new Set();
        for (let j = 0; j < 9; j++) {
          let rowc = board[i][j];
          let colc = board[j][i];
          let sqrc = board[Math.floor(i / 3) * 3 + Math.floor(j / 3)][(i % 3) * 3 + j % 3];
          if (row.has(rowc) || col.has(colc) || sqr.has(sqrc)) return false;
          if (rowc !== ".") row.add(rowc);
          if (colc !== ".") col.add(colc);
          if (sqrc !== ".") sqr.add(sqrc);
        }
      }
      return true;
};
//! 11. Combination Sum

var combinationSum = function (candidates, target) {
	var res = [];
	var backtrack = function (candidates, target, start, curr) {
		if (target < 0) return;
		if (target === 0) {
			res.push(curr);
			return;
		}
		for (var i = start; i < candidates.length; i++) {
			backtrack(
				candidates,
				target - candidates[i],
				i,
				curr.concat(candidates[i])
			);
		}
	};
	backtrack(candidates, target, 0, []);
	return res;
};
//! 12. Permutations

var permute = function (nums) {
    const results = [];
    
	//Current reflects state of permutation, rest reflects starting point
	//(nums) as it gets whittled down by backTrack function.
    function backTrack(current = [], rest = nums) {
	
		//If rest is empty, we have a full permutation, push to results and return.
        if (!rest.length) return results.push(current);
		
		//If there are remaining numbers in rest, iterate through each, remove the number.
		//Number is then concatenated w/ current results, remaining in newRest (after num
		//is removed) is passed in as Rest for next round of recursion.  In this way, we build 
		//up all possible permutations.
        rest.forEach((num, index) => {
            const removed = [...rest];
            removed.splice(index, 1);
            backTrack(current.concat([num]), removed);
        })
    }
    
	//Call function to populate Results array.  Then return.
    backTrack();
    
    return results;
};
//! 13. Merge Intervals

//! Solution One
var merge = function (intervals) {
	let ret = [];
	for (let i = 0; i < intervals.length; i++) {
		if (i === intervals.length - 1) {
			ret.push(intervals[i]);
			return ret;
		}
		if (
			intervals[i][1] >= intervals[i + 1][0] ||
			intervals[i][0] >= intervals[i + 1][0]
		) {
			intervals[i][1] = intervals[i + 1][1];
			ret.push(intervals[i]);
			i++;
		} else {
			ret.push(intervals[i]);
		}
	}
	return ret;
};
//! Solution Two
var mergeIntervals = function mergeIntervals(intervals) {
	var res = [];
	var start = intervals[0][0];
	var end = intervals[0][1];
	for (var i = 1; i < intervals.length; i++) {
		if (intervals[i][0] > end) {
			res.push([start, end]);
			start = intervals[i][0];
			end = intervals[i][1];
		} else {
			end = Math.max(end, intervals[i][1]);
		}
	}
	res.push([start, end]);
	return res;
};

//! 14. Rotate List ()

var rotateRight = function (head, k) {
	if (!head || !head.next) return head;
	var count = 1;
	var curr = head;
	while (curr.next) {
		curr = curr.next;
		count++;
	}
	curr.next = head;
	k = k % count;
	for (var i = 0; i < count - k; i++) {
		head = head.next;
	}
	var res = head.next;
	head.next = null;
	return res;
};
//! 15. Minimum Path Sum

var minPathSum = function (grid) {
	var m = grid.length;
	var n = grid[0].length;
	var dp = new Array(m);
	for (var i = 0; i < m; i++) {
		dp[i] = new Array(n);
	}
	dp[0][0] = grid[0][0];
	for (var i = 1; i < m; i++) {
		dp[i][0] = dp[i - 1][0] + grid[i][0];
	}
	for (var i = 1; i < n; i++) {
		dp[0][i] = dp[0][i - 1] + grid[0][i];
	}
	for (var i = 1; i < m; i++) {
		for (var j = 1; j < n; j++) {
			dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
		}
	}
	return dp[m - 1][n - 1];
};

//! 16. Sort Colors (75)

var sortColors = function (nums) {
	var count = [0, 0, 0];
	for (var i = 0; i < nums.length; i++) {
		if (nums[i] === 0) {
			count[0]++;
		} else if (nums[i] === 1) {
			count[1]++;
		} else {
			count[2]++;
		}
	}
	var i = 0;
	while (i < count[0]) {
		nums[i] = 0;
		i++;
	}
	while (i < count[0] + count[1]) {
		nums[i] = 1;
		i++;
	}
	while (i < count[0] + count[1] + count[2]) {
		nums[i] = 2;
		i++;
	}
};

//! 17. Word Search (79)
//! https://leetcode.com/problems/word-search/discuss/

var dfs = function (board, i, j, word, index) {
	if (index === word.length) return true;
	if (
		i < 0 ||
		i >= board.length ||
		j < 0 ||
		j >= board[0].length ||
		board[i][j] !== word[index]
	)
		return false;
	var temp = board[i][j];
	board[i][j] = "#";
	var res =
		dfs(board, i - 1, j, word, index + 1) ||
		dfs(board, i + 1, j, word, index + 1) ||
		dfs(board, i, j - 1, word, index + 1) ||
		dfs(board, i, j + 1, word, index + 1);
	board[i][j] = temp;
	return res;
};

var exists = function (board, word) {
	var m = board.length;
	var n = board[0].length;
	var visited = new Array(m);
	for (var i = 0; i < m; i++) {
		visited[i] = new Array(n);
	}
	for (var i = 0; i < m; i++) {
		for (var j = 0; j < n; j++) {
			if (dfs(board, word, i, j, 0, visited)) return true;
		}
	}
	return false;
};

//! 19. Validate Binary Search Tree (98)
//! https://leetcode.com/problems/validate-binary-search-tree/discuss/


	var isValidBST = function(root) {
		return isValidBSTHelper(root, -Infinity, Infinity);
		// T.C: O(N)
		// S.C: O(H)
	};
	
	const isValidBSTHelper = (root, low, high) => {
		if (!root) {
			return true;
		}
		return root.val > low && root.val < high &&
			isValidBSTHelper(root.left, low, root.val) &&
			isValidBSTHelper(root.right, root.val, high);
	}
//! 20. Same Tree
//! https://leetcode.com/problems/same-tree/discuss/

var isSameTree = function (p, q) {
    if (p == null && q == null) {
        return true;
    } else if (p == null || q == null) {
        return false;
    }
    
    const left = isSameTree(p.left, q.left);    
    const right = isSameTree(p.right, q.right);
    return p.val == q.val && left && right;
};
//> TIME COMPLEXITY : O(N)
//> SPACE COMPLEXITY : O(N)



//! 21. Symmetric Tree (10)
//! https://leetcode.com/problems/symmetric-tree/discuss/

var isSymmetric = function (root) {
    if (root == null) return true;
    
    return symmetryChecker(root.left, root.right);
};

function symmetryChecker(left, right) {
    if (left == null && right == null) return true; // If both sub trees are empty
    if (left == null || right == null) return false; // If only one of the sub trees are empty
    if (left.val !== right.val) return false; // If the values dont match up
    
	// Check both subtrees but travelled in a mirrored/symmetric fashion
	// (one goes left, other goes right)  and make sure they're both symmetric
    return symmetryChecker(left.left, right.right) &&
    symmetryChecker(left.right, right.left);
};
// > TIME COMPLEXITY : O(N)
// > SPACE COMPLEXITY : O(1)

//! 22. Binary Tree Level Order Traversal (102)
//! https://leetcode.com/problems/binary-tree-level-order-traversal/discuss/

var levelOrder = function (root) {
	if (!root) return [];
	var res = [];
	var queue = [];
	queue.push(root);
	while (queue.length) {
		var level = [];
		var size = queue.length;
		for (var i = 0; i < size; i++) {
			var node = queue.shift();
			level.push(node.val);
			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}
		res.push(level);
	}
	return res;
};
//! 23. Convert Sorted List to Binary Search Tree

var levelOrder = function (root) {
	if (!root) return [];
	var res = [];
	var queue = [];
	queue.push(root);
	while (queue.length) {
		var level = [];
		var size = queue.length;
		for (var i = 0; i < size; i++) {
			var node = queue.shift();
			level.push(node.val);
			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}
		res.push(level);
	}
	return res;
};
//! 24. Path Sum II (113)

var dfs = function (root, sum, path, res) {
	if (!root) return;
	path.push(root.val);
	if (!root.left && !root.right) {
		if (root.val === sum) res.push(path.slice());
	}
	dfs(root.left, sum - root.val, path, res);
	dfs(root.right, sum - root.val, path, res);
	path.pop();
};

var pathSum = function (root, sum) {
	var res = [];
	var path = [];
	dfs(root, sum, path, res);
	return res;
};

//! 25. Populating Next Right Pointers in Each Node (116)

var connect = function (root) {
	if (!root) return;
	var queue = [];
	queue.push(root);
	while (queue.length) {
		var size = queue.length;
		for (var i = 0; i < size; i++) {
			var node = queue.shift();
			if (i < size - 1) node.next = queue[0];
			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}
	}
};

//! 26. Best Time to Buy and Sell Stock

var maxProfit = function (prices) {
	var max = 0;
	for (var i = 0; i < prices.length; i++) {
		for (var j = i + 1; j < prices.length; j++) {
			if (prices[j] - prices[i] > max) max = prices[j] - prices[i];
		}
	}
	return max;
};

//! 27. Word Ladder II
//! https://leetcode.com/problems/word-ladder-ii/discuss/

//! 28. Word Ladder
var findLadder = function (beginWord, endWord) {
	var res = [];
	var queue = [];
	queue.push(beginWord);
	var visited = {};
	visited[beginWord] = true;
	var level = 1;
	while (queue.length) {
		var size = queue.length;
		for (var i = 0; i < size; i++) {
			var word = queue.shift();
			if (word === endWord) return res;
			for (var j = 0; j < word.length; j++) {
				var chars = word.split("");
				for (var k = 0; k < 26; k++) {
					chars[j] = String.fromCharCode(97 + k);
					var newWord = chars.join("");
					if (newWord === endWord) return res;
					if (!visited[newWord]) {
						visited[newWord] = true;
						queue.push(newWord);
					}
				}
			}
		}
		level++;
	}
	return res;
};

//! 28. Word Ladder

var ladderLength = function (beginWord, endWord) {
	var res = [];
	var queue = [];
	queue.push(beginWord);
	var visited = {};
	visited[beginWord] = true;
	var level = 1;
	while (queue.length) {
		var size = queue.length;
		for (var i = 0; i < size; i++) {
			var word = queue.shift();
			if (word === endWord) return level;
			for (var j = 0; j < word.length; j++) {
				var chars = word.split("");
				for (var k = 0; k < 26; k++) {
					chars[j] = String.fromCharCode(97 + k);
					var newWord = chars.join("");
					if (!visited[newWord]) {
						visited[newWord] = true;
						queue.push(newWord);
					}
				}
			}
		}
		level++;
	}
	return res;
};
/*

29. Candy (135)
https://leetcode.com/problems/candy/discuss/
=========================================================
*/
var candy = function (ratings) {
	var res = 1;
	var size = ratings.length;
	var left = [1];
	var right = [1];
	for (var i = 1; i < size; i++) {
		if (ratings[i] > ratings[i - 1]) {
			left[i] = left[i - 1] + 1;
		} else {
			left[i] = 1;
		}
	}
	for (var i = size - 2; i >= 0; i--) {
		if (ratings[i] > ratings[i + 1]) {
			right[i] = right[i + 1] + 1;
		} else {
			right[i] = 1;
		}
	}
	for (var i = 0; i < size; i++) {
		res += Math.max(left[i], right[i]);
	}
	return res;
};
//! 30. LRU Cache

var LRUCache = function (capacity) {
	this.capacity = capacity;
	this.cache = {};
	this.order = [];
};
LRUCache.prototype.get = function (key) {
	if (!this.cache[key]) return -1;
	this.order.splice(this.order.indexOf(key), 1);
	this.order.push(key);
	return this.cache[key];
};
LRUCache.prototype.put = function (key, value) {
	if (this.cache[key]) {
		this.order.splice(this.order.indexOf(key), 1);
		this.order.push(key);
		this.cache[key] = value;
		return;
	}
	if (this.order.length === this.capacity) {
		var key = this.order.shift();
		delete this.cache[key];
	}
	this.order.push(key);
	this.cache[key] = value;
};

//! 31. Min Stack
//! 32. Number of Islands
//! 33. Course Schedule
//! 34. Course Schedule II
//! 35. Design Add and Search Words Data Structure
//1. https://leetcode.com/problems/design-hashmap/discuss/

//! 32. Number of Islands
var dfs = function (grid, i, j) {
	if (
		i < 0 ||
		j < 0 ||
		i >= grid.length ||
		j >= grid[0].length ||
		grid[i][j] === 0
	)
		return;
	grid[i][j] = 0;
	dfs(grid, i + 1, j);
	dfs(grid, i - 1, j);
	dfs(grid, i, j + 1);
	dfs(grid, i, j - 1);
};

var numIslands = function (grid) {
	var res = 0;
	for (var i = 0; i < grid.length; i++) {
		for (var j = 0; j < grid[0].length; j++) {
			if (grid[i][j] === "1") {
				dfs(grid, i, j);
				res++;
			}
		}
	}
	return res;
};
//! 33. Course Schedule
//! https://leetcode.com/problems/course-schedule/discuss/
var dfs = function (graph, i, visited) {
	if (visited[i] === 1) return;
	visited[i] = 1;
	for (var j = 0; j < graph[i].length; j++) {
		if (graph[i][j] === 1) dfs(graph, j, visited);
	}
};
//! 34. Course Schedule II

var canFinish = function (numCourses, prerequisites) {
	var graph = {};
	var visited = {};
	var res = [];
	for (var i = 0; i < prerequisites.length; i++) {
		if (!graph[prerequisites[i][0]]) graph[prerequisites[i][0]] = [];
		graph[prerequisites[i][0]].push(prerequisites[i][1]);
	}
	for (var i = 0; i < numCourses; i++) {
		if (!visited[i]) {
			if (dfs(graph, i, visited)) return false;
		}
	}
	return true;
};


var dfs = function (graph, i, visited, res) {
	if (visited[i] === 1) return;
	visited[i] = 1;
	for (var j = 0; j < graph[i].length; j++) {
		if (graph[i][j] === 1) dfs(graph, j, visited, res);
	}
	res.push(i);
};

var findOrder = function (numCourses, prerequisites) {
	var res = [];
	var graph = {};
	var visited = {};
	for (var i = 0; i < prerequisites.length; i++) {
		if (!graph[prerequisites[i][0]]) graph[prerequisites[i][0]] = [];
		graph[prerequisites[i][0]].push(prerequisites[i][1]);
	}
	for (var i = 0; i < numCourses; i++) {
		if (!visited[i]) {
			if (dfs(graph, i, visited)) return false;
		}
	}
	return res;
};

//! 35. Design Add and Search Words Data Structure
//! https://leetcode.com/problems/design-add-and-search-words-data-structure/discuss/
var WordDictionary = function () {};

WordDictionary.prototype.addWord = function (word) {};

WordDictionary.prototype.search = function (word) {};

//! 36. Word Search II

var dfs = function (board, i, j, word, visited) {
	if (word.length === 0) return true;
	if (
		i < 0 ||
		i >= board.length ||
		j < 0 ||
		j >= board[0].length ||
		board[i][j] !== word[0] ||
		visited[i][j] === 1
	)
		return false;
	visited[i][j] = 1;
	if (
		dfs(board, i + 1, j, word.slice(1), visited) ||
		dfs(board, i - 1, j, word.slice(1), visited) ||
		dfs(board, i, j + 1, word.slice(1), visited) ||
		dfs(board, i, j - 1, word.slice(1), visited)
	)
		return true;
	visited[i][j] = 0;
	return false;
};

var findWords = function (board, words) {
	var res = [];
	var trie = {};
	for (var i = 0; i < words.length; i++) {
		var node = trie;
		for (var j = 0; j < words[i].length; j++) {
			if (!node[words[i][j]]) node[words[i][j]] = {};
			node = node[words[i][j]];
		}
		node.isWord = true;
	}
	for (var i = 0; i < board.length; i++) {
		for (var j = 0; j < board[0].length; j++) {
			dfs(board, i, j, trie, res);
		}
	}
	return res;
};

//! 37. Sliding Window Maximum
//! https://leetcode.com/problems/sliding-window-maximum/discuss/

var maxSlidingWindow = function (nums, k) {
    // Using monotonic queue method 
    let result = [];
    let _stack = [];
    let n = nums.length;
    
    for(let i =0 ; i <n ; i++){
        
        // 1. stack storage the number from large to small
        //    and elements are index in order 
        //    to check the number is in window or not.
        while(_stack.length >0 && nums[i] >= nums[_stack.slice(-1)[0]]){
            _stack.pop();
        };
        
        _stack.push(i);
        
        // 2. Checking the 1st element. If the index is out of the window,
        //    removing this element , and keeping the first element is the maximum.
        while(i - _stack[0] >= k) _stack.shift();
        
        
        // 3. Adding the largest element to result array.
        if(i >= k-1) result.push(nums[_stack[0]]);
        
    };
    
    return result;
};
//! 38. Integer to English Words
//! https://leetcode.com/problems/integer-to-english-words/discuss/

var numberToWords = function (num) {
	if (num === 0) return "Zero";
	const words = [
		"",
		"One",
		"Two",
		"Three",
		"Four",
		"Five",
		"Six",
		"Seven",
		"Eight",
		"Nine",
		"Ten",
		"Eleven",
		"Twelve",
		"Thirteen",
		"Fourteen",
		"Fifteen",
		"Sixteen",
		"Seventeen",
		"Eighteen",
		"Nineteen",
	];
	const tens = [
		"",
		"",
		"Twenty",
		"Thirty",
		"Forty",
		"Fifty",
		"Sixty",
		"Seventy",
		"Eighty",
		"Ninety",
	];
	const thousands = [
		"",
		"Thousand",
		"Million",
		"Billion",
	];
	let res = "";
	let helper = (num) => { 
		if (num === 0) return "";
		if (num < 20) return words[num];
		if (num < 100) return tens[Math.floor(num / 10)] + " " + helper(num % 10);
		if (num < 1000) return words[Math.floor(num / 100)] + " Hundred " + helper(num % 100);
		if (num < 1000000) return helper(Math.floor(num / 1000)) + " " + thousands[Math.floor(num / 1000)] + " " + helper(num % 1000);
		if (num < 1000000000) return helper(Math.floor(num / 1000000)) + " " + thousands[Math.floor(num / 1000000)] + " " + helper(num % 1000000);
		return helper(Math.floor(num / 1000000000)) + " " + thousands[Math.floor(num / 1000000000)] + " " + helper(num % 1000000000);
	};
	let i = 0;
	while (num > 0) {
		if (num % 1000 !== 0) {
			res = helper(num % 1000) + thousands[i] + " " + res;
		}
		num = Math.floor(num / 1000);
		i++;
	}
	return res.trim();
	

};

//! 39. Game of Life

var gameOfLife = function (board) {

};
//! 40. Find Median from Data Stream

var MedianFinder = function () {};

MedianFinder.prototype.addNum = function (num) {};

MedianFinder.prototype.findMedian = function () {};

//! 41. Longest Increasing Subsequence (300)
//! https://leetcode.com/problems/longest-increasing-subsequence/discuss/
var lengthOfLIS = function (nums) {
	if (nums.length === 0) return 0;
	let dp = new Array(nums.length).fill(1);
	let max = 1;
	for (let i = 1; i < nums.length; i++) {
		for (let j = 0; j < i; j++) {
			if (nums[i] > nums[j]) {
				dp[i] = Math.max(dp[i], dp[j] + 1);
				max = Math.max(max, dp[i]);
			}
		}
	}
	return max;

};
//! 42. Pacific Atlantic Water Flow
//! https://leetcode.com/problems/pacific-atlantic-water-flow/discuss/

var pacificAtlantic = function (heights) {};
//! 43. Minesweeper
//! https://leetcode.com/problems/minesweeper/discuss/

var updateBoard = function (board, click) {};
//! 44. Diameter of Binary Tree
//! https://leetcode.com/problems/diameter-of-binary-tree/discuss/
var diameterOfBinaryTree = function (root) {
	if (!root) return 0;
	let res = 0;
	let dfs = (node) => {
		if (!node) return 0;
		let left = dfs(node.left);
		let right = dfs(node.right);
		res = Math.max(res, left + right);
		return Math.max(left, right) + 1;
	};
	dfs(root);
	return res;

};
//! 45. Reorganize String
//! https://leetcode.com/problems/reorganize-string/discuss/
var reorganizeString = function (s) {
	let map = {};
	for (let i = 0; i < s.length; i++) {
		if (!map[s[i]]) map[s[i]] = 1;
		else map[s[i]]++;
	}
	let res = "";
	let keys = Object.keys(map);
	for (let i = 0; i < keys.length; i++) {
		if (map[keys[i]] > (s.length + 1) / 2) return "";
	}
	let queue = [];
	for (let i = 0; i < keys.length; i++) {
		queue.push({
			key: keys[i],
			count: map[keys[i]],
		});
	}
	while (queue.length > 0) {
		let cur = queue.shift();
		res += cur.key;
		cur.count--;
		if (cur.count > 0) queue.push(cur);
	}
	return res;
}


var haystackOfBinaryTree = function (root) {
	let res = [];
	let stack = [];
	let node = root;
	while (node || stack.length > 0) {
		while (node) {
			stack.push(node);
			node = node.left;
		}
		node = stack.pop();
		res.push(node.val);
		node = node.right;
	}
	return res.join("");
}

var needleInHaystackOfBinaryTree = function (needle, haystack) {
	let haystackOfBinaryTree = haystackOfBinaryTree(haystack);
	return haystackOfBinaryTree.includes(needle);
}

var strStr = function (haystack, needle) {
	return haystack.indexOf(needle);
}

var strStr = function (haystack, needle) {
	let i = 0;
	let j = 0;
	let n = needle.length;
	let m = haystack.length;
	while (i < m && j < n) {
		if (haystack[i] === needle[j]) {
			j++;
		} else {
			i -= j;
			j = 0;
		}
		i++;
	}
	return j === n ? i - j : -1;
}