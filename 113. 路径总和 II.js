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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    const out = [];
    const path = [];
    function DFS(root, now) {
        if (!root) return;
        now += root.val;
        path.push(root.val);
        if (!root.left && !root.right && now === targetSum) {
            out.push(path.concat());
        }
        DFS(root.left, now);
        DFS(root.right, now);
        path.pop();
    }
    DFS(root, 0);
    return out;
};