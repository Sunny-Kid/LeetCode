/**
 * 给你一棵二叉树的根节点，返回该树的直径。
二叉树的 直径 是指树中任意两个节点之间最长路径的 长度 。这条路径可能经过也可能不经过根节点 root 。
两节点之间路径的 长度 由它们之间边数表示。

示例 1：
输入：root = [1,2,3,4,5]
输出：3
解释：3 ，取路径 [4,2,1,3] 或 [5,2,1,3] 的长度。

示例 2：
输入：root = [1,2]
输出：1

提示：
树中节点数目在范围 [1, 104] 内
-100 <= Node.val <= 100
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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let answer = 1;
  const dfs = node => {
    if (node === null) return 0;
    // 左儿子为根的子树的深度
    const left = dfs(node.left);
    // 右儿子为根的子树的深度
    const right = dfs(node.right);
    // 计算节点数即 L + R + 1 并更新 ans
    answer = Math.max(answer, left + right + 1);
    // 返回该节点为根的子树的最大高度
    return Math.max(left, right) + 1;
  };
  dfs(root);
  return answer - 1;
};
