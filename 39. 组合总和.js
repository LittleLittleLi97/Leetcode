/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

// 注意数组的深拷贝
 var combinationSum = function(candidates, target) {
    var res = [];
    function DFS(nums, target, nowList, nowSum, left) {
        if (nowSum > target) return;
        if (nowSum == target) return res.push(nowList.concat());
        for (var i = left; i < nums.length; i++) {
            nowList.push(nums[i]);
            DFS(nums, target, nowList, nowSum + nums[i], i);
            nowList.pop();
        }
    }
    DFS(candidates, target, [], 0, 0);
    return res;
};

var candidates = [2,3,6,7];
var target = 7;
var res = combinationSum(candidates, target);
console.log(res);