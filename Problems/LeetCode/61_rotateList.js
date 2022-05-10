/* 
61. Rotate List

Given the head of a linked list, rotate the list to the right by k places.

Example 1:

Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]

Example 2:


Input: head = [0,1,2], k = 4
Output: [2,0,1]

*/
var rotateRight = function(head, k) {
    let dummy = new ListNode()
    let slow = dummy, fast = dummy
    let length = 0
    dummy.next = head
    while(fast.next != null){ // find the length of the list
        fast = fast.next
        length++
    }
    k = k % length // if k is greater than the length of the list, then k = k % length
    for (var i = 1; i <= length - k; i++) { // move fast to the kth node
        slow = slow.next // move slow to the kth node
    }
    fast.next = dummy.next // fast.next = head connect end of list to start of list
    dummy.next = slow.next // dummy.next = slow.next connect head the rotated new head
    slow.next = null // slow.next = null (the end of the list)
    return dummy.next // return the new head
};

// Time Complexity: O(n)
// Space Complexity: O(1)