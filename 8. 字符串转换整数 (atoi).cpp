class Solution {
public:
    int myAtoi(string s) {
        int index = 0;
        bool isNegative = false;
        long int out = 0;

        while (index < s.length() && s[index] == ' ') index++;

        if (index < s.length() && (s[index] == '-' || s[index] == '+')) {
            if (s[index] == '-') isNegative = true;
            index++;
        }

        while (index < s.length() && s[index] >= '0' && s[index] <= '9') {
            out = out * 10 + (s[index] - '0');
            index++;
            if (!isNegative && out > INT_MAX) return INT_MAX;
            if (isNegative && -out < INT_MIN) return INT_MIN;
        }

        if (isNegative) out = -out;
        return out;
    }
};