/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    function parseString(str) {
        const out = [];
        let count = 1;
        for (let i = 1; i < str.length; i++) {
            if (str[i - 1] === str[i]) count++;
            else {
                out.push(`${count}${str[i - 1]}`);
                count = 1;
            }
        }
        out.push(`${count}${str[str.length - 1]}`);
        return out.join('');
    }

    let out = '1';
    for (let i = 1; i < n; i++) {
        out = parseString(out);
    }
    return out;
};