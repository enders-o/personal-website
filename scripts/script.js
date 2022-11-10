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
    input = prompt("Enter a 4-digit number:");
    input = Number(input);
    // console.log(isNaN(input));
} while (isNaN(input) || input <= 1000 || input >= 9999);

let flag = 0
for (const item of courseList) {
    if (item.code.includes(input)) {
        console.log(`Yes I am taking the course ${item.code} - ${item.name}`);
        flag = 1
        break;
    }
};

if(flag === 0) {
    courseList.push({
        "code": `ACIT ${input}`,
        "name": null
    })
    console.log(`Added ACIT ${input} to array.`);
}

// console.log(courseList)