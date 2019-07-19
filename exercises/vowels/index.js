// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i).toLowerCase() === "a") {
      count++;
    } else if (str.charAt(i).toLowerCase() === "e") {
      count++;
    } else if (str.charAt(i).toLowerCase() === "i") {
      count++;
    } else if (str.charAt(i).toLowerCase() === "o") {
      count++;
    } else if (str.charAt(i).toLowerCase() === "u") {
      count++;
    }
  }
  return count;
}

module.exports = vowels;
