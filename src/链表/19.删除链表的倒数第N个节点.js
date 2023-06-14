/**
 * 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

示例：

给定一个链表: 1->2->3->4->5, 和 n = 2.

当删除了倒数第二个节点后，链表变为 1->2->3->5.
说明：

给定的 n 保证是有效的。

进阶：

你能尝试使用一趟扫描实现吗？
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  const dummy = new ListNode(0, head);
  let first = head;
  let length = 0;
  while (first !== null) {
    length++;
    first = first.next;
  }
  length -= n;
  first = dummy;
  while (length) {
    first = first.next;
    length--;
  }
  first.next = first.next.next;
  return dummy.next;
};

var removeNthFromEnd = function (head, n) {
  const dummy = new ListNode(0, head);
  let first = head;
  let second = dummy;
  for (let i = 0; i < n; i++) {
    first = first.next;
  }
  while (first !== null) {
    first = first.next;
    second = second.next;
  }
  second.next = second.next.next;
  return dummy.next;
}

var removeNthFromEnd = function (head, n) {
  const dummy = new ListNode(0, head);
  const stack = [];
  let cur = dummy;
  while (cur !== null) {
    stack.push(cur);
    cur = cur.next;
  }
  for (let i = 0; i < n; i++) {
    stack.pop();
  }
  const prev = stack[stack.length - 1];
  prev.next = prev.next.next;
  return dummy.next;
}
