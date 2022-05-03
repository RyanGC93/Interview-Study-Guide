/*
876. Middle of the Linked List

Given the head of a singly linked list, return the middle node of the linked list.
If there are two middle nodes, return the second middle node.


Example 1:
Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.

Example 2:
Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
*/

var middleNode = function(head) {
    let hi = head, cnt = 1;
    while (hi.next) { // while the head is not null
        hi = hi.next;
        cnt++; // increment the count to get length of the linked list
    }
    cnt = Math.floor(cnt / 2); // get the middle node
    while (cnt--) { // iterate until the middleNode is reached
        head = head.next;
    }
    return head; // return the middle node
};

//! Time Complexity = O(n) // n = number of nodes in the linked list
//! Space Complexity = O(1) // no extra space is used 