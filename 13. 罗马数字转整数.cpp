class Solution {
public:
    int romanToInt(string s) {
        map<string, int> m = {
            {"M", 1000},
            {"CM", 900},
            {"D", 500},
            {"CD", 400},
            {"C", 100},
            {"XC", 90},
            {"L", 50},
            {"XL", 40},
            {"X", 10},
            {"IX", 9},
            {"V", 5},
            {"IV", 4},
            {"I", 1}
        };

        int out = 0;
        int index = 0;
        while (index < s.length()) {
            if (m.find(s.substr(index, 2)) != m.end()) {
                out += m[s.substr(index, 2)];
                index += 2;
            } else {
                out += m[s.substr(index, 1)];
                index++;
            }
        }

        return out;
    }
};