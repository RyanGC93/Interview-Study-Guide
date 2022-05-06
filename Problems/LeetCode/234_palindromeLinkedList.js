/*
234. Palindrome Linked List

Given the head of a singly linked list, return true if it is a palindrome.

Example 1:
Input: head = [1,2,2,1]
Output: true

Example 2:
Input: head = [1,2]
Output: false
*/


var isPalindrome = function(head) {
    let node = head
    let arr = [] // create an empty array
    
    while(node){ // while the node's next property is not null we will push the node's value to the array
        arr.push(node.val)
        node = node.next
    }
    
    return arr.join('') === arr.reverse().join('') // join the array and reverse it and compare it to the original array
};

//! Time Complexity = O(n) // n = number of nodes in the linked list
//! Space Complexity = O(n) // n = number of nodes in the linked list