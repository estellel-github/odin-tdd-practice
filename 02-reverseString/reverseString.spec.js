const reverseString = require("./reverseString");

describe("reverseString", function () {
  test("returns the inverted string", function () {
    expect(reverseString("abcdef")).toEqual("fedcba");
  });
  test("works with spaces", function () {
    expect(reverseString("hi love")).toEqual("evol ih");
  });
  test("works with numbers", function () {
    expect(reverseString("2 3 8 15 23 42")).toEqual("24 32 51 8 3 2");
  });
  test("works with blank string", function () {
    expect(reverseString("")).toEqual("");
  });
  test("works with emoji", function () {
    expect(reverseString("hi 🤖✅")).toEqual("✅🤖 ih");
  });
});
