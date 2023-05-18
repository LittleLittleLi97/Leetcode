class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
        string pre = strs[0];
        for (int i = 1; i < strs.size(); i++) {
            int index = 0;
            while (index < pre.length() && index < strs[i].length() && pre[index] == strs[i][index]) index++;
            pre = pre.substr(0, index);
        }
        return pre;
    }
};