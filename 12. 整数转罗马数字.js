/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let out = '';
    const table = [
        {str: 'M', value: 1000},
        {str: 'CM', value: 900},
        {str: 'D', value: 500},
        {str: 'CD', value: 400},
        {str: 'C', value: 100},
        {str: 'XC', value: 90},
        {str: 'L', value: 50},
        {str: 'XL', value: 40},
        {str: 'X', value: 10},
        {str: 'IX', value: 9},
        {str: 'V', value: 5},
        {str: 'IV', value: 4},
        {str: 'I', value: 1}
    ];

    for (let i = 0; i < table.length; i++) {
        let n = parseInt(num / table[i].value);
        while (n--) out += table[i].str;
        num %= table[i].value;
    }

    return out;
};