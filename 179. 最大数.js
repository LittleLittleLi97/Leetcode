/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    nums.sort((a, b)=>{
        a = a.toString();
        b = b.toString();
        return (b + a) - (a + b);
    });
    if (nums[0] === 0) return '0';
    return nums.join('');
};