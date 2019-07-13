// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

let stringA = "A tree, a life, a bench";
let stringB = "A tree, a fence, a yard";

function anagrams(stringA, stringB) {
  let revisedA = stringA.replace(/\W/g, "").toLowerCase();
  let revisedB = stringB.replace(/\W/g, "").toLowerCase();
  console.log(revisedA);
  console.log(revisedB);

  if (revisedA.length !== revisedB.length) {
    return false;
  }
  let objA = {};
  let objB = {};
  for (let i = 0; i < revisedA.length; i++) {
    if (objA[revisedA[i]]) {
      objA[revisedA[i]] += 1;
    } else {
      objA[revisedA[i]] = 1;
    }
  }
  console.log(objA);

  for (let j = 0; j < revisedB.length; j++) {
    if (objB[revisedB[j]]) {
      objB[revisedB[j]] += 1;
    } else {
      objB[revisedB[j]] = 1;
    }
  }

  for (key in objA) {
    if (objA[key] !== objB[key] || !objB[key]) {
      return false;
    }
  }
  return true;
}

console.log(anagrams(stringA, stringB));

module.exports = anagrams;
