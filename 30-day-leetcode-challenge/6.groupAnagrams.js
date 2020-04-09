/**
  Given an array of strings, group anagrams together.
 */

function groupAnagrams(strs) {
  const anagramIdxBag = {};
  for (let i = 0; i < strs.length; i++) { 
    const splittedStr = strs[i].split('').sort().join('');
    if (splittedStr in anagramIdxBag) {
      anagramIdxBag[splittedStr].push(strs[i]);
    } else { 
      anagramIdxBag[splittedStr] = [strs[i]];
    }
  }
  
  const anagramsGroup = [];
  for (let key in anagramIdxBag) {
    anagramsGroup.push(anagramIdxBag[key]);
  }

  return anagramsGroup
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));