class Solution {
public:
    int reverse(int x) {
        int out = 0;
        while (x) {
            if (out < INT_MIN / 10 || out > INT_MAX / 10) return 0;
            out = out * 10 + x % 10;
            x = x / 10;
        }
        return out;
    }
};