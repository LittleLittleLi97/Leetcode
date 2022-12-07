/**
 * @param {number[]} nums
 * @return {number}
 */
 var jump = function(nums) {
    let out = 0;

    let st = 0;
    let end = 0;
    let maxPos = 0;
    while (end < nums.length - 1) {
        for (let i = st; i <= end; i++) {
            maxPos = Math.max(maxPos, nums[i] + i);
        }
        st = end;
        end = maxPos;
        out++;
    }
    return out;
};
// var jump = function(nums) {
//     if (nums.length === 1) return 0;

//     const queue = [];
//     const ever = {};
//     let level = 0;

//     queue.push(0);
//     ever[0] = true;
//     while (queue.length > 0) {

//         level++;

//         let length = queue.length;

//         for (let i = 0; i < length; i++) {

//             const index = queue[0];
//             queue.shift();
//             const willLen = nums[index];

//             for (let will = index + 1; will <= index + willLen; will++) {
//                 if (will === nums.length - 1) return level;
//                 if (!ever[will]) {
//                     ever[will] = true;
//                     queue.push(will);
//                 }
//             }
//         }
//     }
// };