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

// 不存储层级
var levelOrder = function(root) {
    if (!root) return [];

    const out = [];

    const queue = [];
    queue.push(root);
    while (queue.length > 0) {

        const len = queue.length;
        const level = [];
        for (let i = 0; i < len; i++) {
            const node = queue[0];
            queue.shift();

            node.left && queue.push(node.left);
            node.right && queue.push(node.right);

            level.push(node.val);
        }

        out.push(level);
    }

    return out;
};

// 存储层级
var levelOrder = function(root) {
    if (!root) return [];
    const q = [];
    const reuslt = [];
    root.level = 0;
    q.push(root);
    while (q.length > 0) {
        let now = q.shift();
        if (reuslt.length < now.level + 1) reuslt.push([]);
        reuslt[now.level].push(now.val);
        if (now.left) {
            now.left.level = now.level + 1;
            q.push(now.left);
        }
        if (now.right) {
            now.right.level = now.level + 1;
            q.push(now.right);
        }
    }
    return reuslt;
};