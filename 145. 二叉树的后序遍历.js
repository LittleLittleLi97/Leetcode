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
 * @return {number[]}
 */
// 迭代，97的写法，需要一个everExtend（已从本节点向下扩展子节点过的记录）
var postorderTraversal = function(root) {
    const out = [];
    const everExtend = new Set();
    const stack = [];
    if (root) stack.push(root);
    while (stack.length > 0) {
        const now = stack[stack.length - 1];
        if (everExtend.has(now)) {
            stack.pop();
            out.push(now.val);
        } else {
            everExtend.add(now);
            if (now.right) stack.push(now.right);
            if (now.left) stack.push(now.left);
        }
    }
    return out;
};
// 递归
var postorderTraversal = function(root) {
    const out = [];
    function DFS(root) {
        if (!root) return;
        DFS(root.left);
        DFS(root.right);
        out.push(root.val);
    }
    DFS(root);
    return out;
};