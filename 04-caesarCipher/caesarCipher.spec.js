const caesarCipher = require("./caesarCipher");

describe("Caesar Cipher", function () {
  test("shift abcd by 1 gives bcde", function () {
    expect(caesarCipher("abcd", 1)).toEqual("bcde");
  });
  test("the cipher handles wrapping correctly", function () {
    expect(caesarCipher("xyZ", 3)).toEqual("abC");
  });
  test("the cipher handles neg numbers correctly", function () {
    expect(caesarCipher("deF", -3)).toEqual("abC");
  });
  test("the cipher handles large factors correctly", function () {
    expect(caesarCipher("xyZ", 42)).toEqual("noP");
  });
  test("the cipher is case-sensitive", function () {
    expect(caesarCipher("abCD", 1)).toEqual("bcDE");
  });
  test("non-letter characters remain the same", function () {
    expect(caesarCipher("Here is a test, $*3`, 🤖!.:", 1)).toEqual("Ifsf jt b uftu, $*3`, 🤖!.:");
  });
});