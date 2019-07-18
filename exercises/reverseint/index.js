// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let string = n.toString();
  let array = string.split("");
  let reversedArray = array.reverse();
  if (reversedArray[reversedArray.length - 1] === "-") {
    let neg = reversedArray.pop();
    reversedArray.unshift(neg);
  }
  return parseInt(reversedArray.join(""));
}

module.exports = reverseInt;
