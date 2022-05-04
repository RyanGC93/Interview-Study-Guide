/*


*/

var lengthOfLongestSubstring = function(s) {
    let max = 0; // max length of substring
    let current = 0; // current length of substring
    let map = {}; // map of chars to their index
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {    // if char is in map
            current = Math.max(current, i - map[s[i]]); // update current length
        }
        max = Math.max(max, i - current + 1); // update max length
        map[s[i]] = i;
    }
    return max;
}