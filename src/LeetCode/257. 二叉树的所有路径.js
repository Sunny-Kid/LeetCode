/** 
 * 给定一个二叉树，返回所有从根节点到叶子节点的路径。

说明: 叶子节点是指没有子节点的节点。

示例:

输入:

   1
 /   \
2     3
 \
  5

输出: ["1->2->5", "1->3"]
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  let res = [];
  if (!root) return res;

  if (!root.left && !root.right) {
    return [`${root.val}`];
  }

  const leftPath = binaryTreePaths(root.left);
  const rightPath = binaryTreePaths(root.right);

  leftPath.forEach(path => res.push(`${root.val}->${path}`));
  rightPath.forEach(path => res.push(`${root.val}->${path}`));

  return res;
};
