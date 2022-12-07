/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b)=>a - b);

    const out = [];

    const nowList = [];

    function DFS(index, sum) {
        if (sum === target) {
            out.push(nowList.concat());
            return;
        }
        if (sum > target) return;
        
        for (let i = index + 1; i < candidates.length; i++) {
            if (i > index + 1 && candidates[i] === candidates[i - 1]) continue;
            nowList.push(candidates[i]);
            DFS(i, sum + candidates[i]);
            nowList.pop();
        }
    }

    for (let i = 0; i < candidates.length; i++) {
        if (i > 0 && candidates[i] === candidates[i - 1]) continue;
        nowList.push(candidates[i]);
        DFS(i, candidates[i]);
        nowList.pop();
    }

    return out;
};