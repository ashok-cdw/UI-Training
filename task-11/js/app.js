// calculator object

const calculator = {
  add: function (number1, number2) {
    return number1 + number2;
  },
  subtract: function (number1, number2) {
    return number1 - number2;
  },
  multiply: function (number1, number2) {
    return number1 * number2;
  },
  divide: function (number1, number2) {
    return number1 / number2;
  },
  modulo: function (number1, number2) {
    return number1 % number2;
  },
};

let number1 = 10;
let number2 = 20;

if (!(isNaN(number1) || isNaN(number2))) {
  console.log("Addition : ", calculator.add(number1, number2));
  console.log("Subtraction : ", calculator.subtract(number1, number2));
  console.log("Multiplication : ", calculator.multiply(number1, number2));
  console.log("Division : ", calculator.divide(number1, number2));
  console.log("Modulo : ", calculator.modulo(number1, number2));
} else {
  console.error("Input should be a number");
}
