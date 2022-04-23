

Stack and Queue Properties
--------------------------

Stacks and Queues are so similar in composition that we can discuss their properties together. They track the following three properties:

**Stack Properties | Queue Properties:**

| Stack Property | Description | Queue Property | Description |
| --- | --- | --- | --- |
| `top` | The first node in the Stack | `front` | The first node in the Queue. |
| \---- | Stacks do not have an equivalent | `back` | The last node in the Queue. |
| `length` | The number of nodes in the Stack; the Stack's length. | `length` | The number of nodes in the Queue; the Queue's length. |



### Stacks

- FIFO

<details>
<summary>Methods</summary>

| Type | Name | Description | Returns |
| --- | --- | --- | --- |
| Insertion | `push` | Adds a Node to the top of the Stack. | Integer - New size of stack |
| Deletion | `pop` | Removes a Node from the top of the Stack. | Node removed from top of Stack |
| Meta | `size` | Returns the current size of the Stack. | Integer |

</details>

### Queues

- LIFO

<details>
<summary>Methods</summary>

| Type | Name | Description | Returns |
| --- | --- | --- | --- |
| Insertion | `enqueue` | Adds a Node to the front of the Queue. | Integer - New size of Queue |
| Deletion | `dequeue` | Removes a Node from the front of the Queue. | Node removed from front of Queue |
| Meta | `size` | Returns the current size of the Queue. | Integer |

</details>

Time and Space Complexity Analysis
----------------------------------

| Data Structure Operation | Time Complexity (Avg) | Time Complexity (Worst) | Space Complexity (Worst) |
| --- | --- | --- | --- |
| Access | `Θ(n)` | `O(n)` | `O(n)` |
| Search | `Θ(n)` | `O(n)` | `O(n)` |
| Insertion | `Θ(1)` | `O(1)` | `O(n)` |
| Deletion | `Θ(1)` | `O(1)` | `O(n)` |