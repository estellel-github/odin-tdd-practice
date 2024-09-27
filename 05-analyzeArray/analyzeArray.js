const analyzeArray = function (array) {
  let hasOnlyNumbers = array.every((element) => typeof element === "number");
  if (!hasOnlyNumbers || array.length === 0) {
    throw new Error("Array should not be empty and should contain only numbers.");
  }
  const average = array.reduce(function (avg, value, _, { length }) {
    return avg + value / length;
  }, 0);
  const min = Math.min(...array);
  const max = Math.max(...array);
  const length = array.length;
  const object = {
    average,
    min,
    max,
    length,
  };
  return object;
};

module.exports = analyzeArray;