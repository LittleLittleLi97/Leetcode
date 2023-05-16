class Solution {
public:
    pair<int, int> expandCenter(string s, int left, int right) {
        if (left >= 0 && right < s.length() && s[left] == s[right]) {
            left--;
            right++;
        }
        return {left + 1, right - 1};
    }
    string longestPalindrome(string s) {
        int st = 0;
        int ed = 0;
        for (int i = 0; i < s.length(); i++) {
            auto [ left1, right1 ] = expandCenter(s, i, i);
            auto [ left2, right2 ] = expandCenter(s, i, i + 1);
            cout << left1 << ' ' << right1 << endl;
            cout << left2 << ' ' << right2 << endl;
            if (right1 - left1 > ed - st) {
                st = left1;
                ed = right1;
            }
            if (right2 - left2 > ed - st) {
                st = left2;
                ed = right2;
            }
        }
        cout << st << ' ' << ed;
        return s.substr(st, ed - st + 1);
    }
};