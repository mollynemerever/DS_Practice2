// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

let str = "a short sentence";

function capitalize(str) {
  let output = str.charAt(0).toUpperCase();
  let space = " ";

  for (let i = 1; i < str.length; i++) {
    if (str.charAt(i - 1) === space) {
      output += str.charAt(i).toUpperCase();
    } else {
      output += str.charAt(i);
    }
  }
  return output;
}

console.log(capitalize(str));

module.exports = capitalize;
