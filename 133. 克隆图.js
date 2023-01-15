/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if (!node) return null;
    const map = {};

    function DFS(root) {
        if (!root) return null;
        if (map[root.val]) return map[root.val];

        const now = new Node(root.val, []);
        map[now.val] = now;

        for (let i = 0; i < root.neighbors.length; i++) {
            now.neighbors.push(DFS(root.neighbors[i]));
        }

        return now;
    }
    DFS(node);

    return map[node.val];
};
// var cloneGraph = function(node) {
//     if (!node) return null;
//     const nodeList = new Array(101).fill(0);
//     const originList = new Array(101).fill(0);
//     function DFS(root) {
//         if (nodeList[root.val]) return;
//         const now = new Node(root.val, []);
//         nodeList[root.val] = now;
//         originList[root.val] = root;
//         for (let i = 0; i < root.neighbors.length; i++) {
//             DFS(root.neighbors[i]);
//         }
//     }
//     DFS(node);
//     function Link() {
//         for (let i = 0; i < nodeList.length; i++) {
//             if (!nodeList[i]) continue;
//             const neighbors = originList[i].neighbors;
//             for (let j = 0; j < neighbors.length; j++) {
//                 nodeList[i].neighbors.push(nodeList[neighbors[j].val]);
//             }
//         }
//     }
//     Link();
//     return nodeList[1];
// };