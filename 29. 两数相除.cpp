class Solution {
public:
    int divide(int dividend, int divisor) {
        bool negative = false;

        // 全都转成正数不成，因为负数比正数的存储范围多一个，那就全都转成负数
        if (dividend < 0) {
            negative = !negative;
        } else {
            dividend = -dividend;
        }
        if (divisor < 0) {
            negative = !negative;
        } else {
            divisor = -divisor;
        }

        int out = 0; // out存储为负数
        while (dividend <= divisor) {
            int nowDiv = divisor;
            int nowOut = 1;

            while (dividend - nowDiv < nowDiv) { // 这里如果使用dividend < nowDiv + nowDiv，nowDiv + nowDiv可能会超出INT_MIN
                nowDiv += nowDiv;
                nowOut += nowOut;
            }
            
            dividend -= nowDiv;
            out -= nowOut;
        }

        if (out == INT_MIN && negative == false) return INT_MAX;
        if (negative == true) return out;
        else return -out;
    }
};