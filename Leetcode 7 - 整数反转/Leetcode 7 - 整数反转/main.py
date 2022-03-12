class Solution:
    def reverse(self, x: int) -> int:
        token = ""
        if x < 0:
            token = "-"
            x = -x

        s = str(x)
        out = ""
        for i in s:
            out = i + out
        out = token + out
        out = int(out)
        if out < -pow(2,31) or out > pow(2,31) - 1:
            return 0
        return out