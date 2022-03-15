// [136] Single Number  

// https://leetcode.com/problems/single-number/description/

// * algorithms
// * Easy (68.35%)
// * Total Accepted:    1.5M
// * Total Submissions: 2.1M
// * Testcase Example:  '[2,2,1]'

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

//  
// Example 1:
// Input: nums = [2,2,1]
// Output: 1
// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:
// Input: nums = [1]
// Output: 1

//  
// Constraints:


// 	1 <= nums.length <= 3 * 10^4
// 	-3 * 10^4 <= nums[i] <= 3 * 10^4
// 	Each element in the array appears twice except for one element which appears only once.

function singleNumber(nums: number[]): number {
    let currentVal
    nums.sort().some((num, i) => {
        if (num && (i % 2 === 0)) {
            currentVal = num
            return num !== nums[i+1]
        }
    })
    return currentVal
};
