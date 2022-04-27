
function insertionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var temp = arr[i];
    for (var j = i - 1; j >= 0; j--) {
      if (arr[j] > temp) {
        arr[j + 1] = arr[j];
        arr[j] = temp;
      } else {
        arr[j + 1] = temp;
        break;
      }
    }
  }
  return arr;
}
module.exports = {
  insertionSort
};
