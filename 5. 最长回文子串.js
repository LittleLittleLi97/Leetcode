/**
 * @param {string} s
 * @return {string}
 */

// 中心扩散
var longestPalindrome = function(s) {
    function expandCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return [left + 1, right - 1];
    }

    let st = 0;
    let end = 0;
    for (let i = 0; i < s.length; i++) {
        const [ left1, right1 ] = expandCenter(i, i);
        const [ left2, right2 ] = expandCenter(i, i + 1);
        if (right1 - left1 > end - st) {
            st = left1;
            end = right1;
        }
        if (right2 - left2 > end - st) {
            st = left2;
            end = right2;
        }
    }
    
    return s.substring(st, end + 1);
};

// 动态规划
// var longestPalindrome = function(s) {
//     const N = s.length;
//     if (N < 2) return s;
//     const dp = new Array(N).fill(0).map(()=>new Array(N).fill(undefined));

//     let maxLen = 1;
//     let start = 0, end = 1;

//     for (let i = 0; i < N; i++) dp[i][i] = true;

//     for (let len = 2; len <= N; len++) {
//         for (let i = 0; i < N; i++) {
//             let j = i + len - 1;

//             if (j > N) break;

//             if (s[i] !== s[j]) {
//                 dp[i][j] = false;
//             } else {
//                 if (len < 3) dp[i][j] = true;
//                 else dp[i][j] = dp[i + 1][j - 1];
//             }

//             if (dp[i][j] === true && len > maxLen) {
//                 maxLen = len;
//                 start = i;
//                 end = j + 1;
//             }
//         }
//     }

//     return s.substring(start, end);
// };