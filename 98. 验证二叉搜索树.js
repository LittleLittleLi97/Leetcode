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
var isValidBST = function(root) {
    if (!root) return true;
    let result = true;
    let last = null;
    function inOder(root) {
        if (root.left) inOder(root.left);
        if (last != null) {
            if (last >= root.val) result = false;
        }
        last = root.val;
        if (root.right) inOder(root.right);
    }
    inOder(root);
    return result;
};

var isValidBST = function(root) {
    function isValid(root, minValue, maxValue) {
        const valueFlag = minValue < root.val && root.val < maxValue;
        const leftFlag = root.left ? isValid(root.left, minValue, root.val) : true;
        const rightFlag = root.right ? isValid(root.right, root.val, maxValue) : true;

        return valueFlag && leftFlag & rightFlag;
    }
    return isValid(root, -Infinity, Infinity)
};