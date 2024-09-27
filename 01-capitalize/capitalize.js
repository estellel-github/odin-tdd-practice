const capitalize = function (string) {
  if (!string) {
    throw new Error("Please provide a non-empty string!");
  }
  let newString = string.trim();
  let firstChar = newString.charAt(0);
  if (firstChar.toUpperCase() != firstChar.toLowerCase()) {
    return newString.charAt(0).toUpperCase() + newString.slice(1);
  }
  return newString;
}

console.log(capitalize("0"));

module.exports = capitalize;