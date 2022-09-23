/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function(preorder, inorder) {
    function _func(preList, inList, preLeft, preRight, inLeft, inRight) {
        const root = new TreeNode();
        root.val = preList[preLeft];
        root.left = root.right = null;
        
        let i = inLeft;
        while (inList[i] != preList[preLeft]) i++;

        let leftNum = i - inLeft;
        let rightNum = inRight - i;
        if (leftNum) root.left = _func(preList, inList, preLeft+1, preLeft+leftNum, inLeft, i-1);
        if (rightNum) root.right = _func(preList, inList, preLeft+leftNum+1, preRight,i+1, inRight);

        return root;
    }
    return _func(preorder, inorder, 0, preorder.length-1, 0, inorder.length-1);
};