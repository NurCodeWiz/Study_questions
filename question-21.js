// https://leetcode.com/problems/maximum-depth-of-binary-tree/
// https://neetcode.io/problems/depth-of-binary-tree

// Max Depth Binary Tree
// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: 3

// Example 2:
// Input: root = [1,null,2]
// Output: 2

// Constraints:
// The number of nodes in the tree is in the range [0, 10^4].
// -100 <= Node.val <= 100

// Example 3:
// Input: root = [];
// Output: 0;

// Example 4:
// Input: root = [3]
// Output: 1


const maxDepth = root => {
	let max = 0;
	if (!root) return max;
	const stack = [[root, 1]];
	while(stack.length) {
		let [node, depth] = stack.pop();
		max = Math.max(max, depth);
		if (node.left) stack.push([node.left, depth+1]);
		if (node.right) stack.push([node.right, depth+1]);
}
return max;
}
