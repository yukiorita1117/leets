/*
 * @lc app=leetcode id=1342 lang=javascript
 *
 * [1342] Number of Steps to Reduce a Number to Zero
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  // Input 14
  // 14 /2 => 7
  // 7 - 1 => 6
  // 6 / 2 => 3
  // 3 - 1 => 2
  // 2 / 2 => 1
  // 1 - 1 => 0     sum:: 6

  let result = num;
  let count = 0;
  while (result !== 0) {
    result = result % 2 === 0 ? result / 2 : result - 1;
    count += 1;
  }
  return count;
};
// @lc code=end
