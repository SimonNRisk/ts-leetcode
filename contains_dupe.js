"use strict";
/**
 *Given an integer array nums, return true if any
 value appears at least twice in the array, and return
 false if every element is distinct.

Input: nums = [1,2,3,1]

Output: true

Explanation:

The element 1 occurs at the indices 0 and 3.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.containsDuplicate = void 0;
const containsDuplicate = (nums) => {
    const seen = new Set();
    for (const num of nums) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
    }
    return false;
};
exports.containsDuplicate = containsDuplicate;
const nums = [1, 2, 3, 1];
console.log((0, exports.containsDuplicate)(nums));
