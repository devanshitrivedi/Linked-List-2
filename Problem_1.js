/*TC: 
next():
avg: O(1) -> amortised TC
For each next() operation,
    1. Add the right and then all lefts OR
    2. Dont add anything and pop()
For expensive time when there are many left nodes, each consecutive next() call will be O(1). Hence, average TC is O(1)
worst: O(h)

hasnext(): O(1)

SC: O(h)
/*
// Did this code successfully run on Leetcode : Yes
// Any problem you faced while coding this : No


// Your code here along with comments explaining your approach
// Problem1 (https://leetcode.com/problems/binary-search-tree-iterator/)


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {
    // Initialise a stach and add all left nodes
    this.stack = new Array();
    this.dfsLeft(root);
};

/**
 * @return {void}
 */
BSTIterator.prototype.dfsLeft = function (root) {
    while (root !== null) {
        this.stack.push(root);
        root = root.left;
    }
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
    // Get the top node and if it has a right child, add all the right childs left nodes
    let node = this.stack.pop();
    if (node.right !== null) {
        this.dfsLeft(node.right);
    }
    return node.val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
    // True is stack is empty
    return this.stack.length > 0;
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
