class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        sort(nums.begin(), nums.end());

        vector<vector<int>> v;

        for (int i = 0; i < nums.size(); i++) {
            int now = nums[i];
            if (now > 0) break;

            if (i > 0 && now == nums[i - 1]) continue;

            int left = i + 1;
            int right = nums.size() - 1;
            while (left < right) {
                int sum = nums[left] + nums[right] + now;
                if (sum == 0) {
                    v.push_back({now, nums[left], nums[right]});
                    left++;
                    right--;
                    while (left < right && nums[left] == nums[left - 1]) left++;
                    while (left < right && nums[right] == nums[right + 1]) right--;
                } else if (sum < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }

        return v;
    }
};