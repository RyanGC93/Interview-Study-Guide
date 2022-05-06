/*********************************************************************
Write a function, minChange(coins, amount), that accepts an array of coin values
and a target amount as arguments. The method should the minimum number of coins
needed to make the target amount. A coin value can be used multiple times.

Solve this with memoization first, and then try a tabulated version.

Examples:

minChange([1, 2, 5], 11)         // => 3, because 5 + 5 + 1 = 11
minChange([1, 4, 5], 8))         // => 2, because 4 + 4 = 8
minChange([1, 5, 10, 25], 15)    // => 2, because 10 + 5 = 15
minChange([1, 5, 10, 25], 100)   // => 4, because 25 + 25 + 25 + 25 = 100
*********************************************************************/

function minChange(coins, amount, memo = {}) {
  // your code here
}

module.exports = { minChange };
