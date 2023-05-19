class Solution {
public:
    map<char, string> m = {
                {'2', "abc"},
                {'3', "def"},
                {'4', "ghi"},
                {'5', "jkl"},
                {'6', "mno"},
                {'7', "pqrs"},
                {'8', "tuv"},
                {'9', "wxyz"}
            };
    vector<string> out;
    void DFS(string digits, int index, string now) {
        if (index == digits.length()) {
            out.push_back(now);
            return;
        }
        string mapString = m[digits[index]];
        for (int i = 0; i < mapString.length(); i++) {
            DFS(digits, index + 1, now + mapString[i]);
        }
    }
    vector<string> letterCombinations(string digits) {
        if (digits.length() == 0) return {};
        DFS(digits, 0, "");
        return out;
    }
};