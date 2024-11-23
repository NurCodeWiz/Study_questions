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
function generateParentheses(n) {
    const result = [];

    function backtrack(s, openCount, closeCount) {
        if (s.length === 2 * n) {
            result.push(s);
            return;
        }
        if (openCount < n) {
            backtrack(s + "(", openCount + 1, closeCount);
        }
        if (closeCount < openCount) {
            backtrack(s + ")", openCount, closeCount + 1);
        }
    }

    backtrack("", 0, 0);
    return result;
}

console.log(generateParentheses(3)); // ["((()))", "(()())", "(())()", "()(())", "()()()"]
