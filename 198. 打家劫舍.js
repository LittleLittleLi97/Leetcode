/**
 * @param {number[]} nums
 * @return {number}
 */

 var rob = function(nums) {
    const m = new Map();

    function getMaxCount(nums, nowIndex) {
        if (m.has(nowIndex)) return m.get(nowIndex);
        let maxCount = nums[nowIndex];
        for (let i = nowIndex + 2; i < nums.length; i++) {
            let count = getMaxCount(nums, i) + nums[nowIndex];
            if (count > maxCount) maxCount = count;
        }
        m.set(nowIndex, maxCount);
        return maxCount;
    }

    let maxCount = 0;
    for (let i = 0; i < nums.length; i++) {
        let count = getMaxCount(nums, i);
        if (count > maxCount) maxCount = count;
    }

    return maxCount;
};