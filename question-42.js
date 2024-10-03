// https://neetcode.io/problems/is-anagram
// https://leetcode.com/problems/valid-anagram/description/
// Is Anagram
// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Example 1:
// Input: s = "racecar", t = "carrace"

// Output: true

// Example 2:
// Input: s = "jar", t = "jam"

// Output: false

// Example 3:
// Input: s= "test" t = "test"
// Output: true

// Example 4:
// Input: s="" t="t"
// Output: false

// Constraints:
// s and t consist of lowercase English letters.



// Time O(n) where n is the length of a single input string
// Space O(n+n) => O(2n) => O(n) where n is the length of a single input string

const isAnagram = (s, t) => {
	if (s.length != t.length) return false
	const countS = {};
	const countT = {};
	for (let i = 0; i < s.length; i++) {
	let char1 = s[i];
	let char2 = t[i];
	countS[char1] ? countS[char1] += 1 : countS[char1] = 1;
countT[char2] ? countT[char2] += 1 : countT[char2] = 1;
}
const countSKeys = Object.keys(countS); //[r,a,c,e]
for (let i = 0; i < countSKeys.length; i++) {
	let key = countSKeys[i]; //r
	let count1 = countS[key];
	let count2 = countT[key];
	if (count1 !== count2) return false;
}
return true
}
