// 

//const userInput = parseInt(prompt("Enter the temperature: "))

// function fahrenheitToCelsius(fahrenheit) {
//     const celsius = (5/9) * (fahrenheit - 32)
//     const roundOffcelsius = celsius.toFixed(2)
//     return roundOffcelsius;
// }

// console.log(fahrenheitToCelsius(userInput))

// Print in the list below the years when the World Cup of Soccer will happen from 2022 to 2050. Remember that the World Cup happens every 4 years
const yearsList = document.getElementById("year-list")
const footballWorldCup = [];

for (let i = 2022; i < 2051; i++){
        if(i % 4 === 2){
            const footballYear = footballWorldCup.push(i);
        }
}

for (let i = 0; i < footballWorldCup.length; i++){
    yearsList.children[i].innerText = `Football World Cup year is: ${footballWorldCup[i]}`;
}


console.log(footballWorldCup);

// Use the input fields below to inform two grades and the number of absences of a student. 
//Follow the rules below to inform the result:

// Minimum 70% presence is required to be approved (total number of classes is 20)
// Minimum average of 6.5 is required to be approved
// If the student fails, we need to inform what was the reason (absences, insufficient grade or both.)

