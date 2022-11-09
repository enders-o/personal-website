const courseList = [
    {
        "code": "ACIT 1620",
        "name": "Fundamental Web Technologies"
    },
    {
        "code": "ACIT 1630",
        "name": "Database Systems"
    },
    {
        "code": "ACIT 1515",
        "name": "Scripting for IT"
    }
]
let input;
do {
    input = prompt("Enter a 4-digit number:") 
    input = Number(input)
    console.log(isNaN(input))
} while (isNaN(input) || input <= 1000 || input >= 9999);

// console.log(courseList)