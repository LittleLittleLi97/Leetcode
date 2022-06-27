/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
    if (!intervals) return [];

    intervals.sort((a, b)=>{
        return a[0] - b[0];
    })

    const result = [];
    var nowList = intervals[0];
    for (var i = 1; i < intervals.length; i++) {
        var walkList = intervals[i];

        if (nowList[1] >= walkList[0]) {
            nowList = [nowList[0], Math.max(nowList[1], walkList[1])];
        } else {
            result.push(nowList);
            nowList = intervals[i];
        }
    }
    result.push(nowList);
    return result;
};