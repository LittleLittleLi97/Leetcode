/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    const a = [];
    for (let i = 0; i < m; i++) {
        a.push(nums1[i]);
    }
    let i = 0;
    let j = 0;
    while (i < a.length && j < n) {
        if (a[i] <= nums2[j]) nums1[i + j] = a[i++];
        else nums1[i + j] = nums2[j++];
    }
    while (i < a.length) nums1[i + j] = a[i++];
    while (j < n) nums1[i + j] = nums2[j++];
};