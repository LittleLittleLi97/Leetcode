/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    const out = [];

    let nowArr = [];
    for (let i = 0; i < arr.length; i++) {
        nowArr.push(arr[i]);
        if (nowArr.length === size) {
            out.push(nowArr.concat());
            nowArr = [];
        }
    }

    if (nowArr.length > 0) {
        out.push(nowArr.concat());
    }

    return out;
};