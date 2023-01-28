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
var zigzagLevelOrder = function(root) {
    let queue = [];
    const out = [];
    let orient = false;
    if (root) queue.push(root);

    while (queue.length > 0) {
        const len = queue.length;
        const newQueue = [];
        const levelOut = [];

        for (let i = 0; i < len; i++) {
            const now = queue[i];
            if (orient) levelOut.unshift(now.val);
            else levelOut.push(now.val)
            if (now.left) newQueue.push(now.left);
            if (now.right) newQueue.push(now.right);
        }
        orient = !orient;
        queue = newQueue;
        out.push(levelOut);
    }
    return out;
};