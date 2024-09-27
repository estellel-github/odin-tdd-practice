// 65-90 are the ranges for A-Z (uppercase letters)
// 97-122 are the ranges for a-z (lowercase letters)
// 26 is the number of letters in the alphabet

const caesarCipher = function (string, factor) {
  newStringArray = string.split("").map((char) => {
    if (char.match(/[a-z]/i)) {
      let base = char === char.toUpperCase() ? 65 : 97;
      let charCode = char.charCodeAt(0);
      let adjustedFactor = (charCode - base + factor) % 26;
      if (adjustedFactor < 0) {
        adjustedFactor += 26;
      }
      return String.fromCharCode(adjustedFactor + base);
    }
    return char;
  });
  return newStringArray.join("");
};

console.log(caesarCipher("AbcdefghijkLmnopqrstuvwxyZ", -1));

module.exports = caesarCipher;