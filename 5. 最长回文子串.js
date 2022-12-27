/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const N = s.length;
    if (N < 2) return s;
    const dp = new Array(N).fill(0).map(()=>new Array(N).fill(undefined));

    let maxLen = 1;
    let start = 0, end = 1;

    for (let i = 0; i < N; i++) dp[i][i] = true;

    for (let len = 2; len <= N; len++) {
        for (let i = 0; i < N; i++) {
            let j = i + len - 1;

            if (j > N) break;

            if (s[i] !== s[j]) {
                dp[i][j] = false;
            } else {
                if (len < 3) dp[i][j] = true;
                else dp[i][j] = dp[i + 1][j - 1];
            }

            if (dp[i][j] === true && len > maxLen) {
                maxLen = len;
                start = i;
                end = j + 1;
            }
        }
    }

    return s.substring(start, end);
};