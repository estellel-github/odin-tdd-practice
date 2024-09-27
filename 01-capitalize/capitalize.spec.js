const capitalize = require("./capitalize");

describe("capitalize", function () {
  test("Turns lower-case first char to upper-case", function () {
    expect(capitalize("test")).toEqual("Test");
  });
  test("Maintains upper-case first char", function () {
    expect(capitalize("Test")).toEqual("Test");
  });
  test("Ignores first char if not letter", function () {
    expect(capitalize("123Test")).toEqual("123Test");
  });
  test("Maintains case on rest of string", function () {
    expect(capitalize("tEsT")).toEqual("TEsT");
  });
  test("Works with multiple words", function () {
    expect(capitalize("test with multiple words")).toEqual(
      "Test with multiple words"
    );
  });
  test("Works on single character string", function () {
    expect(capitalize("t")).toEqual("T");
  });
  test("Removes leading spaces", function () {
    expect(capitalize("   test with leading space")).toEqual(
      "Test with leading space"
    );
  });
  test("throws error if input is non-truthy", function () {
    const nonTruthyValues = [null, undefined, "", 0, NaN, false];
    nonTruthyValues.forEach((value) => {
      expect(() => {
        capitalize(value);
      }).toThrow("Please provide a non-empty string!");
    });
  });
});
