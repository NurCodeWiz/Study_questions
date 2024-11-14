// 5. Longest Palindromic Substring
// Medium
// Topics
// Companies
// Hint
// Given a string s, return the longest
// palindromic

// substring
//  in s.



// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"


// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.

function longestPalindrome(s) {
    if (s.length <= 1) return s;

    let start = 0;
    let end = 0;

    for (let i = 0; i < s.length; i++) {
        let len1 = expandFromCenter(s, i, i);        // Odd length palindrome
        let len2 = expandFromCenter(s, i, i + 1);    // Even length palindrome
        let len = Math.max(len1, len2);

        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }

    return s.substring(start, end + 1);
}

function expandFromCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return right - left - 1;
}
