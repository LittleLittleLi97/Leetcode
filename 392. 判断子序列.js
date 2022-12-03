/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let i = 0;
    let j = 0;
    for ( ; j < t.length; j++) {
        if (t[j] === s[i]) {
            i++;
            if (i === s.length) return true;
        }
    }
    if (i === s.length) return true;
    else return false;
};