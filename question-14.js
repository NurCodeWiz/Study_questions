// 125. Valid Palindrome
// Easy
// Topics
// Companies
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.



// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.


// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.
function isPalindrome(s) {
    // Normalize the string: convert to lowercase and remove non-alphanumeric characters
    let normalizedStr = '';
    for (let i = 0; i < s.length; i++) {
        let char = s[i].toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            normalizedStr += char;
        }
    }

    // Check if the normalized string is the same forwards and backwards
    let left = 0;
    let right = normalizedStr.length - 1;

    while (left < right) {
        if (normalizedStr[left] !== normalizedStr[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}


console.log(isPalindrome("A man, a plan, a canal: Panama"));  // Output: true
console.log(isPalindrome("race a car"));                      // Output: false
console.log(isPalindrome(" "));                               // Output: true
