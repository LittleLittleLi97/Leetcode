var search = function(nums, target) {
    // 每次搜索时根据有序的一侧来判断接下来的查询在左侧还是右侧
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = parseInt((left + right) / 2);
        // console.log(' loc: ', left, mid, right)
        // console.log(nums[left], nums[mid], nums[right]);
        if (nums[mid] === target) return true;
        if (nums[mid] === nums[left] && nums[mid] === nums[right]) {
            // mid的值与left和right的值都相等
            // 无法判断是左侧有序还是右侧有序
            // 缩小查找范围
            left++;
            right--;
        } else if (nums[left] <= nums[mid]) { // 左侧有序
            // target是否在左侧left和mid的范围中，如果在，下次访问的范围为[left, mid - 1]
            // 如果不在，说明target应该在右侧找，下次访问的范围为[mid + 1, right]
            if (target < nums[mid] && nums[left] <= target) right = mid - 1;
            else left = mid + 1;
        } else { // 右侧有序
            // target是否在右侧mid和right的范围中，如果在，下次访问的范围为[mid + 1, right]
            // 如果不在，说明target应该在左侧找，下次访问的范围为[left, mid - 1]
            if (nums[mid] < target && target <= nums[right]) left = mid + 1;
            else right = mid - 1;
        }
    }
    return false;
};