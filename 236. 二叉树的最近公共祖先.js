/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
    let result = root;
    function DFS(root, p, q) {
        if (!root) return false;
        const left = DFS(root.left, p, q);
        const right = DFS(root.right, p, q);
        if ((left && right) || ( ( (root === p) || (root === q) ) && (left || right) ) ) {
            result = root;
        }
        return left || right || (root === p) || (root === q)
    }
    DFS(root, p, q);
    return result;
};