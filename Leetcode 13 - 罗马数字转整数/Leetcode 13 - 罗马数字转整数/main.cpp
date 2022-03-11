//
//  main.cpp
//  Leetcode 13 - 罗马数字转整数
//
//  Created by 97 on 2022/3/11.
//  Copyright © 2022 97. All rights reserved.
//

#include <iostream>
#include <string>
#include <map>
using namespace std;


class Solution {
public:
    int romanToInt(string s) {
        map<char, int> m;
        m['I'] = 1;
        m['V'] = 5;
        m['X'] = 10;
        m['L'] = 50;
        m['C'] = 100;
        m['D'] = 500;
        m['M'] = 1000;
        int out = 0;
        for (int i = 0; i < s.length(); i++) {
            bool flag = false;
            if (i < s.length() - 1) {
                if (s[i] == 'I' && (s[i + 1] == 'V' || s[i + 1] == 'X')) flag = true;
                else if (s[i] == 'X' && (s[i + 1] == 'L' || s[i + 1] == 'C')) flag = true;
                else if (s[i] == 'C' && (s[i + 1] == 'D' || s[i + 1] == 'M')) flag = true;
            }
            if (flag) out -= m[s[i]];
            else out += m[s[i]];
        }
        return out;
    }
};

//class Solution {
//public:
//    int romanToInt(string s) {
//        map<string, int> m;
//        m["I"] = 1;
//        m["V"] = 5;
//        m["X"] = 10;
//        m["L"] = 50;
//        m["C"] = 100;
//        m["D"] = 500;
//        m["M"] = 1000;
//        m["IV"] = 4;
//        m["IX"] = 9;
//        m["XL"] = 40;
//        m["XC"] = 90;
//        m["CD"] = 400;
//        m["CM"] = 900;
//        int out = 0;
//        for (int i = 0; i < s.length(); i++) {
//            string a = s.substr(i, 1);
//            string b = s.substr(i, 2);
//            if (m[b]) {
//                out += m[b];
//                i++;
//            }else out += m[a];
//        }
//        return out;
//    }
//};

int main(){
    
}
