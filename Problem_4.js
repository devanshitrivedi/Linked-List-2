// Time Complexity : O(m+n); m and n is lengths of the two linked lists
// Space Complexity : O(1)
// Did this code successfully run on Leetcode : Yes
// Any problem you faced while coding this : No

// Problem4  (https://leetcode.com/problems/intersection-of-two-linked-lists/)
// Your code here along with comments explaining your approach

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let lenA = 0;
    let lenB = 0;
    let dummyA = headA;
    let dummyB = headB;
    // Determine length of LL 1
    while (dummyA !== null) {
        dummyA = dummyA.next;
        lenA++;
    }
    // Determine length of LL 2
    while (dummyB !== null) {
        dummyB = dummyB.next;
        lenB++;
    }

    dummyA = headA;
    dummyB = headB;

    // If lenA is more, increase the pointer till length is same as B
    while (lenA > lenB) {
        dummyA = dummyA.next;
        lenA--;
    }
    // If lenB is more, increase the pointer till length is same as A
    while (lenB > lenA) {
        dummyB = dummyB.next;
        lenB--;
    }
    // Move both pointer and check if they are same. If so, that is the intersecting node
    while (dummyA !== dummyB) {
        dummyA = dummyA.next;
        dummyB = dummyB.next;
    }
    return dummyA;
};