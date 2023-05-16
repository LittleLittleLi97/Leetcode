class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        map<int, int> m;
        for (int i = 0; i < nums.size(); i++) {
            int now = nums[i];
            int rest = target - now;
            if (m.find(rest) != m.end()) {
                return {i, m[rest]};
            }
            m[now] = i;
        }
        return {};
    }
};