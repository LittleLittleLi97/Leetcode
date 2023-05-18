class Solution {
public:
    string maxNumToString(int &originNum, int reduceNum, string target) {
        string s = "";
        while (originNum >= reduceNum) {
            originNum -= reduceNum;
            s += target;
        }
        return s;
    }
    string intToRoman(int num) {
        vector<pair<int, string>> v = {
            {1000, "M"},
            {900, "CM"},
            {500, "D"},
            {400, "CD"},
            {100, "C"},
            {90, "XC"},
            {50, "L"},
            {40, "XL"},
            {10, "X"},
            {9, "IX"},
            {5, "V"},
            {4, "IV"},
            {1, "I"}
        };
        string s = "";

        for (auto p : v) {
            s += maxNumToString(num, p.first, p.second);
        }

        return s;
    }
};