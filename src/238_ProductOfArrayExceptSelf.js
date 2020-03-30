// https://leetcode.com/problems/product-of-array-except-self/

// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Example:

// Input:  [1,2,3,4]
// Output: [24,12,8,6]
// Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

// Note: Please solve it without division and in O(n).

// Follow up:
// Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var productExceptSelf = function(nums) {

  const length = nums.length;
  let L = new Array(length).fill(0); 
  let R = new Array(length).fill(0); 
  let answer = new Array(length).fill(0); 

  L[0] = 1;
  for (let i = 1; i < length; i++) {
    L[i] = nums[i-1] * L[i-1]
    // [1,1,2,6]
  }

  R[length - 1] = 1;
  for (let j = length - 2; j >= 0; j--) {
    R[j] = nums[j+1] * R[j+1]
    //  [24,12,4,1]  
  }

  for (let i = 0; i < length; i++) {
    answer[i] = L[i] * R[i]
    //  [24,12,8,6]
  }
return answer
};