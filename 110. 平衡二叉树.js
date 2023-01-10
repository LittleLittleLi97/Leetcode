/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    function getHeight(root) {
        if (root === null) return 0;
        return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
    }
    function DFS(root) {
        if (!root) return true;
        const leftHeight = getHeight(root.left);
        const rightHeight = getHeight(root.right);
        return Math.abs(leftHeight - rightHeight) <= 1 && DFS(root.left) && DFS(root.right);
    }
    return DFS(root);
};