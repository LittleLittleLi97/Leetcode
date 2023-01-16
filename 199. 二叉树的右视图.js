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
var rightSideView = function(root) {
    const out = [];
    const queue = [];
    if (root) queue.push(root);
    while (queue.length > 0) {
        const len = queue.length;
        let rightValue;
        for (let i = 0; i < len; i++) {
            const now = queue[0];
            queue.shift();
            if (now.left) queue.push(now.left);
            if (now.right) queue.push(now.right);
            rightValue = now.val;
        }
        out.push(rightValue);
    }
    return out;
};