/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function (nums, index) {
  // nums    [0,1,2,3,4]
  // index   [0,1,2,2,1]
  let result = [];

  for (let i = 0; i < nums.length; ++i) {
    // result[index[i]] = nums[i];
    result.splice(index[i], 0, nums[i]);
  }

  return result;
};
