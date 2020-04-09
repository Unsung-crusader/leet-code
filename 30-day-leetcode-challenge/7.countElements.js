/**
  Given an integer array arr, count element x such that x + 1 is also in arr.
  If there're duplicates in arr, count them seperately.
 */

 /** naive approach */
// function countElements(arr) { 
//   let numCounts = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr.includes(arr[i] + 1)) numCounts++;
//   }
//   return numCounts;
// }

function countElements(arr) { 
  let cache = {};
  for (let i = 0; i < arr.length; i++) { 
    cache[arr[i]] = i;
  }

  let numCounts = 0;
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] + 1) in cache) numCounts++;
  }

  return numCounts;
}

console.log(countElements([1, 3, 2, 3, 5, 0])); // 3