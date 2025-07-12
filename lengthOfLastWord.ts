/**
 * Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

 

Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.

 */

export const lenLastWord = (s: string): number => {
  const splitArr = s.trim().split(" ");
  console.log(splitArr);
  return splitArr[splitArr.length - 1].length;
};

const s = "Hello World";
console.log(lenLastWord(s));
const s2 = "   fly me   to   the moon  ";
console.log(lenLastWord(s2));
