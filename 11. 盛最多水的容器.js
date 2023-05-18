/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;

    let maxCapacity = 0;
    while (left < right) {
        const capacity = (right - left) * Math.min(height[left], height[right]);
        maxCapacity = Math.max(maxCapacity, capacity);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxCapacity;
};
//  var maxArea = function(height) {
//     var maxCapacity = 0;
//     var st = 0;
//     var ed = height.length - 1;
//     while (st < ed) {
//         maxCapacity = Math.max(maxCapacity, Math.min(height[st], height[ed]) * (ed - st));
//         if (height[st] < height[ed]) {
//             var nowMinIndex = st;
//             while (st < ed) {
//                 st++;
//                 if (height[st] > height[nowMinIndex]) break;
//             }
//         } else {
//             var nowMinIndex = ed;
//             while (st < ed) {
//                 ed--;
//                 if (height[ed] > height[nowMinIndex]) break;
//             }
//         }
//     }
//     return maxCapacity;
// };