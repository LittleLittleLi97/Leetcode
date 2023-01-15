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
// 迭代
var preorderTraversal = function(root) {
    const out = [];
    const stack = [];
    if (root) stack.push(root);

    while (stack.length > 0) {
        const now = stack[stack.length - 1];
        stack.pop();
        out.push(now.val);
        if (now.right) stack.push(now.right);
        if (now.left) stack.push(now.left);
    }

    return out;
};
// 递归
var preorderTraversal = function(root) {
    const out = [];
    function DFS(root) {
        if (!root) return;
        out.push(root.val);
        DFS(root.left);
        DFS(root.right);
    }
    DFS(root);
    return out;
};