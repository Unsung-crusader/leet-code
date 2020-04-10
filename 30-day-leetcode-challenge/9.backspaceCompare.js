/**
  Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.
 */
function removeCharactersBeforeBackspace(str) { 
  const stack = [];
  for (let char of str) {
    if (char === '#') stack.pop();
    else stack.push(char);
  }
  return stack.join('');
}

function backspaceCompare(s, t) {
  return removeCharactersBeforeBackspace(s) === removeCharactersBeforeBackspace(t);
}

console.log(backspaceCompare("a##c", "#a#c"));