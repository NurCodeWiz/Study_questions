// 3070. Count Submatrices with Top-Left Element and Sum Less Than k
// Medium
// Topics
// Companies
// You are given a 0-indexed integer matrix grid and an integer k.

// Return the number of
// submatrices
//  that contain the top-left element of the grid, and have a sum less than or equal to k.



// Example 1:


// Input: grid = [[7,6,3],[6,6,1]], k = 18
// Output: 4
// Explanation: There are only 4 submatrices, shown in the image above, that contain the top-left element of grid, and have a sum less than or equal to 18.
// Example 2:


// Input: grid = [[7,2,9],[1,5,0],[2,6,6]], k = 20
// Output: 6
// Explanation: There are only 6 submatrices, shown in the image above, that contain the top-left element of grid, and have a sum less than or equal to 20.


// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= n, m <= 1000
// 0 <= grid[i][j] <= 1000
// 1 <= k <= 109

function countSubmatricesWithSum(grid, k) {
    const m = grid.length;
    const n = grid[0].length;


    const prefixSum = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));


    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            prefixSum[i][j] = grid[i - 1][j - 1]
                            + prefixSum[i - 1][j]
                            + prefixSum[i][j - 1]
                            - prefixSum[i - 1][j - 1];
        }
    }

    let count = 0;


    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {

            const submatrixSum = prefixSum[i][j];
            if (submatrixSum <= k) {
                count++;
            }
        }
    }

    return count;
}
