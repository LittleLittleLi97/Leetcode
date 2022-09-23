/**
 * @param {number[]} nums
 * @return {number}
 */
// var singleNumber = function(nums) {
//     const m = new Map();
//     let out;
//     for (let i = 0; i < nums.length; i++) {
//         let value = m.get(nums[i]);
//         value === undefined ? m.set(nums[i], 1) : m.set(nums[i], value + 1);
//     }
//     for (let [key, value] of m) {
//         if (value === 1) {
//             out = key;
//             break;
//         }
//     }
//     return out;
// };
var singleNumber = function(nums) {
    return nums.reduce((a, b)=>a^b);
};