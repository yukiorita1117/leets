/*
 * @lc app=leetcode id=938 lang=javascript
 *
 * [938] Range Sum of BST
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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  // left nodeへの移動は加算しないのか...?
  // であれば法則があるので回答できそう。
  // まず、lowの次のnodeがleftかrightか調べる必要がある
  //    left nodeというよりも起点よりも小さいものはsumに含めない
  //
  // [10,5,15,3,7,null,18]
  //  0  1  2 3 4  5   6
  //   low = 7, high = 15

  //  注意:: TreeNode型なのでmappingといったarray methodは使えない
  console.log("root left", root.left);
  console.log("root right", root.right);
  console.log("root val", root.val);

  let result = 0;

  const sumOperation = (node) => {
    if (node === null) return;

    if (node.val >= low && node.val <= high) {
      result = result + node.val;
    }
    // 最初は上記例で言うと 10である
    // その10は条件を満たすので加算対象
    // 次に10の leftとrightを 再帰的に sumOperationへ流す
    // node.left = 5   /  node.right = 15
    // left or right は条件に見合ってなかろうがその子nodeが条件満たす可能性は大いにあるので探索対象にすべき
    sumOperation(node.left);
    sumOperation(node.right);
  };

  sumOperation(root);

  return result;
};
// @lc code=end
