
// https://leetcode.com/problems/number-of-islands/description/
// https://neetcode.io/problems/count-number-of-islands

// Num Islands

// Given an m x n 2D binary grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:
// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1

// Example 2:
// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3


// Constraints:
// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 300
// grid[i][j] is '0' or '1'.

// Example 3:
// Input: grid = [[]]
// Output: 0

// Example 4:
// Input: grid = [[1]]
// Output: 1

// Example 5:
// Input: grid = [[0]]
// Output: 0

// Approach: Iterate over the grid using nested for loop. When we encounter a 1 we dfs/bfs to get all of it's neighbors. We mark all these nodes as visited as we go along. Once we've dfsed the entire landmass, then we update our count by 1 and we continue our iteration skipping over zeros and already visited nodes. Return count at the end.


// Time O(n*m)
// Space O(n*m)
const numIslands = grid => {
	const visited = {};
	let count = 0;
	for (let i = 0; i < grid.length; i++) {
	for (let j = 0; j < grid[i].length; j++) {
	let currSquare = grid[i][j];
	if (visited[`${i}${j}`] || curSquare === 0) continue
	dfs(i,j, grid, visited);
	count += 1;
}
}
return count;
}

const dfs = (i, j, grid, visited) => {
	const stack = [[i,j]];
	while(stack.length) {
	let [x, y] = stack.pop();
	if (visited[`${x}${y}`]) continue;
	visited[`${x}${y}`] = true;
	let neighbors = getValidNeighbors(x, y, grid, visited);
	stack.push(...neighbors);
}
}
