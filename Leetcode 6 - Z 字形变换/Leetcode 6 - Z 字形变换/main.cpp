//
//  main.cpp
//  Leetcode 6 - Z 字形变换
//
//  Created by 97 on 2022/3/11.
//  Copyright © 2022 97. All rights reserved.
//

#include <iostream>
#include <string>
using namespace std;

class Solution {
public:
    string convert(string s, int numRows) {
        if (numRows == 1) return s;
        string row[numRows];
        int location = 0;
        int orient = 1;
        for (int i = 0; i < s.length(); i++) {
            row[location] += s[i];
            if (location == 0) orient = 1;
            else if (location == numRows - 1) orient = -1;
            location += orient;
        }
        string out;
        for (int i = 0; i < numRows; i++) out += row[i];
        return out;
    }
};

int main(){
    
}
