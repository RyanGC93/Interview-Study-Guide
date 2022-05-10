/*
109. Convert Sorted List to Binary Search Tree

Given the head of a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

Example 1:

Input: head = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
Explanation: One possible answer is [0,-3,9,-10,null,5], which represents the shown height balanced BST.

Example 2:

Input: head = []
Output: []
*/


//! O(NlogN) Solution
var sortedListToBST1 = function(head) {
    
    let recur = function(listNode) {
        if (listNode == null) return null;
        
        let slow = listNode, fast = listNode, leftTail = null, leftHead = listNode;
        while(fast.next && fast.next.next) { // find the middle node
            leftTail = slow; 
            fast = fast.next.next;
            slow = slow.next;
        }
        
        let root = new TreeNode(slow.val);
        let rightHead = slow.next;

        if (leftTail == null) leftHead = null;
        else leftTail.next = null;
        
        
        root.left = recur(leftHead);
        root.right = recur(rightHead);
        
        return root;
    }
    
    return recur(head);
};
//! O(N) Solution
var sortedListToBST2 = function(head) {
    let nums = [];
    while(head) { // convert the list to an array
        nums.push(head.val);
        head = head.next;
    }
    
    let recur = function(left, right){
        if (left > right) return null;
        let mid = left + parseInt((right - left) / 2); // find the middle node
        let root = new TreeNode(nums[mid]); // create the root
        if (left == right) return root; // if there is only one node, return it
        root.left = recur(left, mid - 1); // create the left subtree
        root.right = recur(mid + 1, right); // create the right subtree
        return root;
    }
    
    return recur(0, nums.length-1); // create the root
};