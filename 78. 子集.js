/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
    var result = [];
    var arr = [];
    function DFS(nowIndex) {
        if (nowIndex === nums.length) {
            result.push(arr.concat());
            return;
        }
        DFS(nowIndex + 1);
        arr.push(nums[nowIndex]);
        DFS(nowIndex + 1);
        arr.pop();
    }
    DFS(0);
    return result;
};