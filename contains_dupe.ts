/**
 *Given an integer array nums, return true if any 
 value appears at least twice in the array, and return 
 false if every element is distinct.

Input: nums = [1,2,3,1]

Output: true

Explanation:

The element 1 occurs at the indices 0 and 3.
 */

export const containsDuplicate = (nums: number[]) => {
  const seen = new Set<number>();
  for (const num of nums) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }
  return false;
};

const nums = [1, 2, 3, 1];
console.log(containsDuplicate(nums));
