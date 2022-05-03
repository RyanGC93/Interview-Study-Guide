/* 
24. Swap Nodes in Pairs

Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

Example 1:
Input: head = [1,2,3,4]
Output: [2,1,4,3]

Example 2:
Input: head = []
Output: []

Example 3:
Input: head = [1]
Output: [1]
*/

var swapPairs = function (head) {
    if (!head || !head.next) return head; // if the list is empty or has only one node, return the list
    let temp = head.next; // store the next node
    head.next = swapPairs(temp.next); // set the next node to the next next node
    temp.next = head; // set the next next node to the current nod
    return temp; // return the new head
};

//! Time Complexity = O(n) // n = number of nodes in the linked list
//! Space Complexity = O(1) // no extra space is used
