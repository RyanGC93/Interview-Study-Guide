// Implement Bubble Sort

function swap(array, idx1, idx2) {
  let temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
}

function bubbleSort(array) {
  for(let i = 0 ; i < array.length; i++){
    for(let j =0; j < array.length -1 ;  j++){
      if(array[j] > array[j+1]) swap(array,j,j+1)
    }
  }
  return array
}

module.exports = {
  bubbleSort,
  swap
};
