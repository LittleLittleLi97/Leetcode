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
 * @return {number}
 */
var sumNumbers = function(root) {
    if (!root) return 0;
    let out = 0;
    function DFS(root, now) {
        if (!root.left && !root.right) {
            out += now;
            return;
        }
        if (root.left) DFS(root.left, now * 10 + root.left.val);
        if (root.right) DFS(root.right, now * 10 + root.right.val);
    }
    DFS(root, root.val);
    return out;
};