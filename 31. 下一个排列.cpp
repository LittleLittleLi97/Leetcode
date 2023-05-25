class Solution {
public:
    void nextPermutation(vector<int>& nums) {

        for (int i = nums.size() - 2; i >= 0; i--) {

            // 从倒数第二个(i)数字开始找，如果在i + 1和nums.size()之间找到比此数字大的数字（同时保证找到的数字是几个大的数字中最小的），
            // 那么将这两个数字交换，然后排序i + 1到nums.size()之间的数字。
            // 如果找不到，i--。
            // 如果i = 0时还是找不到，那么说明此时已经是最大排列，直接排序整个nums。
            // 看样子，时间复杂度不低。
            int index = i;
            int value = INT_MAX;
            for (int j = i + 1; j < nums.size(); j++) {
                if (nums[j] > nums[i] && nums[j] < value) {
                    index = j;
                    value = nums[j];
                }
            }
            if (index != i) {
                nums[index] = nums[i];
                nums[i] = value;
                sort(nums.begin() + i + 1, nums.end());
                break;
            } else if (i == 0) {
                sort(nums.begin(), nums.end());
            }
        }
    }
};