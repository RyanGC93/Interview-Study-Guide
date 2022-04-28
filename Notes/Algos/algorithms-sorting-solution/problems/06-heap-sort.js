function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function heapify(array, n, i) {
  let largest = i;
  let l = 2 * i + 1;
  let r = 2 * i + 2;
  if (l < n && array[l] > array[largest]) {
    largest = l;
  }
  if (r < n && array[r] > array[largest]) {
    largest = r;
  }
  if (largest !== i) {
    swap(array, i, largest);
    heapify(array, n, largest);
  }
}




function heapSort(array) {
  // Build the heap
  for (let i = Math.floor(array.length / 2); i >= 0; i--) {
    heapify(array, array.length, i);
  }

  // Sort the heap
  for (let i = array.length - 1; i >= 0; i--) {
    swap(array, 0, i);
    heapify(array, i, 0);
  }
  return array;
}


  
  
  module.exports = {
    heapSort
  };
  