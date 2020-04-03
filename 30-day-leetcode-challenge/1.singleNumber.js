/**
  Given a non-empty array of integers, every element appears twice except for one. Find that single one.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
  let visited = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    visited[num] = visited[num] ? false : true;
  }
  const keys = Object.keys(visited);
  for(let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (visited[key] === true) return key;
  }
}
// 56 ms, faster than 83.98% of JavaScript online submissions for Single Number.

// function singleNumber(nums) {
//   let a = 0;
//   for (let i = 0; i < nums.length; i++) {
//     a ^= nums[i];
//   }
//   return a;
// }
// Runtime: 52 ms, faster than 94.13% of JavaScript online submissions for Single Number.

console.log(singleNumber([4, 1, 2, 1, 2]))