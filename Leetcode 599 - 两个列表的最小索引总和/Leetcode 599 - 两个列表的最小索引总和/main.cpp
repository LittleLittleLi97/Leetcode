//
//  main.cpp
//  Leetcode 599 - 两个列表的最小索引总和
//
//  Created by 97 on 2022/3/14.
//  Copyright © 2022 97. All rights reserved.
//

#include <iostream>
#include <unordered_map>
#include <vector>
using namespace std;

class Solution {
public:
    vector<string> findRestaurant(vector<string>& list1, vector<string>& list2) {
        unordered_map<string, int> m;
        vector<string> out;
        int now_index_sum = 1000000000;
        for (int i = 0; i < list1.size(); i++) {
            m[list1[i]] = i;
        }
        for (int i = 0; i < list2.size(); i++) {
            if (m.find(list2[i]) != m.end()) {
                int index_sum = m[list2[i]] + i;
                if (index_sum < now_index_sum) {
                    now_index_sum = index_sum;
                    out.clear();
                    out.push_back(list2[i]);
                }else if (index_sum == now_index_sum) {
                    out.push_back(list2[i]);
                }
            }
        }
        return out;
    }
};

int main(){
    
}
