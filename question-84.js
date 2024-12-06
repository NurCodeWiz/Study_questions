// 17. Letter Combinations of a Phone Number
// Medium
// Topics
// Companies
// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.




// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:

// Input: digits = ""
// Output: []
// Example 3:

// Input: digits = "2"
// Output: ["a","b","c"]


// Constraints:

// 0 <= digits.length <= 4
// digits[i] is a digit in the range ['2', '9'].

function letterCombinations(digits) {
    if (!digits.length) return [];

    const phoneMap = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    };

    const result = [];

    function backtrack(index, current) {
        if (index === digits.length) {
            result.push(current.join(''));
            return;
        }

        for (const letter of phoneMap[digits[index]]) {
            current.push(letter);
            backtrack(index + 1, current);
            current.pop();
        }
    }

    backtrack(0, []);
    return result;
}


console.log(letterCombinations("23")); // ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
console.log(letterCombinations("")); // []
console.log(letterCombinations("2")); // ["a", "b", "c"]
