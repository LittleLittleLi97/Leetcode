// 递归 画个图更好理解
var reverseList2 = function(head) {
    if (head === null || head.next === null) {
        return head;
    }
    const newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
};

// 迭代
var reverseList = function(head) {
    const dummyHead = new ListNode();
    dummyHead.next = null;

    let ptr = head;
    while(ptr) {
        const nowNode = ptr;
        ptr = ptr.next;
        nowNode.next = dummyHead.next;
        dummyHead.next = nowNode;
    }

    return dummyHead.next;
};