const calculator = require("./calculator");

describe("add", function () {
  test("add: 1 + 2 returns 3", function () {
    expect(calculator.add(1,2)).toEqual(3);
  });
  test("add: possible to add neg numbers", function () {
    expect(calculator.add(-1, -2)).toEqual(-3);
  });
});

describe("subtract", function () {
  test("subtract: 1 - 2 returns -1", function () {
    expect(calculator.subtract(1, 2)).toEqual(-1);
  });
  test("subtract: possible to add neg numbers", function () {
    expect(calculator.subtract(-1, -2)).toEqual(1);
  });
});

describe("multiply", function () {
  test("multiply: 1 * 2 returns 2", function () {
    expect(calculator.multiply(1, 2)).toEqual(2);
  });
  test("multiply: possible to multiply neg numbers", function () {
    expect(calculator.multiply(1, -2)).toEqual(-2);
  });
  test("multiply: possible to multiply by zero", function () {
    expect(calculator.multiply(1, 0)).toEqual(0);
  });
});

describe("divide", function () {
  test("divide: 10 / 2 returns 5", function () {
    expect(calculator.divide(10, 2)).toEqual(5);
  });
  test("divide: 10 / 0 returns error", function () {
    expect(() => {
      calculator.divide(10, 0);
    }).toThrow("Cannot divide by zero.");
  });
});