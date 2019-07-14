// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

let array = [5, 4, 3, 2, 1];
let size = 2;

function chunk(array, size) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    if (output.length === 0) {
      let subArray = [array[i]];
      output.push(subArray);
    } else if (output[output.length - 1].length === size) {
      let subArray = [array[i]];
      output.push(subArray);
    } else if (output[output.length - 1].length < size) {
      output[output.length - 1].push(array[i]);
    }
  }
  return output;
}

console.log(chunk(array, size));

module.exports = chunk;
