// https://leetcode.com/problems/validate-binary-search-tree/description/
// https://neetcode.io/problems/valid-binary-search-tree

// Validate Binary Search Tree
// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:
// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.


// Example 1:


// Input: root = [2,1,3]
// Output: true















// Example 2:


// Input: root = [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.


// Constraints:

// The number of nodes in the tree is in the range [1, 10^4].
// -2^31 <= Node.val <= 2^31 - 1

// node:
// .val
// .left
// .right


// Example 3:
// input = [1]
// output: true







// Example 4:
// input = root = [5,3,7,null,null,4,8]
// output: false

//   5
//  / \
// 3   7
//    / \
//   4   8
const isValidBst = (root, min=-Infinity, max=Infinity) => {
	if (root === null) return true;

	const isInvalid = (root.val <= min) || (root.val >= max);
	if (isInvalid) return false;
	return dfs(root, min, max)
}

const dfs = (root, min, max) => {
	const left = isValidBst(root.left, min, root.val);
	const right = isValidBst(root.right, root.val, max);

return left && right
}
