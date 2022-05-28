/**
 * 二分探索
 * @param Array arr ソート済みの探索対象配列
 * @param Int target 探索する値
 * @return Array 探索結果の添字 見つからなかった場合は-1を返す
 */
function binarySearch(arr, target) {
  let idx = -1;
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      idx = mid;
      break;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return idx;
}

const result = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4);
console.log(result);
