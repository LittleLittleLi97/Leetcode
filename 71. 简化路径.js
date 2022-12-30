/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const stack = [];

    path += '/';
    while (path) {
        const index = path.indexOf('/');
        if (index === 0) {
            advance(index);
            continue;
        }
        const word = path.substr(0, index);
        advance(index);
        if (word === '.') continue;
        else if (word === '..') {
            if (stack.length > 0) stack.pop();
        } else {
            stack.push(word);
        }
    }
    function advance(n) {
        path = path.substring(n + 1);
    }
    return '/' + stack.join('/');
};