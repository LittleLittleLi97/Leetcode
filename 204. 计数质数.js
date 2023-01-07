/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    const exclude = new Array(n).fill(false);
    let out = 0;
    for (let i = 2; i < n; i++) {
        if (!exclude[i]) {
            out++;
            for (let j = i * 2; j < n; j += i) {
                exclude[j] = true;
            }
        }
    }
    return out;
}
// var countPrimes = function(n) {
//     function isPrime(num) {
//         for (let i = 2; i * i <= num; i++) {
//             if (num % i === 0) return false;
//         }
//         return true;
//     }
//     let out = 0;
//     for (let i = 2; i < n; i++) {
//         if (isPrime(i)) out++;
//     }
//     return out;
// };