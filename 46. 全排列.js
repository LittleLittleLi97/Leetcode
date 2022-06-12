/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
    var res = [];
    function DFS(nums, nowList) {
        if (nowList.length == nums.length) return res.push(nowList.concat());
        for (var i = 0; i < nums.length; i++) {
            if (nowList.indexOf(nums[i]) == -1) {
                nowList.push(nums[i]);
                DFS(nums, nowList);
                nowList.pop();
            }
        }
    }
    DFS(nums, []);
    return res;
};

var nums = [1,2,3];
var res = permute(nums);
console.log(res);