/* 
141. Linked List Cycle
! https://leetcode.com/problems/linked-list-cycle/

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

Example 1:

Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

Example 2:
Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

Example 3:
Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.
*/

var hasCycle = function (head) {
    
};

// ! SOLUTION

var hasCycle = function (head) {
    if (!head || !head.next) return false;
    let slow = head;
    let fast = head.next;
    while (slow !== fast) {
        if (!fast || !fast.next) return false;
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
};

/*
!EXPLANATION

!https://leetcode.com/problems/linked-list-cycle/discuss/1829768/JavaScript-Easy-to-understand-slow-and-fast-pointers-detailed-explanation
Solution
We just need to follow the strategy above - make a slower pointer and a faster pointer. Then we loop and loop again:

if the fast pointer catch up with slow pointer, then it's a circular linked list
if the fast pointer get to the end, then it's not a circular linked list

*/