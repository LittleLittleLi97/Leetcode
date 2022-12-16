/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const out = [];

    nums.sort((a, b)=>a - b);

    const everLoc = {};

    function DFS(nowList) {
        if (nowList.length === nums.length) {
            out.push(nowList.concat());
        }
        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i - 1] && everLoc[i - 1]) continue;
            if (!everLoc[i]) {
                everLoc[i] = true;
                nowList.push(nums[i]);
                DFS(nowList);
                nowList.pop();
                everLoc[i] = false;
            }
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1] && everLoc[i - 1]) continue;
        everLoc[i] = true;
        DFS([nums[i]]);
        everLoc[i] = false;
    }

    return out;
};