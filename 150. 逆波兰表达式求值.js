/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];
    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];
        if (token[token.length - 1] >= '0' && token[token.length - 1] <= '9') {
            stack.push(token);
        } else {
            const a = parseInt(stack[stack.length - 2]);
            const b = parseInt(stack[stack.length - 1]);
            stack.pop();
            stack.pop();
            let out;
            switch (token) {
                case '+':
                    out = a + b;
                    break;
                case '-':
                    out = a - b;
                    break;
                case '*':
                    out = a * b;
                    break;
                case '/':
                    out = parseInt(a / b);
                    break;
            }
            stack.push(out);
        }
    }
    return stack[0]
};