/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    function createTree(left, right) {
        if (left > right) return [null];
        const trees = [];
        for (let i = left; i <= right; i++) {
            const leftTrees = createTree(left, i - 1);
            const rightTrees = createTree(i + 1, right);

            for (let j = 0; j < leftTrees.length; j++) {
                for (let k = 0; k < rightTrees.length; k++) {
                    const root = new TreeNode(i, leftTrees[j], rightTrees[k]);
                    trees.push(root);
                }
            }
        }
        return trees;
    }
    return createTree(1, n)
};