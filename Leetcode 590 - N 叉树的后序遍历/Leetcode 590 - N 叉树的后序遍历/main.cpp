//
//  main.cpp
//  Leetcode 590 - N 叉树的后序遍历
//
//  Created by 97 on 2022/3/12.
//  Copyright © 2022 97. All rights reserved.
//

#include <iostream>
#include <vector>
using namespace std;

class Node {
public:
    int val;
    vector<Node*> children;
    
    Node() {}
    
    Node(int _val) {
        val = _val;
    }
    
    Node(int _val, vector<Node*> _children) {
        val = _val;
        children = _children;
    }
};

class Solution {
public:
    vector<int> v;
    void DFS(Node* root){
        if (!root) return;
        for (int i = 0; i < root->children.size(); i++) {
            DFS(root->children[i]);
        }
        v.push_back(root->val);
    }
    vector<int> postorder(Node* root) {
        DFS(root);
        return v;
    }
};

int main(){
    
}
