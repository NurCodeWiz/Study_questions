// https://neetcode.io/problems/duplicate-integer
// https://leetcode.com/problems/contains-duplicate/description/
// Duplicate Integer

// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

// Example 1:
// Input: nums = [1, 2, 3, 3]

// Output: true

// Example 2:
// Input: nums = [1, 2, 3, 4]

// Output: false


const hasDuplicate = nums => {
	const dup = {}; // {1:true, 2:true, 3:true}
	for (let i = 0; i < nums.length; i++) {
	let num = nums[i] //3
	if (dup[num]) return true;
	dup[num] = true;
}
return false;
}
