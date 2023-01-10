/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    function DFS(r1, r2) {
        if (!r1 && !r2) return true;
        if ((r1 && !r2) || (!r1 && r2)) return false;
        if (r1.val !== r2.val) return false;
        const left = DFS(r1.left, r2.left);
        const right = DFS(r1.right, r2.right);
        return left && right;
    }
    return DFS(p, q);
};