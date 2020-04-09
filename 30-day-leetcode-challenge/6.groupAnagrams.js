/**
  Given an array of strings, group anagrams together.
 */

function groupAnagrams(strs) {
  const anagramBag = {};
  for (let i = 0; i < strs.length; i++) { 
    const splittedStr = strs[i].split('').sort().join('');
    if (splittedStr in anagramBag) {
      anagramBag[splittedStr].push(strs[i]);
    } else { 
      anagramBag[splittedStr] = [strs[i]];
    }
  }

  const anagramsGroup = [];
  for (let key in anagramBag) {
    anagramsGroup.push(anagramBag[key]);
  }

  return anagramsGroup
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));