//
//  main.cpp
//  Leetcode 9 - 回文数
//
//  Created by 97 on 2022/3/11.
//  Copyright © 2022 97. All rights reserved.
//

#include <iostream>
#include <string>
using namespace std;

class Solution {
public:
    bool isPalindrome(int x) {
        string str = to_string(x);
        for (int i = 0, j = str.length() - 1; i < j; i++, j--) {
            if (str[i] == str[j]) continue;
            return false;
        }
        return true;
    }
};

