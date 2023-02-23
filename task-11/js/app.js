let calculator = {
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
        return number1 % number2
    }
}

console.log("Addition : ", calculator.add(10, 20));
console.log("Subtraction : ", calculator.subtract(10, 20));
console.log("Multiplication : ", calculator.multiply(10, 20));
console.log("Division : ", calculator.divide(10, 20));
console.log("Modulo : ", calculator.modulo(10, 20));