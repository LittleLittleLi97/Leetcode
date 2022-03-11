//
//  main.cpp
//  Leetcode 14 - 最长公共前缀
//
//  Created by 97 on 2022/3/11.
//  Copyright © 2022 97. All rights reserved.
//

#include <iostream>
#include <string>
#include <vector>
using namespace std;

class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
        string out = "";
        bool done = false;
        for (int nowIndex = 0; nowIndex < strs[0].length(); nowIndex++) {
            if (done) break;
            char nowChar = strs[0][nowIndex];
            bool equal = true;
            for (int i = 1; i < strs.size(); i++) {
                if (nowIndex > strs[i].size() - 1) {
                    done = true;
                    equal = false;
                    break;
                }
                if (strs[i][nowIndex] == nowChar) continue;
                equal = false;
                done = true;
            }
            if (equal) out += nowChar;
        }
        return out;
    }
};

int main(){
    
}
