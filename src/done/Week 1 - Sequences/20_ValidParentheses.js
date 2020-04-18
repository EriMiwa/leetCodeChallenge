https://leetcode.com/problems/valid-parentheses/

// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:

// Input: "()"
// Output: true
// Example 2:

// Input: "()[]{}"
// Output: true
// Example 3:

// Input: "(]"
// Output: false
// Example 4:

// Input: "([)]"
// Output: false
// Example 5:

// Input: "{[]}"
// Output: true

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s.length % 2 !== 0) {
      return false
  }
  
   const paren_map = {
      '(' : ')',
      '[' : ']',
      '{' : '}'
  }
  
  let stack = []
  let count = 0
  for (let paren of s) { 
    if (Object.keys(paren_map).includes(paren)) {
      count ++;
    } else {
      count --;
    }
    console.log(count)
  }
  if (count === 0) {
    return true
  }
  return false
};