/**
  Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 */

function moveZeroes(nums) {
  let zerosCount = 0;
  const nonZeros = [];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (!num) zerosCount++;
    else nonZeros.push(nums[i]);
  }
  for (let i = 0; i < nums.length; i++) { 
    if (nonZeros[i]) {
      nums[i] = nonZeros[i];
    } else {
      nums[i] = 0;
      zerosCount--;
    }
  }
}

let Input = [0, 1, 0, 3, 12];
moveZeroes(Input);
console.log(Input)
// let Input1 = [0, 0, 1]
// moveZeroes(Input1);
// console.log(Input1);