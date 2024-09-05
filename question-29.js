//

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
