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

const isValidBST = (root, min=-Infinity, max=Infinity) => {
	if (root === null) return true;

if((root.val <= min) || (root.val >= max)) return false;

return dfs(root, min, max);
}

const dfs = (root, min, max) => {
	const leftIsValid = isValidBST(root.left, min, root.val);
	const rightIsValid = isValidBST(root.right, root.val, max)
	return leftIsValid && rightIsValid
}
