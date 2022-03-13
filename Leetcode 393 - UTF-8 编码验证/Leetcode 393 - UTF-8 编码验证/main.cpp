//
//  main.cpp
//  Leetcode 393 - UTF-8 编码验证
//
//  Created by 97 on 2022/3/13.
//  Copyright © 2022 97. All rights reserved.
//

#include <iostream>
#include <vector>
#include <string>
using namespace std;

class Solution {
public:
    bool validUtf8(vector<int>& data) {
        int byteNum = 0;
        for (int i = 0; i < data.size(); i++) {
            string biStr = "";
            int nowValue = data[i];
            while (nowValue) {
                int rest = nowValue % 2;
                char c = rest + '0';
                nowValue = nowValue / 2;
                biStr = c + biStr;
            }
            while (biStr.length() < 8) biStr = '0' + biStr;
            if (byteNum) {
                if (biStr.substr(0, 2) == "10") byteNum--;
                else return false;
            }
            else if (biStr[0] == '0') continue;
            else {
                int t_byteNum = 0;
                for (int j = 0; j < biStr.length(); j++) {
                    if (t_byteNum > 4) return false;
                    if (biStr[j] == '1') {
                        t_byteNum++;
                    }else break;
                }
                if (t_byteNum == 1) return false;
                byteNum = t_byteNum - 1;
            }
        }
        if (byteNum) return false;
        return true;
    }
};

int main(){
    
}
