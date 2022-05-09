/* Given a string s, return the longest palindromic substring in s. 

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"

*/

var longestPalindrome = function(s) {
    let maxPal = '';
    
    for(let i = 0; i < s.length; i++) { // loop through the string where index ==- center of the palindrome
        bubble(i, i); // odd palindrome
        bubble(i, i+1); // even palindrome
    }
    
    function bubble(left, right) {

        while(left >= 0 && s[left] === s[right]) {  // while the left and right indexes are in the string
            left--;
            right++;
        }
        left++;  // left is now the first index of the palindrome
        right--; // right is now the last index of the palindrome
        
        if(maxPal.length < right-left+1) { // if the length of the palindrome is greater than the current max
            maxPal = s.slice(left, right+1)
        }
    }
    return maxPal;
};

// Time: O(n^2) - looping through the string and bubbling through the palindromes
// Space: O(1) because we are not creating any new data structures