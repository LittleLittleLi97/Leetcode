/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (num1 === "0" || num2 === "0") return "0";
    const out = [];
    for (let i = num1.length - 1; i >= 0; i--) {
        let increment = 0;
        let position = num1.length - 1 - i;
        // console.log(position)
        for (let j = num2.length - 1; j >= 0; j--, position++) {
            const multi = parseInt(num1[i]) * parseInt(num2[j]) + increment;
            // console.log(num1[i], num2[j], increment, multi)
            if (out[position] !== undefined) {
                out[position] += multi;
            } else {
                out.push(multi);
            }
            increment = parseInt(out[position] / 10);
            out[position] %= 10;
            // console.log(out)
        }
        if (increment) {
            if (out[position] !== undefined) {
                out[position] += increment;
            } else {
                out.push(increment);
            }
            while (out[position] > 10) {
                increment = parseInt(out[position] / 10);
                out[position] %= 10;
                position++;
                if (out[position] !== undefined) {
                    out[position] += increment;
                } else {
                    out.push(increment);
                }
            }
        }
        // console.log(out.join(''))
    }
    return out.reverse().join('');
};