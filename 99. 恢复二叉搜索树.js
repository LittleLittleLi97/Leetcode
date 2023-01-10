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
var recoverTree = function(root) {
    const li = [];
    function InOrder(root) {
        if (root) {
            InOrder(root.left)
            li.push(root);
            InOrder(root.right);
        }
    }
    InOrder(root);
    let i = 0;
    while (i < li.length - 1 && li[i].val < li[i + 1].val) i++;
    let j = li.length - 1;
    while (j > 0 && li[j].val > li[j - 1].val) j--;
    const temp = li[i].val;
    li[i].val = li[j].val;
    li[j].val = temp;
};