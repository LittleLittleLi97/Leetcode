/**
 * @param {string[]} strs
 * @return {string[][]}
 */

 var groupAnagrams = function(strs) {
    const map = new Map();

    for (var i = 0; i < strs.length; i++) {
        var arr = Array.from(strs[i]);
        arr.sort();
        var key = arr.toString();
        var value = map.get(key) ? map.get(key) : [];
        value.push(strs[i]);
        map.set(key, value);
    }
    
    return Array.from(map.values());
};

//  var groupAnagrams = function(strs) {
//     const obj = {};

//     for (var i = 0; i < strs.length; i++) {
//         var sortStrArr = [];
//         for (var j = 0; j < strs[i].length; j++) {
//             sortStrArr.push(strs[i][j]);
//         }
//         sortStrArr.sort();
//         if (!obj[sortStrArr]) obj[sortStrArr] = [];
//         obj[sortStrArr].push(strs[i]);
//     }
//     console.log(obj)
//     return Object.values(obj);
// };

strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));
