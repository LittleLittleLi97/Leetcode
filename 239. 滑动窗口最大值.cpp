class Solution {
public:
    vector<int> maxSlidingWindow(vector<int>& nums, int k) {
        priority_queue<pair<int, int>> p;

        vector<int> out;
        for (int i = 0; i < k; i++) {
            p.emplace(nums[i], i);
        }
        out.push_back(p.top().first);
        for (int i = k; i < nums.size(); i++) {
            p.emplace(nums[i], i);
            while (p.top().second <= i - k) {
                p.pop();
            }
            out.push_back(p.top().first);
        }
        return out;
    }
};