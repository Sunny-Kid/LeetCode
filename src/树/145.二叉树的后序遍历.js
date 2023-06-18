/**
 * 给你一棵二叉树的根节点 root ，返回其节点值的 后序遍历 。

示例 1：


输入：root = [1,null,2,3]
输出：[3,2,1]
示例 2：

输入：root = []
输出：[]
示例 3：

输入：root = [1]
输出：[1]
 

提示：

树中节点的数目在范围 [0, 100] 内
-100 <= Node.val <= 100
 

进阶：递归算法很简单，你可以通过迭代算法完成吗？
 */

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
 * @return {number[]}
 */
// 递归
var postorderTraversal = function(root) {
  if (!root) return [];
  const res = [];
  const postOrder = node => {
    if (!node) return;
    postOrder(node.left);
    postOrder(node.right);
    res.push(node.val);
  };
  postOrder(root);
  return res;
};

// 迭代
var postorderTraversal = function(root) {
  if (!root) return [];
  const res = [];
  const stack = [root];
  while (stack.length) {
    const cur = stack.pop();
    // 总是头部插入，先被插入的在后面。
    res.unshift(cur.val);
    cur.left && stack.push(cur.left);
    cur.right && stack.push(cur.right);
  }
  return res;
};
