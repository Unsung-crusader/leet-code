/*** ===================================================================== ***\
 ** - PROBLEM ------------------------------------------------------ **
 * ========================================================================= *
  Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 
  An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Note that an empty string is also considered valid.

\*** ===================================================================== ***/

function isValid(brackets) {
  const openingBrackets = ['(', '{', '['];
  const closingBrackets = [')', '}', ']'];
  const matchingBrackets = { '}': '{', ')': '(', ']': '[' };

  const stack = [];

  for (let i = 0; i < brackets.length; i++) {
    const currentBracket = brackets[i];

    if (openingBrackets.includes(currentBracket)) {
      stack.push(currentBracket);
    } else {
      if (stack.length === 0) return false;

      if (stack[stack.length - 1] !== matchingBrackets[currentBracket]) {
        return false;
      }

      stack.pop();
    }
  }

  return stack.length === 0;
}
