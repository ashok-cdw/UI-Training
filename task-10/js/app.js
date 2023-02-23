// Section 1

console.log(1 + 2);
console.log("apple" + "orange");
console.log(1 + 2 + "apple");
console.log("apple" + 1 + 2);
console.log(1 + true);
console.log(0 == false);
console.log(1 === true);
console.log(2 == "2");

// Section 2

// 1

let cricketPlayers = [
  "Ashok",
  "Harish",
  "Dinesh",
  "Maamathi",
  "Kavya",
  "Ranjith",
  "Charan",
  "Hareesh",
  "Mathi",
  "Thendral",
  "Pavithra",
];

console.log(cricketPlayers);

// 2

console.log(cricketPlayers.shift());

// 3

console.log(cricketPlayers.length);

// 4

cricketPlayers.push("Ashok");
console.log(cricketPlayers);

// 5

cricketPlayers.sort();
console.log(cricketPlayers);

// 6

let cricketPlayersWithJerseyNumber = cricketPlayers.map(
  (value) => value + " - " + Math.round(Math.random() * 100)
);
console.log(cricketPlayersWithJerseyNumber);

// 7

let cricketPlayersUpperCase = cricketPlayers.map((value) =>
  value.toUpperCase()
);
console.log(cricketPlayersUpperCase);

// Section 3

// 1 - Generate Numbers from 1 to 100

/*
@description - This function prints numbers in the given range
@params - start,end
*/
function generateNumbers(start, end) {
  for (let value = start; value <= end; value++) {
    console.log(value);
  }
}
generateNumbers(1, 100);


// 2 - Generate Date in Required Format

/*
@description - This function print date in format : DD/MM/YYYY
@params - dateObject
*/
function generateDateInFormat(dateObject) {
  return dateObject.toLocaleDateString();
}
let result = generateDateInFormat(new Date());
console.log(result);


// 3 - Celsius to Fahrenheit

/*
@description - This function returns temperature from celcius to fahrenheit
@params - celsius
*/
function celsiusToFahrenheit(celsius) {
  return celsius * 1.8 + 32;
}

result = celsiusToFahrenheit(32);
console.log(result);


// 4 - Average of Given Numbers

/*
@description - This function returns the average of given list of numbers
@params - arrayOfNumbers
*/
function averageOfNumbers(arrayOfNumbers) {
  let sum = arrayOfNumbers.reduce(function (total, currentNumber) {
    return total + currentNumber;
  }, 0);
  let average = sum / arrayOfNumbers.length;
  return average;
}

result = averageOfNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(result);


// 5 - Reverse a given string

/*
@description - This function returns reversed string
@params - stringToBeReversed
*/
function reverseString(stringToBeReversed) {
  return stringToBeReversed.split("").reverse().join("");
}

result = reverseString("Ashok");
console.log(result);
