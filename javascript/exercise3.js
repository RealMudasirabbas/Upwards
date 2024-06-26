//

const userInput = document.getElementById("temp")
const tempBtn = document.getElementById("temp-btn")
const resultExe1 = document.getElementById("result-1")

function fahrenheitToCelsius(fahrenheit) {
    const celsius = (5 / 9) * (fahrenheit - 32)
    const roundOffcelsius = celsius.toFixed(2)
    return roundOffcelsius
}

tempBtn.addEventListener("click", () => {
    const inputVal = userInput.value
    const result = fahrenheitToCelsius(inputVal)
    resultExe1.innerText =
        "The Temperature converted from Fahrenheit to Celsius is: " + result

    return result
})

// console.log(fahrenheitToCelsius(userInput))

// Print in the list below the years when the World Cup of Soccer will happen from 2022 to 2050. Remember that the World Cup happens every 4 years
const yearsList = document.getElementById("year-list")
const footballWorldCup = []

for (let i = 2022; i < 2051; i++) {
    if (i % 4 === 2) {
        const footballYear = footballWorldCup.push(i)
    }
}

for (let i = 0; i < footballWorldCup.length; i++) {
    yearsList.children[
        i
    ].innerText = `Football World Cup will happen in this year: ${footballWorldCup[i]}`
}

// console.log(footballWorldCup);

// Use the input fields below to inform two grades and the number of absences of a student.
//Follow the rules below to inform the result:

// Minimum 70% presence is required to be approved (total number of classes is 20)
// Minimum average of 6.5 is required to be approved
// If the student fails, we need to inform what was the reason (absences, insufficient grade or both.)

const gradeOne = document.getElementById("grade-1")
const gradeTwo = document.getElementById("grade-2")
const absences = document.getElementById("absence")
const gradeBtn = document.getElementById("grade-btn")
const resultExe2 = document.getElementById("result-2")

function percentageOfClasses() {
    const totalClasses = 20
    const presence = totalClasses - absences.value
    const percentageOfPresence = (presence / totalClasses) * 100

    return percentageOfPresence + "%"
}

// console.log(percentageOfClasses(12))

function calculateAverage(grade1, grade2) {
    const average = (grade1 + grade2) / 2
    return average
}

// console.log(calculateAverage(45,78));

// calculate Absences

function calculateAbsences(leaves) {
    const totalClasses = 20
    const absences = totalClasses - leaves

    return absences
}

gradeBtn.addEventListener("click", () => {
    if (gradeOne.value && gradeTwo.value) {
        const inputVal1 = gradeOne.value
        const inputVal2 = gradeTwo.value
        const absenceOfStudent = absences.value

        const percentageResultOfClasses = percentageOfClasses()

        const averageResultOfGrades = calculateAverage(inputVal1, inputVal2)

        const leaves = calculateAbsences(absenceOfStudent)

        if (averageResultOfGrades >= 6.5 || percentageResultOfClasses >= 70) {
            const result =
                (resultExe2.innerText = `Student passed with average Grades ${averageResultOfGrades} and with the presence percentage of ${parseInt(
                    percentageResultOfClasses,
                ).toPrecision(2)}`)

            return result
        } else if (averageResultOfGrades >= 6.5) {
            const result = (resultExe2.innerText =
                "Student passed with average Grades of " +
                averageResultOfGrades +
                "%")

            return result
        } else if (percentageResultOfClasses >= 70) {
            const result =
                (resultExe2.innerText = `Student passed with the presence percentage of ${parseInt(
                    percentageResultOfClasses,
                ).toPrecision(2)}`)

            return result
        } else {
            const result =
                (resultExe2.innerText = `Student failed due to average less than ${averageResultOfGrades} Grades and with that much absences:${parseInt(
                    percentageResultOfClasses,
                ).toFixed(2)}%`)

            return result
        }
    }
})

// 4) See below the list of sales of an online course.

const sales = [
    {
        student: "Jason Gomes",
        date: "10/06/2018",
        amount: 34.99,
        refundRequested: null,
    },

    {
        student: "Carlos Blue",
        date: "10/06/2018",
        amount: 29.99,
        refundRequested: null,
    },

    {
        student: "Martin Heyes",
        date: "11/06/2018",
        amount: 39.99,
        refundRequested: "13/06/2018",
    },

    {
        student: "Isabella Hopkins",
        date: "11/06/2018",
        amount: 29.99,
        refundRequested: null,
    },

    {
        student: "Andrew Walt",
        date: "12/06/2018",
        amount: 34.99,
        refundRequested: null,
    },
]

const newSalesArray = sales.filter((customer) => {
    if (customer.refundRequested === null) {
        return customer
    }
})



let tBody = document.getElementById("mainBody");
let tFoot = document.getElementById("tmainFoot") 
let sum = 0;

for (let i = 0; i < newSalesArray.length; i++) {
    const createTableData = `<tr> 
    
    <td>${newSalesArray[i].student}</td>
    <td>${newSalesArray[i].date}</td>
    <td>${newSalesArray[i].amount}</td>
    </tr>
    `
    sum+= newSalesArray[i].amount
    tBody.innerHTML += createTableData
    
}

const createNewRow = `
    <tr>
    <td colspan="2">Total Sales
    </td>
    <td> ${sum}</td>
    </tr>
    `
tFoot.innerHTML += createNewRow





// Fill the html table below with the sales and print the total amount of sales in the last line. Don't include the sales that had a refund requested.

// Student	Date	Amount
// Student name goes here	Date goes here	Amount goes here
// Total sold	Total goes here

// Nested If Else alternative




// let isMember = false
// let age = 25

// if (isMember == true || age >= 65) {
//     console.log("Free")
// } else if (age < 18) {
//     console.log("$ 6.00")
// } else {
//     console.log("$ 12.00")
// }
