// https://leetcode.com/problems/pacific-atlantic-water-flow/description/
// https://neetcode.io/problems/pacific-atlantic-water-flow

// Pacific Atlantic Water Flow
// There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.

// The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).

// The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.

// Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.

// Approach:
// Create two hashmaps to keep track of nodes connecting to the pacific and atlantic oceans respectively
// Iterate over the borders of the input and DFS the border nodes inwardly while adding these coords to the list of nodes that can reach their ocean.
// After we've marked all the nodes that can reach their respective oceans, we'll do one more pass over and add coords to our output that exist in both hashmaps and therefore can reach both oceans.







Heights =[

[1,2,2,3,5],
[3,2,3,4,4],
[2,4,5,3,1],
[6,7,1,4,5],
[5,1,1,2,4]

]



const pacificAtlantic = heights => {
	const ROWS = heights.length;
	const COLS = heights[0].length;
	const pacific = new Set();
	const atlantic = new Set();

	for (let i = 0; i < ROWS; i++) {
	//DFS the first col and last col
	dfs(i,0, pacific, heights[i][0], ROWS, COLS, heights)

	dfs(i, COLS - 1, atlantic, heights[i][COLS - 1], ROWS, COLS, heights)
}
for (let j = 0; j < COLS; j++) {
	//DFS top row
	dfs(0, j, pacific, heights[i][0], ROWS, COLS, heights)
	//DFS bottom row
	dfs(ROWS-1, j, atlantic, heights[i][COL-1], ROWS, COLS, heights)
}

const res = [];
for (let i = 0; i < ROWS; i++) {
	for (let j = 0; j < COLS; j++) {
	let coord = `${i}${j}`
	if (pacific.has(coord) && atlantic.has(coord)) {
	res.push([i,j])
}

}
}
return res;
}












const dfs = (r, c, visited, prevHeight, ROWS, COLS, heights) => {
	const coord = `${r}{c}`;
	if(r < 0 || c < 0 || r === ROWS || c === COLS || heights[r][c] < prevHeight || visited.has(coord)) {
	return;
}
visited.add(coord);
dfs(r+1, c, visited, heights[r][c], ROWS, COLS, heights);
dfs(r-1, c, visited, heights[r][c], ROWS, COLS, heights);
dfs(r, c+1, visited, heights[r][c], ROWS, COLS, heights);
dfs(r, c-1, visited, heights[r][c], ROWS, COLS, heights);
}
