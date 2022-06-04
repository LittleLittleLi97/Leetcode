/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    var maxCapacity = 0;
    var st = 0;
    var ed = height.length - 1;
    while (st < ed) {
        maxCapacity = Math.max(maxCapacity, Math.min(height[st], height[ed]) * (ed - st));
        if (height[st] < height[ed]) {
            var nowMinIndex = st;
            while (st < ed) {
                st++;
                if (height[st] > height[nowMinIndex]) break;
            }
        } else {
            var nowMinIndex = ed;
            while (st < ed) {
                ed--;
                if (height[ed] > height[nowMinIndex]) break;
            }
        }
    }
    return maxCapacity;
};