class Solution {
public:
    int maxArea(vector<int>& height) {
        int left = 0;
        int right = height.size() - 1;

        int maxCapacity = 0;
        while (left < right) {
            int capacity = (right - left) * min(height[left], height[right]);
            maxCapacity = max(maxCapacity, capacity);

            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }

        return maxCapacity;
    }
};