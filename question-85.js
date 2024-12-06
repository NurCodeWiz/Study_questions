// 29. Divide Two Integers
// Medium
// Topics
// Companies
// Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.

// The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.

// Return the quotient after dividing dividend by divisor.

// Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. For this problem, if the quotient is strictly greater than 231 - 1, then return 231 - 1, and if the quotient is strictly less than -231, then return -231.



// Example 1:

// Input: dividend = 10, divisor = 3
// Output: 3
// Explanation: 10/3 = 3.33333.. which is truncated to 3.
// Example 2:

// Input: dividend = 7, divisor = -3
// Output: -2
// Explanation: 7/-3 = -2.33333.. which is truncated to -2.


// Constraints:

// -231 <= dividend, divisor <= 231 - 1
// divisor != 0


function divide(dividend, divisor) {
    const INT_MAX = 2 ** 31 - 1;
    const INT_MIN = -(2 ** 31);

    if (divisor === 0) throw new Error("Division by zero is not allowed.");
    if (dividend === INT_MIN && divisor === -1) return INT_MAX;

    let sign = (dividend > 0) === (divisor > 0) ? 1 : -1;

    let absDividend = Math.abs(dividend);
    let absDivisor = Math.abs(divisor);

    let quotient = 0;

    while (absDividend >= absDivisor) {
        let tempDivisor = absDivisor;
        let multiple = 1;

        while (absDividend >= (tempDivisor << 1) && (tempDivisor << 1) > 0) {
            tempDivisor <<= 1;
            multiple <<= 1;
        }

        absDividend -= tempDivisor;
        quotient += multiple;
    }

    quotient = sign === 1 ? quotient : -quotient;

    return Math.min(Math.max(INT_MIN, quotient), INT_MAX);
}
