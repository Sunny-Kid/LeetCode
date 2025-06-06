/**
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
示例:
给定 1->2->3->4, 你应该返回 2->1->4->3.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (!head || !head.next) return head;
  const next = head.next;
  head.next = swapPairs(next.next);
  next.next = head;
  return next;
};

var swapPairs = function(head) {
  const pre = new ListNode(0);
  pre.next = head;
  let temp = pre;
  while (temp.next !== null && temp.next.next !== null) {
    const start = temp.next;
    const end = temp.next.next;
    temp.next = end;
    start.next = end.next;
    end.next = start;
    temp = start;
  }
  return pre.next;
};
