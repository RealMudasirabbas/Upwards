// // alert("Welcome to Javascript");
// console.log("Welcome to Javascript");

// // alert("Welcome to Javascript");

// /*
// This is  a multiline comment
// This is  a multiline comment
// This is  a multiline comment
// This is  a multiline comment
// */

// // Javascript is a case sensitive language
// //Console.log("Welcome to Javascript"); is not same as console.log("Welcome to Javascript")

// // Document Object Model (DOM)

// // Definition: The Document Object Model (DOM) is a model that is created by the Browser that allows you to access and modify the content of an HTML document.

// // DOM Allow you to:

// //Add, change and remove HTML elements
// //Change attributes of HTML elements (like the 'class' or the 'src' of an image.)
// //Change the CSS
// //React upon page events (click, scroll, form input, hover, etc)

// // DOM Manipulation: getElementById()
// var black_box = document.getElementById("black_box");
// black_box.innerHTML = "content has been changed";

// // Variables

// var firstName = "ShaJar";
// console.log(firstName);
// var lastName = "Laptop";
// console.log(lastName);
// var fullName = firstName + " " + lastName;
// console.log(fullName)
// $car = "BMW";
// _model = "X5";
// document.getElementById("name").innerHTML = firstName + " " + lastName;

// // Data Types

// // String
// // Number
// // Boolean
// // Array
// // Object
// // Function
// // Undefined
// // Null

// // Strings

// var firstName = 'Shajar';
// console.log(typeof firstName); // string
// var lastName = 'Laptop';
// console.log( typeof lastName); // string

// // Concatenation

// var fullName = firstName + ' ' + lastName;
// console.log(fullName); // ShaJar Laptop

// // length property
// console.log(firstName.length); // 6
// console.log(lastName.length); // 6
// console.log(fullName.length); // 13

// // replace method
// console.log(firstName.replace('Shajar', 'Thinkpad')); // Thinkpad

// // Exercise No 1

let firstName = 'Mudasir';
let lastName = 'Abbas';
let dateOfBirth = 2024 - 2005;
let student_info = (document.getElementById('student_message').innerHTML =
    'Hi, my name is ' + firstName +' ' + lastName +'.' +' I am ' + dateOfBirth +' years old and I am learning Javascript.');

console.log(student_info);

// Exercise No 2

let num1 = 101;
let num2 = 7;
let average = (num1 + num2) / 2;
console.log(average);
console.log((document.getElementById('calculatedAverage').innerHTML = average));

// Exercise No 3

let phone1 = '988866552';
let phone2 = '99087612366';
let phone3 = 876543123;

if (phone1.length == 9) {
    console.log('Phone1 is valid');
} else {
    console.log('phone1 is not valid');
}
if (phone2.length == 9) {
    console.log('Phone2 is valid');
} else {
    console.log('phone2 is not valid');
}
if (phone3.toString().length == 9) {
    console.log('Phone3 is valid');
} else {
    console.log('phone3 is not valid');
}

// Exercise No 4
console.log(Math.pow(32, 6));
console.log(32 ** 6);

// Exercise No 5

var NAME;
console.log(
    'NAME variable is valid because we can write variables name in capital letters',
);

var $num1;
console.log(
    '$num1 variable is valid because we can write variables name in starting with $',
);
//var typeof;
console.log(
    'typeof variable is not valid because typeof is a reserved keyword',
);
//var first-name;
console.log(
    'first-name variable is not valid because we cannot use special characters in variable name except underscore and dollar sign',
);

var attempt_2;
console.log(
    'attempt_2 variable is valid because we can use underscore in variable name',
);

//var 2ndAttempt;
console.log(
    '2ndAttempt variable is not valid because we cannot use numbers in starting of a variable name',
);

//var full name;
console.log(
    'full name variable is not valid because we cannot use space in variable name',
);

// Exercise No 6


    var quantity = '25';
    var number = 6;
    var pressure;
    var temperature = null;

    console.log((quantity += quantity)); // 2525
    console.log((7 + 5) / number + 2); // 4
    console.log(pressure); // undefined
    console.log(temperature); // null
    console.log(typeof pressure); // undefined
    console.log(typeof temperature); // object

    // Exercise No 7

    let udemyLink = "www.udemy.com";
    let googleLink = "https://www.google.com";

    udemyLink = udemyLink.replace("", "https://");
    console.log("udemyLink", udemyLink);
    googleLink = googleLink.replace("https://", "");
    console.log("googleLink", googleLink);

    