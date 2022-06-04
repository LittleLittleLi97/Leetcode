//
//  main.cpp
//  Leetcode 11 - 盛最多水的容器
//
//  Created by 97 on 2022/4/26.
//  Copyright © 2022 97. All rights reserved.
//

#include <iostream>
#include <vector>
#include <cmath>
using namespace std;

class Solution {
public:
    int maxArea(vector<int>& height) {
        int maxCapacity = 0;
        for (int i = 0; i < height.size(); i++) {
            for (int j = i + 1; j < height.size(); j++) {
                int currentCapacity = min(height[i], height[j]) * (j - i);
                if (currentCapacity > maxCapacity) maxCapacity = currentCapacity;
            }
        }
        return maxCapacity;
    }
};

int main(int argc, const char * argv[]) {
    // insert code here...
    std::cout << "Hello, World!\n";
    return 0;
}
