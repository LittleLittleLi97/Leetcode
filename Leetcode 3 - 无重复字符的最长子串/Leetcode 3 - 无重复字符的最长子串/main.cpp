//
//  main.cpp
//  Leetcode 3 - 无重复字符的最长子串
//
//  Created by 97 on 2022/3/11.
//  Copyright © 2022 97. All rights reserved.
//

#include <iostream>
#include <string>
#include <map>
#include <unordered_set>
#include <stdio.h>
using namespace std;

class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        unordered_set<char> charSet;
        int maxLength = 0;
        int left = 0;
        for (int right = 0; right < s.length(); right++) {
            while (charSet.find(s[right]) != charSet.end()) {
                charSet.erase(s[left]);
                left++;
            }
            charSet.insert(s[right]);
            maxLength = max(maxLength, right - left + 1);
        }
        return maxLength;
    }
};

//class Solution {
//public:
//    int lengthOfLongestSubstring(string s) {
//        int maxLength = 0;
//        int nowLength = 0;
//        map<char, int> m;
//        for (int i = 0; i < s.length(); i++) {
////            printf("now str: %c\n, now location: %d\n", s[i], i);
//            if (m.find(s[i]) == m.end()) {
//                m[s[i]] = i;
//                nowLength++;
//            }else {
////                printf("repeat str: %c, convert location: %d\n", s[i], m[s[i]]);
//                if (nowLength > maxLength) maxLength = nowLength;
//                nowLength = 0;
//                i = m[s[i]];
//                m.clear();
//            }
//        }
//        if (nowLength > maxLength) maxLength = nowLength;
//        return maxLength;
//    }
//};

int main(){
    Solution a = Solution();
    cout << a.lengthOfLongestSubstring("abcabcbb");
}
