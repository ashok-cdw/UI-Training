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

cricketPlayers = ["Ashok", "Harish", "Dinesh", "Maamathi", "Kavya", "Ranjith", "Charan", "Hareesh", "Mathi", "Thendral", "Pavithra"]

console.log(cricketPlayers);

// 2

console.log(cricketPlayers.shift())

// 3

console.log(cricketPlayers.length)

// 4

cricketPlayers.push("Ashok")
console.log(cricketPlayers)

// 5

cricketPlayers.sort(function (a, b) {
    return a.toLowerCase() - b.toLowerCase();
});
console.log(cricketPlayers);

// 6

cricketPlayersWithJerseyNumber = cricketPlayers.map((value) => value + " - " + Math.round(Math.random() * 100))
console.log(cricketPlayersWithJerseyNumber);

// 7

cricketPlayersUpperCase = cricketPlayersWithJerseyNumber.map(value => value.toUpperCase())
console.log(cricketPlayersUpperCase);

// Section 3

// 1 - Generate Numbers from 1 to 100

function generateNumbers(start, end) {
    let arr = []
    for (let value = start; value <= end; value++) {
        arr.push(value);
    }
    return arr;
}

let result = generateNumbers(1, 100)
console.log(result)

// 2 - Generate Date in Required Format

function generateDateInFormat(dateObject) {
    let date = (dateObject.getDate() + 1) < 10 ? "0" + (dateObject.getDate() + 1) : dateObject.getDate() + 1;
    let month = (dateObject.getMonth() + 1) < 10 ? "0" + (dateObject.getMonth() + 1) : dateObject.getMonth() + 1;
    let year = dateObject.getFullYear();
    return date + "/" + month + "/" + year;
}

result = generateDateInFormat(new Date());
console.log(result);

// 3 - Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 1.8) + 32;
}

result = celsiusToFahrenheit(32)
console.log(result);


// 4 - Average of Given Numbers
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

function reverseString(stringToBeReversed) {
    return stringToBeReversed.split("").reverse().join("");
}

result = reverseString("Ashok");
console.log(result);