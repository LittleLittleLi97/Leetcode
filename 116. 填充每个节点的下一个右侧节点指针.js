/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    const queue = [];
    if (root) queue.push(root);

    while (queue.length > 0) {
        const len = queue.length;
        let lastNode = null;

        for (let i = 0; i < len; i++) {
            const now = queue[0];
            queue.shift();
            if (now.left) queue.push(now.left);
            if (now.right) queue.push(now.right);
            if (lastNode) lastNode.next = now;
            lastNode = now;
        }
        lastNode.next = null;
    }

    return root;
};