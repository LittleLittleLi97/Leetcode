/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* swapPairs(ListNode* head) {
        if (!head) return head;

        ListNode* dummyHead = new ListNode(0, head);
        ListNode* first = dummyHead;
        ListNode* second = dummyHead->next;

        while (second && second->next) {
            first->next = second->next;
            second->next = second->next->next;
            first->next->next = second;

            first = second;
            second = first->next;
        }

        return dummyHead->next;
    }
};