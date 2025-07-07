"use strict";
/**
 * Given an array nums containing n distinct numbers in the range [0, n],
 *  return the only number in the range that is missing from the array.

Example 1:

Input: nums = [3,0,1]

Output: 2

Explanation:

n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.missingNum = void 0;
const missingNum = (nums) => {
    const numbers = new Set();
    for (const num of nums) {
        numbers.add(num);
    }
    for (let i = 0; i < nums.length + 1; i++) {
        if (!numbers.has(i)) {
            return i;
        }
    }
    return -1;
};
exports.missingNum = missingNum;
const nums = [3, 0, 1];
console.log((0, exports.missingNum)(nums));
