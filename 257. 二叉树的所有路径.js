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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if (!root) return [];
    const out = [];
    const path = [];
    function DFS(root) {
        path.push(root.val);
        if (!root.left && !root.right) {
            out.push(path.join("->"));
            path.pop(); // path.pop()可以和return;一起删除，使用本节点访问完成后的path.pop();
            return; // 这个return;
        }
        
        root.left && DFS(root.left);
        root.right && DFS(root.right);

        path.pop(); // 本节点访问完成后的path.pop();
    }
    DFS(root);
    return out;
};

// path.pop()操作一次就行
var binaryTreePaths = function(root) {
    const out = [];
    const path = [];
    function DFS(root) {
        if (!root) return;

        path.push(root.val);

        if (!root.left && !root.right) {
            out.push(path.join("->"));
        }

        DFS(root.left);
        DFS(root.right);

        path.pop();
    }
    DFS(root);
    return out;
};

// 访问节点前后分别添加和删除记录
var binaryTreePaths = function(root) {
    if (!root) return [];
    const out = [];
    const path = [];
    function DFS(root) {
        if (!root.left && !root.right) {
            out.push(path.join("->"));
            return;
        }

        if (root.left) {
            path.push(root.left.val);
            DFS(root.left);
            path.pop();
        }
        if (root.right) {
            path.push(root.right.val);
            DFS(root.right);
            path.pop();
        }
    }

    path.push(root.val);
    DFS(root);
    path.pop();
    return out;
};