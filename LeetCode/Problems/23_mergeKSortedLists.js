/*
23. Merge k Sorted Lists

You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

Example 1:

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6

Example 2:

Input: lists = []
Output: []

Example 3:

Input: lists = [[]]
Output: []

*/


var mergeKLists = function(lists) {
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

/* 
//! Time Complexity = n log n due to merge sort
//! Space Complexity = constant as lists increase so does space
*/