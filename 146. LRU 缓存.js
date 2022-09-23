// 直接利用js的map

// /**
//  * @param {number} capacity
//  */
//  var LRUCache = function(capacity) {
//     this.capacity = capacity;
//     this.m = new Map();
// };

// /** 
//  * @param {number} key
//  * @return {number}
//  */
// LRUCache.prototype.get = function(key) {
//     const res = this.m.get(key);
//     if (res !== undefined) {
//         this.m.delete(key);
//         this.m.set(key, res);
//         return res;
//     } else {
//         return -1;
//     }
// };

// /** 
//  * @param {number} key 
//  * @param {number} value
//  * @return {void}
//  */
// LRUCache.prototype.put = function(key, value) {
//     const res = this.m.get(key);
//     if (res !== undefined) {
//         this.m.delete(key);
//     }
//     this.m.set(key, value);

//     if (this.m.size > this.capacity) {
//         const key = this.m.keys().next().value;
//         this.m.delete(key);
//     }
// };

// /**
//  * Your LRUCache object will be instantiated and called as such:
//  * var obj = new LRUCache(capacity)
//  * var param_1 = obj.get(key)
//  * obj.put(key,value)
//  */


// 手动实现双向链表

/**
 * @param {number} capacity
 */

 class LinkNode {
    constructor() {
        this.key = null;
        this.value = null;
        this.next = null;
        this.prev = null;
    }
}

class List {
    constructor() {
        this.head = new LinkNode();
        this.tail = new LinkNode();
        this.head.next = this.tail;
        this.head.prev = this.tail;
        this.tail.next = this.head;
        this.tail.prev = this.head;

        this.length = 0;
    }
    removeNode(node) {
        const prevNode = node.prev;
        const nextNode = node.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;

        this.length--;
    }
    addNode(node) {
        const prevNode = this.tail.prev;
        prevNode.next = node;
        this.tail.prev = node;
        node.prev = prevNode;
        node.next = this.tail;
        
        this.length++;
    }
}


var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.m = new Map();
    this.queue = new List();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    const node = this.m.get(key);
    if (node !== undefined) {
        this.queue.removeNode(node);
        this.queue.addNode(node);
        return node.value;
    } else {
        return -1;
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let node = this.m.get(key);
    if (node !== undefined) {
        this.queue.removeNode(node);
        node.value = value;
    } else {
        node = new LinkNode();
        node.key = key;
        node.value = value;
        this.m.set(key, node);
    }
    this.queue.addNode(node);

    if (this.queue.length > this.capacity) {
        const willRemoveNode = this.queue.head.next;
        this.queue.removeNode(willRemoveNode);
        this.m.delete(willRemoveNode.key);
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */