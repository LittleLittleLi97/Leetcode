/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {
    var head = new ListNode(0, null);
    var ptr = head;
    for (var i = 0; i < lists.length; i++) {
        ptr = head;
        var list1 = head.next;
        var list2 = lists[i];
        while (list1 && list2) {
            if (list1.val <= list2.val) {
                ptr.next = list1;
                list1 = list1.next;
            } else {
                ptr.next = list2;
                list2 = list2.next
            }
            ptr = ptr.next;
        }
        if (list1) ptr.next = list1;
        if (list2) ptr.next = list2;
    }
    return head.next;
};