/*** ===================================================================== ***\
 ** - PROBLEM ------------------------------------------------------ **
 * ========================================================================= *
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
        return [0, 1].

\*** ===================================================================== ***/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// using a Map as a cache
const twoSum = (nums, target) => {
  const cache = new Map();

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    const res = target - value;

    if (cache.has(value)) {
      return [cache.get(value), i];
    }

    cache.set(res, i);
  }
};

// using the object as a cache
const twoSum = (nums, target) => {
  const cache = {};
  for (let i = 0; i < nums.length; i += 1) {
    const value = nums[i];
    const res = target - value;

    if (cache[value] !== undefined) {
      return [cache[value], i];
    }

    cache[res] = i;
  }
};

console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]
// console.log(twoSum([3, 2, 4], 6)); // [1,2]
// console.log(twoSum([3, 3], 6));
// console.log(twoSum([2, 5, 5, 11], 10)); // [1,2]
