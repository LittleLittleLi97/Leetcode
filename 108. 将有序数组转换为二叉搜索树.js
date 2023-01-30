/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    function createBST(st, end) {
        const mid = Math.floor((st + end) / 2);
        const root = new TreeNode(nums[mid]);

        if (st < mid) root.left = createBST(st, mid - 1);
        if (mid < end) root.right = createBST(mid + 1, end);
        return root;
    }
    return createBST(0, nums.length - 1);
};