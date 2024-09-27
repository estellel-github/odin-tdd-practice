const analyzeArray = require("./analyzeArray");

describe("Analyze array", function () {
  test("Analyzes an array of number correctly", function () {
    expect(analyzeArray([0, 5, 10, 15, 20])).toEqual({ average: 10, min: 0, max: 20, length: 5 });
  });
  test("Handles negative integers correctly", function () {
    expect(analyzeArray([0, -5, -10, -15, -20])).toEqual({ average: -10, min: -20, max: 0, length: 5 });
  });
  test("Handles floating point numbers correctly", function () {
    expect(analyzeArray([0, 5.25, 9.75, 15, 20])).toEqual({ average: 10, min: 0, max: 20, length: 5 });
  });
  test("Throws error if array is empty", function () {
    expect(() => {
      analyzeArray([]);
    }).toThrow("Array should not be empty and should contain only numbers.");
  });
  test("Throws error if array doesn't contain numbers only", function () {
    expect(() => {
      analyzeArray([5, "Test", 20]);
    }).toThrow("Array should not be empty and should contain only numbers.");
  });
});
