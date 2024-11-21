// https://leetcode.com/problems/kth-smallest-element-in-a-bst
// https://neetcode.io/problems/kth-smallest-integer-in-bst

// Kth Smallest Element In a BST
// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

// Example 1:


// Input: root = [3,1,4,null,2], k = 1
// Output: 1
const kthSmallest = (root, k) => {
    let count = 0;
    let result = null;

    const dfs = (node) => {
        if (!node || result !== null) return;
        dfs(node.left);
        count++;
        if (count === k) {
            result = node.val;
            return;
        }
        dfs(node.right);
    };

    dfs(root);
    return result;
};
