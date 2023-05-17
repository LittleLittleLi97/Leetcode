class Solution {
public:
    bool isPalindrome(int x) {
        if (x < 0 || (x % 10 == 0 && x != 0)) return false;

        int reverseSome = 0;
        while (x > reverseSome) {
            reverseSome = reverseSome * 10 + x % 10;
            x = x / 10;
        }

        return x == reverseSome || x == reverseSome / 10;
    }
};
// class Solution {
// public:
//     bool isPalindrome(int x) {
//         string s = to_string(x);
//         int left = 0;
//         int right = s.length() - 1;
//         while (left < right) {
//             if (s[left] != s[right]) return false;
//             left++;
//             right--;
//         }
//         return true;
//     }
// };