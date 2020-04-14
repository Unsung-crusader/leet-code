/**
  Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 */

function maxSubArray(nums) {
  if (nums.length === 1) return nums[0];

  let maxSum = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    let prev = nums[i];
    maxSum = Math.max(prev, maxSum);
    
    for (let j = i; j < nums.length - 1; j++) {
      prev += nums[j + 1];
      maxSum = Math.max(prev, maxSum);
    }
  }

  return maxSum;
}

/** using kandane's algorithm O(N) */
function maxSubArray(nums) { 
  if (!nums || !nums.length) return 0;
  if (nums.length === 1) return nums[0];

  let maxSum = sumSoFar = nums[0];

  for (let i = 1; i < nums.length; i++) { 
    sumSoFar = Math.max(nums[i], sumSoFar + nums[i]);
    maxSum = Math.max(maxSum, sumSoFar);
  }

  return maxSum;
}
 

// console.log(maxSubArray([1, 2, 3]))
// console.log(maxSubArray([-2, 1]));
// console.log(maxSubArray([-1, -2]));
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));