/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const p = new PriorityQueue({
        compare: (a, b)=>{
            return a.value < b.value;
        }
    });
    
    const out = [];

    for (let i = 0; i < k; i++) {
        p.enqueue({
            value: nums[i],
            index: i
        });
    }
    out.push(p.front().value);
    for (let i = k; i < nums.length; i++) {
        p.enqueue({
            value: nums[i],
            index: i
        });
        while (p.front().index <= i - k) {
            p.dequeue();
        }
        out.push(p.front().value);
    }
    return out;
};