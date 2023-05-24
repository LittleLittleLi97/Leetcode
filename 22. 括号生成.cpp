class Solution {
public:
    vector<string> v;
    void DFS(int left, int right, int n, string s) {
        if (left == n && right == n) {
            v.push_back(s);
            return;
        }
        if (left < n) DFS(left + 1, right, n, s + "(");
        if (right < left) DFS(left, right + 1, n , s + ")");
    }
    vector<string> generateParenthesis(int n) {
        DFS(0, 0, n, "");
        return v;
    }
};