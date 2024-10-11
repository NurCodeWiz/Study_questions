// 1496. Path Crossing
// Easy
// Topics
// Companies
// Hint
// Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively. You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.

// Return true if the path crosses itself at any point, that is, if at any time you are on a location you have previously visited. Return false otherwise.



// Example 1:


// Input: path = "NES"
// Output: false
// Explanation: Notice that the path doesn't cross any point more than once.
// Example 2:


// Input: path = "NESWW"
// Output: true
// Explanation: Notice that the path visits the origin twice.


// Constraints:

// 1 <= path.length <= 104
// path[i] is either 'N', 'S', 'E', or 'W'.

function isPathCrossing(path) {
    let visited = new Set();
    let x = 0, y = 0;
    visited.add(`${x},${y}`);

    for (let direction of path) {
        if (direction === 'N') {
            y += 1;
        } else if (direction === 'S') {
            y -= 1;
        } else if (direction === 'E') {
            x += 1;
        } else if (direction === 'W') {
            x -= 1;
        }

        const currentPosition = `${x},${y}`;
        if (visited.has(currentPosition)) {
            return true;
        }

        visited.add(currentPosition);
    }

    return false;
}
