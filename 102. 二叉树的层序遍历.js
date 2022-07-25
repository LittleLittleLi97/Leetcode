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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return [];
    const q = [];
    const reuslt = [];
    root.level = 0;
    q.push(root);
    while (q.length > 0) {
        let now = q.shift();
        if (reuslt.length < now.level + 1) reuslt.push([]);
        reuslt[now.level].push(now.val);
        if (now.left) {
            now.left.level = now.level + 1;
            q.push(now.left);
        }
        if (now.right) {
            now.right.level = now.level + 1;
            q.push(now.right);
        }
    }
    return reuslt;
};