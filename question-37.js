// https://neetcode.io/problems/surrounded-regions
// https://leetcode.com/problems/surrounded-regions

// You are given a 2-D matrix board containing 'X' and 'O' characters.

// If a continuous, four-directionally connected group of 'O's is surrounded by 'X's, it is considered to be surrounded.

// Change all surrounded regions of 'O's to 'X's and do so in-place by modifying the input board.

// Example 1:



// Input: board = [
//   ["X","X","X","X"],
//   ["X","O","O","X"],
//   ["X","O","O","X"],
//   ["X","X","X","O"]
// ]

// Output: [
//   ["X","X","X","X"],
//   ["X","X","X","X"],
//   ["X","X","X","X"],
//   ["X","X","X","O"]
// ]
// Explanation: Note that regions that are on the border are not considered surrounded regions.

// Constraints:

// 1 <= board.length, board[i].length <= 200
// board[i][j] is 'X' or 'O'.



// Example 2:

// Input: board = [
//   ["O","O","O"],
//   ["O","X","O"],
//   ["O","O","O"],
// ]

// Output: board = [
//   ["O","O","O"],
//   ["O","X","O"],
//   ["O","O","O"],
// ]

// Example 3:

// Input: board = [
//   ["O","X","O"],
//   ["X","O","X"],
//   ["O","X","O"],
// ]

// Output: board = [
//   ["O","X","O"],
//   ["X","X","X"],
//   ["O","X","O"],
// ]

// Example 4:

// Input: board = [
//   ["X","X","X"],
//   ["X","O","X"],
//   ["X","O","O"],
//   ["X","X","X"]
// ]

// Output: board = [
//   ["X","X","X"],
//   ["X","O","X"],
//   ["X","O","O"],
//   ["X","X","X"]
// ]

// Approach: Nested for loop (exclude the edges) DFS the Os and get all their connected neighbors. If we find one that hits the edge then we know not to change the Os and leave them alone, otherwise we flip them. Keep track of visited.

// O(n*m) Time
// O(n*m) Space


const solve = board => {
	const ROWS = board.length;
	if (ROWS === 0) return;
	const COLS = board[0].length;

	//Mark Os connected to the border
	for (let r = 0; r < ROWS; r++) {
	for (let c = 0; c < COLS; c++) {
	if(board[r][c] === 'O' && (r === 0 || c === 0 || r === ROWS-1 || c === COLS-1)) {
	dfs(board, r, c)
}
}
}

//Mark Os not connected to the border
for (let r=0; r < ROWS; r++) {
	for (let c=0; c < COLS; c++) {
	if (board[r][c] === 'O') board[r][c] = 'X'
}
}

//Flip connected Os on the border back again
for (let r=0; r < ROWS; r++) {
	for (let c=0; c < COLS; c++) {
	if (board[r][c] === 'T') board[r][c] = 'O'
}
}

}


const dfs = (board, r, c) {
	const ROWS = board.length;
const COLS = board[0].length;
	if (r < 0 || c < 0 || r === ROWS - 1 || c === COLS - 1 || board[r][c] !== 'O') {
	return;
}
board[r][c] = 'T';
dfs(board, r+1, c);
dfs(board, r-1, c);
dfs(board, r, c+1);
dfs(board, r, c-1);
}
