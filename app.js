function convertToNumber(str) {
  try {
    const number = Number(str);
    if (isNaN(number)) {
      throw new Error("Invalid number");
    }
    return number;
  } catch (error) {
    return "Invalid number";
  }
}
console.log(convertToNumber("42")); // Output: 42
console.log(convertToNumber("3.14")); // Output: 3.14
console.log(convertToNumber("Hello")); // Output: Invalid number
