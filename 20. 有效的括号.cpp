class Solution {
public:
    bool isLeft(char c) {
        return c == '(' || c == '[' || c == '{';
    }
    bool isValid(string s) {
        map<char, char> m = {
            {'(', ')'},
            {'[', ']'},
            {'{', '}'}
        };
        stack<char> bracket_stack;

        for (int i = 0; i < s.length(); i++) {
            if (isLeft(s[i])) {
                bracket_stack.push(s[i]);
            } else {
                if (bracket_stack.size() == 0) return false;
                char left = bracket_stack.top();
                bracket_stack.pop();
                if (m[left] == s[i]) {
                    continue;
                } else {
                    return false;
                }
            }
        }

        return !bracket_stack.size();
    }
};