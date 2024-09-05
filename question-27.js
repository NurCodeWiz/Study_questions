// https://leetcode.com/problems/binary-tree-maximum-path-sum/
// https://neetcode.io/problems/binary-tree-maximum-path-sum

// Binary Tree Max Path Sum

// A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

// The path sum of a path is the sum of the node's values in the path.

// Given the root of a binary tree, return the maximum path sum of any non-empty path.



// Example 1:


// Input: root = [1,2,3]
// Output: 6
// Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.

const maxPathSum = (root) => {
    let maxSum = -Infinity;

    const dfs = (node) => {
        if (!node) return 0;

        let leftMax = Math.max(dfs(node.left), 0);
        let rightMax = Math.max(dfs(node.right), 0);

        let currentMax = node.val + leftMax + rightMax;

        maxSum = Math.max(maxSum, currentMax);

        return node.val + Math.max(leftMax, rightMax);
    };

    dfs(root);
    return maxSum;
};
