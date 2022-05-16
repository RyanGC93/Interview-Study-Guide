


// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

// Runtime: 60 ms, faster than 100.00% of JavaScript online submissions for Remove Nth Node From End of List.
// Memory Usage: 35.9 MB, less than 100.00% of JavaScript online submissions for Remove Nth Node From End of List.


var removeNthFromEnd = function(head, n) {
    if(!head) return null; // if head is null, return null
    var dummy = new ListNode(-Infinity);    // dummy node
    dummy.next = head;                     // dummy node's next is head
    var fast = dummy;                     // fast pointer
    var slow = dummy;                    // slow pointer
    while(n--){                        // move fast pointer n steps ahead
        fast = fast.next;               // move fast pointer n steps ahead
    }
    while(fast.next){                 // move fast pointer to the end
        fast = fast.next;              // move fast pointer to the end
        slow = slow.next;             // move slow pointer to the end
    }
    slow.next = slow.next.next;      // remove the node
    return dummy.next;               // return the head
}