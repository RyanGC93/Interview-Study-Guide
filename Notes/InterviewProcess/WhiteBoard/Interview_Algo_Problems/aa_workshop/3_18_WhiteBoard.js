Prompt: 

Create some function productArray that accepts an array nums as an argument and returns a new array prods of length nums.length such that the item at each index in prods represents the product of all numbers in nums except for the number at that index in nums. 





CQ:
Have zeros? Yes
>1 Zero: YES
	Max length of nums? 10
	Max value in nums? 9
	Can have negative? yes 
	Min value? - 9
	Can eles in nums be other things? YES
	Can we use built functions of JS? yes 
	If non num, than return dancingBanana.gif
	
	I/Os:
	[1,2,3] => [6,3,2] valid
	[null, 1, 2] => dancingBanana.gif
	[-1, -2, 3]  => [-6, -3, 2] 
	[1,2,0] => [0,0,2]
	[] => []
	[1] => [1]
	[0, 0, 1, 2] => [0,0,0,0]
	 
	Approaches:
	Check for edges. Prod of all nums, then divide. (Time: n)
Concerns: zero:
Sort, then grab prods of all nums before and all after (Time: nlogn)
Nested loops (Time: n^2)

	PC:
	1.	Declare Funct
	2. 	Check edges:
	Nums.length ?
		3. 	Declare Vars:
		-	let zeroPresent: false;
	- 	let res: [];
	-	let prod = 1;
	Loop over nums
	Check if num?
	If not => dancingBanana.gif
	Check if num is zero && if zeroPresent
	Return new Array(nums.length).fill(0)
	Iif num is zero &&  !zeroPresent => zeroPresent = true;
	continue 
	If not zero:
		Prod => prod * num
	
	Loop over num (again)(stay in bounds)
	If num !== 0 && !zeroPresnt:
	res.Push(prod/num)
	If num !== 0 && zeroPresnt:
	res.Push(0)
	If num === 0
	res.Push(prod)
	Return res 
	
	
	loop nums
	Do thing
	Other things
	 whatever
	

	
	
	const productArray = (nums) => {
	                 
	}
	
