
// "Optimal Solution" Two Pointers, One Pass
// O(n) time O(1) space

var removeNthFromEnd = function(head, n) {
  let start = new ListNode(0, head);   // create a dummy node
  let slow = start, fast = start;     // slow and fast pointers
  for (let i = 0; i < n; i++) { 
    fast = fast.next;
  } 
  while (fast.next !== null) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return start.next;
};
// One Pointer, Two Passes
// O(n) time O(1) space

var removeNthFromEnd = function(head, n) {
  const preHead = new ListNode(0, head);
  let count = 0;
  let curr = preHead;
  while (curr.next !== null) {
    curr = curr.next;
    count++;
  }
  count -= n;
  curr = preHead;
  while (count > 0) {
    curr = curr.next;
    count--;
  }
  curr.next = curr.next.next;
  return preHead.next;
}
// Sub-Optimal One Pass Recursive Solution
// Recursive Solution O(n) time, O(n) space

var removeNthFromEnd = function(head, n) {
  const preHead = new ListNode(0, head);
  recurse(preHead, n, 0);
  return preHead.next;
};

const recurse = (node, n, count) => {
  if (node.next === null) { return 1; }
  const num = recurse(node.next, n, count + 1);
  if (num === n) {
    node.next = node.next.next;
  }
  return num + 1;
}