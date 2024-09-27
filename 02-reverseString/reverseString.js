const reverseString = function (string) {
  return Array.from(string).reverse().join("");
}

console.log(reverseString("this is a test string"));

module.exports = reverseString;