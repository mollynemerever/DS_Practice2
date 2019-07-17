// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      obj[str.charAt(i)] += 1;
    } else {
      obj[str.charAt(i)] = 1;
    }
  }
  let max = 0;
  let char = null;
  for (let key in obj) {
    if (obj[key] > max) {
      max = obj[key];
      char = key;
    }
  }
  return char;
}

module.exports = maxChar;
