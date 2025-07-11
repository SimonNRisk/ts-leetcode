/**
 * Given an unsorted array of integers nums, return the 
 * length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
 */

export const longestConsequtiveSequence = (nums: number[]): number => {
  const numsSet = new Set(nums);
  let longest = 0;
  for (const num of numsSet) {
    if (!numsSet.has(num - 1)) {
      let currNumber = num;
      let currStreak = 1;

      while (numsSet.has(currNumber + 1)) {
        currNumber += 1;
        currStreak += 1;
      }

      longest = Math.max(longest, currStreak);
    }
  }
  return longest;
};
