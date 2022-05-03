/*
Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example 1:


Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Example 2:

Input: head = [1], n = 1
Output: []

Example 3:

Input: head = [1,2], n = 1
Output: [1]


*/

var removeNthFromEnd = function (head, n) {
	var dummy = new ListNode(0);
	dummy.next = head;
	var slow = dummy;
	var fast = dummy;

	for (var i = 0; i < n; i++) {
		fast = fast.next;
	}
	while (fast.next !== null) {
		slow = slow.next;
		fast = fast.next;
	}
	slow.next = slow.next.next;
	return dummy.next;
};

var removeNthFromEnd = function (head, n) {
	let prev = null,
		cur = head,
		ahead = head;
	for (let i = 0; i < n; i++) {
		ahead = ahead.next;
	}
	while (ahead !== null) {
		prev = cur;
		cur = cur.next;
		ahead = ahead.next;
	}
	// Now, cur points to the n-th node from the end and prev points to the previous node
	if (!prev) return cur.next; // this is when head node is the node to be deleted
	prev.next = cur.next;
	return head;
	// Time Complexity: O(N)
	// Space Complexity: O(1)
};

// We'll use three pointers: prev, cur, ahead
// We'll advance ahead pointer by n first. Then, we will advance all three pointers until ahead reaches the end
// Then, cur will point to the n-th node from the end and prev will point to the previous node
// prev's next becomes cur's next and we just removed current node (which is n-th node from end of list)
