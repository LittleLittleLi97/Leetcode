var majorityElement = function(nums) {
    let nowNum = undefined;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            nowNum = nums[i];
        }
        if (nowNum === nums[i]) count++;
        else count--;
    }
    return nowNum;
};
/* hash
// 时间复杂度：遍历一遍数组O(n)，遍历hash小于O(n)，加起来为O(n)
// 空间复杂度：O(n)
var majorityElement = function(nums) {
    const m = new Map();
    for (let i = 0; i < nums.length; i++) {
        let everValue = m.get(nums[i]);
        if (everValue) {
            m.set(nums[i], everValue + 1);
        } else {
            m.set(nums[i], 1);
        }
    }
    for (let key of m.keys()) {
        if (m.get(key) > nums.length / 2) return key;
    }
    return null;
};
*/