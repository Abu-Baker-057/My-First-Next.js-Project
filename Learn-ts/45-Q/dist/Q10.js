// Adding Comments: Choose two of the programs you’ve written,and add at least one comment to each.
// If you don’t have anything specific to write because your programs are too simple at this point,
// just add your name and the current date at the top of each program file.
// Then write one sentence describing what the program does.
import inquirer from "inquirer";
console.log("Program for eligible for Voteing");
let age = await inquirer.prompt([
    {
        type: "number",
        name: "vote",
        message: "Enter your age:",
    }
]);
if (age.vote >= 18) {
    console.log("You are eligible to give vote");
}
else if (age.vote < 18) {
    console.log("You aren't eligible to give vote");
}
else {
    console.log("Invalid value");
}
// Comment - if your age above 18 so you give vote otherwise not give vote
console.log("\nProgram for enterence in University");
let matric = await inquirer.prompt([
    {
        type: "number",
        name: "enter",
        message: "Enter your Matric Marks",
    },
]);
if (matric.enter >= 800) {
    console.log("Welcome! In College.");
    let inter = await inquirer.prompt([
        {
            type: "number",
            name: "enter",
            message: "Enter your Inter Marks",
        },
    ]);
    if (inter.enter >= 800) {
        console.log("Require Entry Test");
        let test = await inquirer.prompt([
            {
                type: "number",
                name: "enter",
                message: "Enter your Entry Test Marks",
            }
        ]);
        if (test.enter >= 80) {
            console.log("Welcome! In University");
        }
        else {
            console.log("Sorry! 80 marks require in Entry Test.");
        }
    }
    else {
        console.log("Sorry! 80% marks require in Inter for admission in University.");
    }
}
else {
    console.log("Sorry! 80% marks require in Matric for admission in College.");
}
