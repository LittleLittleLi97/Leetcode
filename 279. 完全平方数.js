/**
 * @param {number} n
 * @return {number}
 */
/*
var numSquares = function(n) {
    let minDeep = Infinity;
    function DFS(rest, deep) {
        if (rest === 0) {
            if (deep < minDeep) minDeep = deep;
            return;
        }
        if (deep >= minDeep) return;
        const sqrt = parseInt(Math.sqrt(rest));
        for (let i = sqrt; i > 0; i--) {
            DFS(rest - i * i, deep + 1);
        }
    }
    DFS(n, 0);
    return minDeep;
};
*/
var numSquares = function(n) {
    const queue = [];
    const ever = {};
    let deep = 0;
    queue.push(n);
    while (queue.length > 0) {
        const width = queue.length;
        deep++;
        for (let i = 0; i < width; i++) {
            const num = queue[0];
            queue.shift();
            const sqrt = parseInt(Math.sqrt(num));
            for (let j = sqrt; j > 0; j--) {
                const rest = num - j * j;
                if (rest === 0) return deep;
                else {
                    if (!ever[rest]) {
                        ever[rest] = true;
                        queue.push(rest);
                    }
                }
            }
        }
    }
    return deep;
}