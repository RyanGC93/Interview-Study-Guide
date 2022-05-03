/*
! https://leetcode.com/problems/reverse-linked-list/
206. Reverse Linked List;

Given the head of a singly linked list, reverse the list, and return the reversed list.

Example 1:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Example 2:
Input: head = [1,2]
Output: [2,1]

Example 3:
Input: head = []
Output: []

*/
var reverseList = function (head) {
}


// ! SOLUTION

var reverseList = function (head) {
    if (!head || !head.next) return head; // if there is no head or if there is only one node, return the head
    let curr = head; // set the current node to the head
    let prev = null; // set the previous node to null
    while (curr) { // while the current node is not null
        let next = curr.next; // set the next node to the current node's next node
        curr.next = prev; // set the current node's next node to the previous node
        prev = curr; // set the previous node to the current node
        curr = next; // set the current node to the next node
    }
    return prev; // return the previous node
};

//! Time Complexity = O(n) // n = number of nodes in the linked list
//! Space Complexity = O(1) // no extra space is used
    
//! Solution 2

var reverseList = function(head) {
    let [prev, current] = [null, head]
    while(current) {
        [current.next, prev, current] = [prev, current, current.next]
    }
    return prev
}