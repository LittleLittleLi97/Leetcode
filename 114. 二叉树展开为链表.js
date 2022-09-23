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
 * @return {void} Do not return anything, modify root in-place instead.
 */
 var flatten = function(root) {
    let last = new TreeNode();
    last.left = last.right = null;
    function preorderTraversal(root) {
        const left = root.left;
        const right = root.right;

        root.left = root.right = null;
        last.right = root;
        last = last.right;

        if (left) preorderTraversal(left);
        if (right) preorderTraversal(right);
    }
    if (root) preorderTraversal(root);
};