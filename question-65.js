// 22. Generate Parentheses
// Medium
// Topics
// Companies
// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.



// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]


// Constraints:

// 1 <= n <= 8

function generateParenthesis(n) {
    let result = [];

    function backtrack(current, open, close) {
        if (current.length === n * 2) {
            result.push(current);
            return;
        }

        if (open < n) {
            backtrack(current + "(", open + 1, close);
        }
        if (close < open) {
            backtrack(current + ")", open, close + 1);
        }
    }

    backtrack("", 0, 0);
    return result;
}

// Example usage:
console.log(generateParenthesis(3)); // Output: ["((()))","(()())","(())()","()(())","()()()"]
console.log(generateParenthesis(1)); // Output: ["()"]
