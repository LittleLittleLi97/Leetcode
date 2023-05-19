class Solution {
public:
    int threeSumClosest(vector<int>& nums, int target) {
        sort(nums.begin(), nums.end());

        int out = nums[0] + nums[1] + nums[2];
        for (int i = 0; i < nums.size(); i++) {
            int left = i + 1;
            int right = nums.size() - 1;
            while (left < right) {
                int sum = nums[left] + nums[right] + nums[i];
                if (abs(sum - target) < abs(out - target)) out = sum;
                if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }

        return out;
    }
};