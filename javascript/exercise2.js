// 1) Create a function to convert Celsius to Fahrenheit. Use it to convert the temperatures below:

// The formula for the conversion is: F = (9 * C / 5) + 32

function celsiusToFahrenheit(temp) {
    const fahrenheit = (9 * temp / 5) + 32;
    console.log(fahrenheit);
    return fahrenheit;
}

console.log("38 Celsius to Fahrenheit:" ,celsiusToFahrenheit(38));
console.log("24 Celsius to Fahrenheit:", celsiusToFahrenheit(24));
console.log("-1 Celsius to Fahrenheit:", celsiusToFahrenheit(-1));



// The array below is the classification of students in a contest. It is ordered from lowest to highest grades.

const classification = [ "John Hill" , "Mary Jane", "Gary Vee", "Paricia Mills", "Helen Hall", "Paul Green" ]; 


// show the names of the three best students here
const thirdHighestGradeStudent = document.getElementById("student3").innerHTML = classification[3];
const secondHighestGradeStudent = document.getElementById("student2").innerHTML = classification[4];
const highestGradeStudent = document.getElementById("student1").innerHTML = classification[5]

console.log( "The third Highest Grade Student is: ", classification[3])
console.log( "The second Highest Grade Student is: ", classification[4])
console.log( "The first Highest Grade Student is: ", classification[5])



// 3) Consider the object below:



    const course = {
        'title': "Learn to Code in Python 3",
        'categories': ['programming', 'technology', 'python'],
        '5_stars_reviews': 420,
        '4_stars_reviews': 80,
        '3_stars_reviews': 33,
        '2_stars_reviews': 20,
        '1_stars_reviews': 4
    }



// a) Show the course title in the box below:
console.log("The Course title is: ",course.title)

// b) The main category is the first element of the categories array. Show it in the box below:

console.log("The main category of the categories array: ", course.categories[0]);

// c) Create a method to calculate the percentage of 5 stars reviews rounded with no decimal places and show the result below:

function calculatePercentageOfFiveStarReviews() {
    
    const calculatedPercentage = Math.floor((course["5_stars_reviews"]/557)*100)
    return calculatedPercentage + "%";
}
console.log(calculatePercentageOfFiveStarReviews());


// 4) See the shopping list below:

const shoppingList = ["Milk", "Butter", "Juice", "Bread", "Beer", "Rice", "Potatoes", "Chocolate"]; 


// Do the following changes to the list:

// Get the last item and place it at the beginning of the list.
// Add two more items at the end of the list: Cheese and Eggs
// Show the updated list in the console.

const lastItem = shoppingList.pop()
shoppingList.unshift(lastItem);
shoppingList.push("Cheese");
shoppingList.push("Eggs");
console.log(shoppingList)
