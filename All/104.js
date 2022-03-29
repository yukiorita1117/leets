/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
 */

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
var maxDepth = function (root) {
  if (root == null) return 0;

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;

  //  一番端っこまでいったら1を返す
  // Math.max(null,null)+1だから必ず 1 になる
  // その後分岐のところまで 1 は返るが逆の枝葉も必ず 1 が返ってきているので
  // Math.max(1,1)+1 で 深さ3なら このようになる。
  // これは深さが深ければその分の分岐が増えるので加算されるだけ。
};

// @lc code=end
