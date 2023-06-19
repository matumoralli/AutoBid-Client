export default function sortCommentsAndBids(
  commentsArray = [],
  bidsArray = []
) {
  let combinedArr = [...commentsArray, ...bidsArray];

  return mergeSort(combinedArr);

  function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
  }

  function merge(left, right) {
    let sortedArr = [];
    while (left.length && right.length) {
      if (left[0].createdAt < right[0].createdAt) {
        sortedArr.push(left.shift());
      } else {
        sortedArr.push(right.shift());
      }
    }
    return [...sortedArr, ...left, ...right];
  }
}
