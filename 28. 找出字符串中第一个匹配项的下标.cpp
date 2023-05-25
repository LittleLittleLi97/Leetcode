class Solution {
public:
    int strStr(string haystack, string needle) {
        int length = needle.length();

        for (int i = 0; i < (int)haystack.length() - length + 1; i++) {
            if (haystack.substr(i, length) == needle) return i;
        }

        return -1;
    }
};