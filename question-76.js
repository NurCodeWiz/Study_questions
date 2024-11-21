// https://leetcode.com/problems/kth-smallest-element-in-a-bst
// https://neetcode.io/problems/kth-smallest-integer-in-bst

// Kth Smallest Element In a BST
// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

// Example 1:


// Input: root = [3,1,4,null,2], k = 1
// Output: 1
const kthSmallest = (root, k) => {
	const inOrder = []; // [1,2,3,4,5,6]
	dfs(root, inOrder);
	return inOrder[k - 1]
}

const dfs (node, k, inOrder) => { //6
	if (!node) return;
	dfs(node.left, k, inOrder);
	inOrder.push(node.val);
	//optimize by decrementing k here or a copy of k return early when k  is 0
	dfs(node.right, k, inOrder);
}
