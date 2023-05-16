/**
 * Definition for singly-linked list->
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
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode* dummyHead = new ListNode();
        ListNode* ptr = dummyHead;
        int increment = 0;
        while (l1 && l2) {
            int value = l1->val + l2->val + increment;
            increment = value / 10;
            value %= 10;

            ptr->next = new ListNode(value);
            ptr = ptr->next;
            l1 = l1->next;
            l2 = l2->next;
        }
        while (l1) {
            int value = l1->val + increment;
            increment = value / 10;
            value %= 10;
            ptr->next = new ListNode(value);
            ptr = ptr->next;
            l1 = l1->next;
        }
        while (l2) {
            int value = l2->val + increment;
            increment = value / 10;
            value %= 10;
            ptr->next = new ListNode(value);
            ptr = ptr->next;
            l2 = l2->next;
        }
        if (increment) {
            ptr->next = new ListNode(increment);
        }
        return dummyHead->next;
    }
};