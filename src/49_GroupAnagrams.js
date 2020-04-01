// Given an array of strings, group anagrams together.

// Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Note:

// All inputs will be in lowercase.
// The order of your output does not matter.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let map = {};

  for (let i = 0; i < strs.length; i++) {
    let targetWord = strs[i].split('').sort().join(',')
    if(!map[targetWord]) {
      map[targetWord] = []
  }
    map[targetWord].push(strs[i]) 
  }
return Object.values(map)
};