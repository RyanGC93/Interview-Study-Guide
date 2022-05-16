# Problem Solving Patterns

<details>
<summary>Overview</summary>

**Common Patterns**
- [Frequency Counter]()
- [Multiple Pointers]()
- [Fast and Slow Pointers]()
- [Sliding Window]()
- [Divide And Conquer]()
- [Greedy Algorithms]() 
- [Backtracking]()

**Resources**
1. [14 Interview Coding Patterns](https://hackernoon.com/14-patterns-to-ace-any-coding-interview-question-c5bb3357f6ed)

</details>

## Frequency Counter

<details>
<summary style="text-decoration: underline;">Overview</summary>

- This pattern uses objects or sets to collect values and their frequencies.
- This can often avoid the need for nested loops or O(n^2) runtime with arrays/strings.
- This pattern is useful for finding the most common value in an array or string.

</details>

<details>
<summary style="text-decoration: underline;">Code</summary>

<details>
<summary style="text-indent: 20px;">Naive Approach</summary>

```js
function same(arr1, arr2) {
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1) {
            return false;
        }
        console.log(arr2);
        arr2.splice(correctIndex,1)
    }
    return true;
}

same([1,2,3,2], [9,1,4,4])
```

</details>

<details>
<summary style="text-indent: 20px;">Refactored</summary>

```js
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

same([1,2,3,2,5], [9,1,4,4,11])

```

</details>
</details>

---

### Multiple Pointers

<details>
<summary>Overview</summary>

- creating pointers or values that correspond to the index of the array or position and move towards the beginning,middle, or end of the array.
- Very efficient for solving problems with minimal space complexity.
- **Big O:** Time Complexity **O(n)**, Space Complexity **O(1)**

</details>
<details>
<summary style="text-decoration: underline;">Code</summary>

<details>
<summary style="text-indent: 20px;">Naive Approach</summary>

```js
function sumZero(arr) {
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
    // Time Complexity: O(n^2)
    // Space Complexity: O(1)
```

</details>

<details>
<summary style="text-indent: 20px;">Refactored</summary>

```js
function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]];  
        } else if(sum > 0){
            right--;
        } else {
            left++;
        }
    }
    return null;
}
```

</details>
</details>

---

## Sliding Window

<details>
<summary>Overview</summary>

- This pattern involves creating a window of a certain size and moving the window forward and backward through the array.
- Depending on the problem, the window may or may not need to be moved.
- Very useful for keeping track of a subset of data in an array.


[Article](https://medium.com/@timpark0807/leetcode-is-easy-sliding-window-c44c11cc33e1)
</details>
<details>
<summary style="text-decoration: underline;">General Parts</summary>

3 Key Steps
-----------

The Sliding Window boils down to 3 key steps.

1.  Expand our window
2.  Meet the condition and process the window
3.  Contract our window

3 Key Variables
-----------

The Sliding Window boils down to 3 key steps.

1.  Window Bounds
2.  Track Condition
3.  Return Value

</details>

<details>
<summary style="text-decoration: underline;">Code</summary>

<details>
<summary style="text-indent: 20px;">Naive Approach</summary>

```js
function maxSubarraySum(arr, num) {
  if ( num > arr.length){
    return null;
  }
  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i ++){
    temp = 0;
    for (let j = 0; j < num; j++){
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

maxSubarraySum([2,6,9,2,1,8,5,6,3],3)
```

</details>

<details>
<summary style="text-indent: 20px;">Refactored</summary>

```js
function maxSubarraySum(arr, num){
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

maxSubarraySum([2,6,9,2,1,8,5,6,3],3)
```

</details>
</details>

---

### Divide And Conquer

<details>
<summary>Overview</summary>

- This pattern involves breaking down a problem into smaller subproblems and solving each subproblem recursively.
- This pattern can tremendously decrease the runtime of a problem.
  
[Divide And Conquer](https://medium.com/swlh/divide-and-conquer-6d18386a31d)

The Divide and Conquer technique can be understood as three parts :

1.  **Divide —**Dividing the problem into sub-problems
2.  **Conquer —** Conquering the sub-problems by solving them recursively.
3.  **Combine —** Combining all the solutions to sub-problems and merging them into solution of our original problem.

Examples:
- Merge Sort
- Binary Search
- Quick Sort

</details>
<details>
<summary style="text-decoration: underline;">Code</summary>

<details>
<summary style="text-indent: 20px;">Naive Approach</summary>

```js
function search(arr, num) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === num){
            return i;
        }
    }
    return -1;
}
// Time Complexity: O(n)
```

</details>

<details>
<summary style="text-indent: 20px;">Refactored</summary>

```js
function search(arr, num){
    let min = 0;
    let max = arr.length - 1;
    while(min <= max){
        let mid = Math.floor((min + max) / 2);
        let currentNum = arr[mid];
        if (currentNum < num){
            min = mid + 1;
        } else if (currentNum > num){
            max = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}
// Time Complexity: O(log n)
```

</details>
</details>

---

### Greedy Algorithms

<details>
<summary>Overview</summary>

The algorithms can be used if they satisfy the following conditions:
1. Greedy Choice Property - The algorithm will always choose the best option available at each step.
2. Optimal Substructure Property - The algorithm will always choose the best option available at each step.

Advantages:
- The algorithm is easier to describe
- This algorithm can be faster than other algorithms
  
</details>
<details>
<summary style="text-decoration: underline;">Code</summary>

<details>
<summary style="text-indent: 20px;">Example</summary>

```js
let testMoney = 6.27;

let bills = {
	hundredDollar: 100.0,
	tenDollar: 10.0,
	fiveDollar: 5.0,
	oneDollar: 1.0,
	quarter: 0.25,
	dime: 0.1,
	nickel: 0.05,
	penny: 0.01
}

let FindingChange = (currency, amount) => {

	//ResultBill is all the bill types and amount of bills we are returning
	let resultBills = {};
	let cashLeftover = amount;

	//We are checking from the highest bill first to the lowest
	for (let key in currency)
	{
		//While amount leftover is greater than our current bill
		//we take and subtract it based on the bill's value
		while (cashLeftover >= currency[key])
		{
			//Checking to see if the bill type already exist in our return hash.
			if (resultBills[key])
			{   //If it does, we increment the bill by one.
				resultBills[key] += 1;
			}   
			else
			{   //if it doesn't, we add the new key/value pair into the hash.
				resultBills[key] = 1;
			}
			//Then we subtract the value from the leftover cash.
			//toFixed(2), this is for fixing any float point errors that JavaScript have.
			//The 2 is to fix it for 2 decimal point.
			cashLeftover = (cashLeftover - currency[key]).toFixed(2)
		}
	}
	return resultBills;
}

FindingChange(bills, testMoney);
// Time Complexity: O(n)
```

</details>
</details>