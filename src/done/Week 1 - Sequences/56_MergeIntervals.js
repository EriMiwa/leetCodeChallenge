// Given a collection of intervals, merge all overlapping intervals.

// Example 1:

// Input: [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:

// Input: [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  if(!intervals.length) return intervals
  intervals.sort((a,b) => a[0]-b[0]);
  
  let previous = intervals[0];
  let result = [previous];
  
  for (let current of intervals) {
    if(previous[1] >= current[0]) {
      previous[1] = Math.max(previous[1], current[1]);
    } else {
      result.push(current);
      previous = current;
    }
  }
  return result
};