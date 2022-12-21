/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    intervals.push(newInterval)
    if (intervals.length === 1) return intervals;
    intervals.sort((a, b)=>a[0]-b[0]);

    const out = [];

    let [ left, right ] = intervals[0];
    for (let i = 1; i < intervals.length; i++) {
        const [ newLeft, newRight ] = intervals[i];
        if (newLeft <= right) {
            [ left, right ] = [ Math.min(left, newLeft), Math.max(right, newRight) ];
        } else {
            out.push([left, right]);
            [ left, right ] = [ newLeft, newRight ];
        }
        if (i === intervals.length - 1) {
            out.push([left, right]);
        }
    }
    return out;
};