class TreeNode {
    constructor(key, isEnd=false) {
        this.key = key;
        this.children = {}; // childKey: TreeNode
        this.isEnd = isEnd;
    }
}

var Trie = function() {
    this.tree = new TreeNode(null);
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let ptr = this.tree;
    for (let i = 0; i < word.length; i++) {
        const key = word[i];
        if (!ptr.children[key]) ptr.children[key] = new TreeNode(key);
        ptr = ptr.children[key];
    }
    ptr.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let ptr = this.tree;
    for (let i = 0; i < word.length; i++) {
        const key = word[i];
        if (ptr.children[key]) ptr = ptr.children[key];
        else return false;
    }
    if (ptr.isEnd) return true;
    else return false;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let ptr = this.tree;
    for (let i = 0; i < prefix.length; i++) {
        const key = prefix[i];
        if (ptr.children[key]) ptr = ptr.children[key];
        else return false;
    }
    return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */