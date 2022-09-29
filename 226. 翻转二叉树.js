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
 * @return {TreeNode}
 */
 var invertTree = function(root) {
    const queue = [];
    if (root) queue.push(root);

    while (queue.length > 0) {
        const ptr = queue[0];
        queue.shift();

        const t = ptr.right;
        ptr.right = ptr.left;
        ptr.left = t;

        if (ptr.left) queue.push(ptr.left);
        if (ptr.right) queue.push(ptr.right);
    }

    return root;
};