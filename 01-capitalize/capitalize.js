const capitalize = function (string) {
  if (!string) {
    throw new Error("Please provide a non-empty string!");
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(capitalize("this is a test string"));

module.exports = capitalize;