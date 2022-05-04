/*
25. Reverse Nodes in k - Group;

Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

You may not alter the values in the list's nodes, only nodes themselves may be changed.

Example 1:
Input: head = [1,2,3,4,5], k = 2
Output: [2,1,4,3,5]

Example 2:
Input: head = [1,2,3,4,5], k = 3
Output: [3,2,1,4,5]
*/

//! THIS IS WRONG!!!
var reverse = function (lp,rp) {
    [lp.next, rp.next] = [rp.next, lp.next];
    [lp.next.next, rp.next.next] = [rp.next.next, lp.next.next];
    return lp;
}


var reverseKGroup = function (head, k) {
    if (!head || k === 1) return head; 
    let dummy = new ListNode(0);
    dummy.next = head; // Create dummy and point next to head so that we can store the head to return later
    let prev = dummy;
    let curr = head;
    let count = 0;
    while (curr) {
        count++;
        if (count % k === 0) {
            prev = reverse(prev, curr.next);
            curr = prev.next;
        } else {
            curr = curr.next;
        }
    }
    return dummy.next;

    
}