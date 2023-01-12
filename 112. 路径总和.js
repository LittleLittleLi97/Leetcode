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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    let out = false;
    function DFS(root, now) {
        if (!root || out) return;
        now += root.val;
        if (!root.left && !root.right && now === targetSum) {
            out = true;
            return;
        }
        DFS(root.left, now);
        DFS(root.right, now);
    }
    DFS(root, 0);
    return out;
};