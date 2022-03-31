/*
 * @lc app=leetcode id=1266 lang=javascript
 *
 * [1266] Minimum Time Visiting All Points
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */

//  Runtime=79ms
var minTimeToVisitAllPoints = function (points) {
  let result = 0;
  points.reduce((prev, cur) => {
    if (prev[0] === cur[0] && prev[1] === cur[1]) return prev;

    const diffX = Math.abs(cur[0] - prev[0]);
    const diffY = Math.abs(cur[1] - prev[1]);

    if ((diffX === 0) | (diffY === 0)) {
      result += Math.abs(diffY + diffX);

      return cur;
    } else if (diffX > diffY) {
      const quotient = Math.floor(diffX / diffY) * diffY;
      const remainder = diffX % diffY;

      result = result + quotient + remainder;
      return cur;
    } else if (diffY > diffX) {
      const quotient = Math.floor(diffY / diffX) * diffX;
      const remainder = diffY % diffX;

      result = result + quotient + remainder;
      return cur;
    } else if (diffX === diffY) {
      result += Math.abs(diffX);

      return cur;
    }
  }, points[0]);

  return result;
};
// @lc code=end

// Runtimeはこちらの方が遅くなる Runtime=100ms
var otherMinTimeToVisitAllPoints = function (points) {
  let result = 0;
  points.reduce((prev, cur) => {
    if (prev[0] === cur[0] && prev[1] === cur[1]) return prev;

    const diffX = Math.abs(cur[0] - prev[0]);
    const diffY = Math.abs(cur[1] - prev[1]);

    result += Math.max(Math.abs(diffX), Math.abs(diffY));

    return cur;
  }, points[0]);

  return result;
};
