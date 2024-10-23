// 424. Longest Repeating Character Replacement
// Medium
// Topics
// Companies
// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.



// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.
// Example 2:

// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.
// There may exists other ways to achieve this answer too.


// Constraints:

// 1 <= s.length <= 105
// s consists of only uppercase English letters.
// 0 <= k <= s.length

var characterReplacement = function(s, k) {
    let left = 0;
    let maxCount = 0;
    let maxLength = 0;
    let freqMap = {};

    for (let right = 0; right < s.length; right++) {
        let char = s[right];
        freqMap[char] = (freqMap[char] || 0) + 1;
        maxCount = Math.max(maxCount, freqMap[char]);

        while (right - left + 1 - maxCount > k) {
            freqMap[s[left]]--;
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};
