// @lc code=start
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
var deepestLeavesSum = function (root) {
  let result = 0;
  let maxLevel = -Infinity;

  const dfs = (node, level) => {
    if (node == null) return 0;

    if (level === maxLevel) {
      result += node.val;
    } else if (level > maxLevel) {
      maxLevel = level;
      result = node.val;
    }

    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  };

  dfs(root, 1);

  return result;
};
// @lc code=end
