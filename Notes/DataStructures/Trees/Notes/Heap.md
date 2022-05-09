
## Heap

![](https://media.geeksforgeeks.org/wp-content/cdn-uploads/MinHeapAndMaxHeap.png)
### Definition

- A heap is a tree where the value of each node is greater than or equal to the values of its children
  - In min-heap property, the value of each node, or child, is greater than or equal to the value of its parent, with the minimum value at the root node.
  - In max-heap property, the value of each node, or child, is less than or equal to the value of its parent, with the maximum value at the root node.
- A heap should be a balanced tree but does not follow the BST property.

**How is Binary Heap represented?**  
A Binary Heap is a Complete Binary Tree. A binary heap is typically represented as an array.

- The root element will be at Arr[0]
- The left child of the root element will be at Arr[2 * 0 + 1]
- The right child of the root element will be at Arr[2 * 0 + 2]
- The parent element will be at Arr[(i-1) / 2]

  The traversal method use to achieve Array representation is **Level Order**

![](https://www.geeksforgeeks.org/wp-content/uploads/binaryheap.png)

### Methods or Operations of Heap

- find - in order to find an item in a heap
- insert - in order to add an item in a heap ensuring the heap property is maintained min-heap and max-heap property
- delete - in order to remove an item in a heap
- extract - in order to return the value of an item and then delete from heap
- replace - in order to extract or pop the root and insert or push a new item in a heap ensuring the heap property has maintained min-heap and max-heap property

Apart from these basic operations, there are other operations such as:

- size, which returns the size of heap
- is-empty, which returns ''true'' if heap is empty or ''false'' if it has value
- merge, which involves the joining or union of two heaps; all the values from both heaps are included but the original heaps are preserved
- meld, which involves the joining of two heaps where the values from both heaps are included but the original heaps are destroyed

So in order to fill the Nth level, (N-1) levels should be completely filled first and the filling of nodes in the Nth level should take place from left to right.

### Time Complexity Analysis

- Insertion: O(log n)
> If a node is to be inserted at a level of height H:
> Complexity of adding a node is: O(1)
> 
> Complexity of swapping the nodes(upheapify): O(H)
> (swapping will be done H times in the worst case scenario)
> 
> Total complexity: O(1) + O(H) = O(H)
> 
> For a Complete Binary tree, its height H = O(log N), where N represents total no. of nodes.
> 
> Therefore, Overall Complexity of insert operation is O(log N).

- Search: O(log n)

- Deletion: O(log n)
> If a node is to be deleted from a heap with height H:
> 
> Complexity of swapping parent node and leaf node is: O(1)
> 
> Complexity of swapping the nodes(downheapify): O(H)
> (swapping will be done H times in the worst case scenario)
> 
> Total complexity: O(1) + O(H) = O(H)
> 
> For a Complete Binary tree, its height H = O(log N), where N represents total no. of nodes.
> 
> Therefore, Overall Complexity of delete operation is O(log N).

- Extraction(min/max): O(1)
> In order to obtain the minimum value just return the value of the root node (which is the smallest element in Min Heap), So simply return the element at index 0 of the array.

# Prioprity Queue

<details>
<summary>Definition</summary>

```js

class PriorityQueue {
    constructor(){
        this.values = [];
    }
    enqueue(val, priority){
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    dequeue(){
        const min = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild,rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild.priority < element.priority) || 
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                   swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

let ER = new PriorityQueue();
ER.enqueue("common cold",5)
ER.enqueue("gunshot wound", 1)
ER.enqueue("high fever",4)
ER.enqueue("broken arm",2)
ER.enqueue("glass in foot",3)

```