//
//  main.cpp
//  Leetcode 653 - 两数之和 IV - 输入 BST
//
//  Created by 97 on 2022/3/21.
//  Copyright © 2022 97. All rights reserved.
//

#include <iostream>
#include <unordered_map>
#include <unordered_set>
using namespace std;

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};

class Solution {
public:
    unordered_map<int, int> m;
    void DFS(TreeNode *root) {
        if (root == NULL) return;
        m[root->val]++;
        DFS(root->left);
        DFS(root->right);
    }
    bool findTarget(TreeNode* root, int k) {
        DFS(root);
        for (auto it : m) {
            if (m.find(k - it.first) != m.end()) {
                if (k - it.first == it.first) {
                    if (it.second > 1) return true;
                    else continue;
                }
                return true;
            }
        }
        return false;
    }
};

int main(){
    
}
