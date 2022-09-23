/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    void DFS(TreeNode *root, int nowDepth, int &out) {
        if (nowDepth > out) out = nowDepth;
        if (root->left) DFS(root->left, nowDepth+1, out);
        if (root->right) DFS(root->right, nowDepth+1, out);
    }
    int maxDepth(TreeNode* root) {
        if (root==NULL) return 0;
        int out = 1;
        DFS(root, 1, out);
        return out;
    }
};