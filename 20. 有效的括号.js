/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {
    const m = {
        ')':'(',
        ']':'[',
        '}':'{'
    }
    var stack = [];
    for (var i = 0; i < s.length; i++) {
        var now = s[i];
        if (now == '(' || now == '[' || now == '{') stack.push(now);
        else if (now == ')' || now == ']' || now == '}') {
            if (stack.length <= 0) return false;
            var top = stack.pop();
            if (top != m[now]) return false;
        }
    }
    if (stack.length != 0) return false;
    else return true;
};

var s = "{[]}"
console.log(isValid(s))