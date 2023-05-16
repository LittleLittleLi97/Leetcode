class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        map<char, int> m;
        int left = 0;
        int maxLength = 0;
        for (int right = 0; right < s.length(); right++) {
            char nowSymbol = s[right];
            if (m.find(nowSymbol) != m.end() && m[nowSymbol] >= left) {
                left = m[nowSymbol] + 1;
            }
            m[nowSymbol] = right;
            maxLength = max(right - left + 1, maxLength);
        }
        return maxLength;
    }
};