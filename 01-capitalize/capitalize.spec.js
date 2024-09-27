const capitalize = require("./capitalize");

describe("capitalize", function () {
  test("returns the string with 1st letter capitalized", function () {
    expect(capitalize("this is a test string")).toEqual(
      "This is a test string"
    );
  });
  test("throws error if string is empty", function () {
    expect(() => {
      capitalize("");
    }).toThrow("Please provide a non-empty string!");
  });

});