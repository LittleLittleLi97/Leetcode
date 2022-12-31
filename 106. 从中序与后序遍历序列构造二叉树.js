/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    function createTree(inLeft, inRight, postLeft, postRight) {
        const value = postorder[postRight];
        const root = new TreeNode(value, null, null);

        let index = inLeft;
        while (index <= inRight && inorder[index] !== value) index++;

        const lenLeft = index - inLeft;
        const lenRight = inRight - index;
        // console.log('value', value)
        // console.log(index)
        // console.log(inLeft, index - 1, postLeft, postLeft + lenLeft - 1)
        // console.log(index + 1, inRight, postLeft + lenLeft, postRight - 1)
        if (lenLeft) root.left = createTree(inLeft, index - 1, postLeft, postLeft + lenLeft - 1);
        if (lenRight) root.right = createTree(index + 1, inRight, postLeft + lenLeft, postRight - 1);
        return root;
    }

    return createTree(0, inorder.length - 1, 0, postorder.length - 1);
};