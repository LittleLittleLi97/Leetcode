class Solution {
public:
    string convert(string s, int numRows) {
        if (numRows == 1) return s; // 注意这里需要判断行数为1的情况

        vector<string> v(numRows);

        int increment = -1;
        int vPtr = 0;
        for (int i = 0; i < s.length(); i++) {
            v[vPtr] += s[i];
            if (vPtr == 0 || vPtr == numRows - 1) {
                increment = -increment;
            }
            vPtr += increment;
        }

        string out = "";
        for (int i = 0; i < v.size(); i++) {
            out += v[i];
        }
        
        return out;
    }
};