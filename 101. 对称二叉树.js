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

// 简化版
var isSymmetric = function(root) {
    function DFS(p, q) {
        if (!p && !q) return true;
        if ((!p && q) || (p && !q)) return false;
        return p.val === q.val && DFS(p.left, q.right) && DFS(p.right, q.left);
    }
    return DFS(root.left, root.right);
};

var isSymmetric = function(root) {
    if (!root) return true;
    let result = true;
    function traversal(leftNode, rightNode) {
        if (!leftNode && !rightNode) return;
        if ((leftNode && !rightNode) || (!leftNode && rightNode)) {
            return result = false;
        }
        if (leftNode.val != rightNode.val) return result = false;
        traversal(leftNode.left, rightNode.right);
        traversal(leftNode.right, rightNode.left);
    }
    traversal(root.left, root.right);
    return result;
};