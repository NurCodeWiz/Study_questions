// https://leetcode.com/problems/kth-smallest-element-in-a-bst
// https://neetcode.io/problems/kth-smallest-integer-in-bst

// Kth Smallest Element In a BST
// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

// Example 1:


// Input: root = [3,1,4,null,2], k = 1
// Output: 1


const kthSmallest = (root, k) => {
    const inOrder = [];

    const dfs = (node) => {
        if (!node || inOrder.length >= k) return;

        dfs(node.left);

        if (inOrder.length < k) {
            inOrder.push(node.val);
        }

        dfs(node.right);
    }

    dfs(root);

    return inOrder[k - 1];
}
