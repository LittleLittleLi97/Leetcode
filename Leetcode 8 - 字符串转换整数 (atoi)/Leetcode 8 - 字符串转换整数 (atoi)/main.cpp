//
//  main.cpp
//  Leetcode 8 - 字符串转换整数 (atoi)
//
//  Created by 97 on 2022/3/12.
//  Copyright © 2022 97. All rights reserved.
//

#include <iostream>
#include <string>
#include <stdio.h>
#include <cmath>
#include <unordered_map>
#include <vector>
#include <algorithm>
using namespace std;

class Automation {
    string state = "start";
    unordered_map<string, vector<string>> table = {
        {"start",{"start", "sign", "number", "end"}},
        {"sign",{"end", "end", "number", "end"}},
        {"number",{"end", "end", "number", "end"}},
        {"end",{"end", "end", "end", "end"}}
    };
    int getStateIndex(char c){
        if (isspace(c)) return 0;
        if (c == '+' || c == '-') return 1;
        if (isdigit(c)) return 2;
        return 3;
    }
    
    long int outNumber = 0;
    int sign = 1;
    void parseIntTraversal(char c){
        state = table[state][getStateIndex(c)];
        if (state == "number") {
            outNumber = outNumber * 10 + c - '0';
            outNumber = sign == 1 ? min(outNumber, (long int)INT_MAX) : min(outNumber, -(long int)INT_MIN);
        }
        else if (state == "sign") {
            sign = c == '+' ? 1 : -1;
        }
    }
    
public:
    long int parseInt(string s){
        for (char c : s) parseIntTraversal(c);
        return outNumber * sign;
    }
};

class Solution {
public:
    int myAtoi(string s) {
        Automation a;
        return a.parseInt(s);
    }
};

int main(){
    
}
