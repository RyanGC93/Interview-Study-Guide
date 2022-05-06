/*
83. Remove Duplicates from Sorted List

Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

Example 1:
Input: head = [1,1,2]
Output: [1,2]

Example 2:
Input: head = [1,1,2,3,3]
Output: [1,2,3]

*/
var deleteDuplicates = function (head) {
    let dummy = head
    let current = head
    while (current && current.next) {
        let next = current.next

        while (next && current.val === next.val) {
            next = next.next
        }
        current.next = next
        current = next
    }
    return dummy
};

//! Time Complexity = linear
//! space Complexity = constant