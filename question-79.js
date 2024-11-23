// 226. Invert Binary Tree
// Easy
// Topics
// Companies
// Given the root of a binary tree, invert the tree, and return its root.



// Example 1:


// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]
// Example 2:


// Input: root = [2,1,3]
// Output: [2,3,1]
// Example 3:

// Input: root = []
// Output: []


// Constraints:

// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function arrayToTree(arr, index = 0) {
    if (index >= arr.length || arr[index] === null) return null;
    const root = new TreeNode(arr[index]);
    root.left = arrayToTree(arr, 2 * index + 1);
    root.right = arrayToTree(arr, 2 * index + 2);
    return root;
}

function treeToArray(root) {
    if (!root) return [];
    const result = [];
    const queue = [root];
    while (queue.length) {
        const node = queue.shift();
        if (node) {
            result.push(node.val);
            queue.push(node.left, node.right);
        } else {
            result.push(null);
        }
    }
    while (result[result.length - 1] === null) {
        result.pop();
    }
    return result;
}

const root = arrayToTree([4, 2, 7, 1, 3, 6, 9]);
const inverted = invertTree(root);
console.log(treeToArray(inverted)); // Output: [4, 7, 2, 9, 6, 3, 1]
