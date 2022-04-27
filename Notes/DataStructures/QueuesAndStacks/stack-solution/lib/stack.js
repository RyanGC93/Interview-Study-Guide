class Node {
	constructor(val) {
		this.value = val;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.top = null;
		this.length = 0;
	}
	push(val) {
		let addedNode = new Node(val);
		if (this.top) {
			addedNode.next = this.top;
		}
		this.top = addedNode;
		this.length++;
		return this.length;
	}
	pop() {
		if (!this.top) return null;
		let popped = this.top;
		this.top = popped.next;
		this.length--;
		return popped.value;
	}
	size() {
		return this.length;
	}
}

exports.Node = Node;
exports.Stack = Stack;
