
// 7. Reverse Integer
// Medium
// Topics
// Companies
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).



// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21


// Constraints:

// -231 <= x <= 231 - 1


const reverse = (x) => {
    let reversed = 0;
    const limit = 2 ** 31;  // 32-bit integer range

    while (x !== 0) {
        let digit = x % 10;
        x = Math.trunc(x / 10);

        // Check if reversing exceeds 32-bit bounds
        if (reversed > Math.floor((limit - 1) / 10) || (reversed === Math.floor((limit - 1) / 10) && digit > 7)) return 0;
        if (reversed < Math.ceil(-limit / 10) || (reversed === Math.ceil(-limit / 10) && digit < -8)) return 0;

        reversed = reversed * 10 + digit;
    }

    return reversed;
};
