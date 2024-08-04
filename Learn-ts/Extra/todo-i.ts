import inquirer from "inquirer";

console.log("WELCOME IN QIVIS TODO LIST");

let i = 0;

async function visit(){
    const app = await inquirer.prompt([
        {
            type: "number",
            name: "a",
            message: "You wanted to visit TODO App? 0/1"
        }
    ])
    if(app.a == 1){
        const quick = await inquirer.prompt([
            {
                type: "string",
                name: "q",
                message: "Enter Quick Task Here:",
            },
        ])
        console.log(`Task ${i=i+1}: ${quick.q}`);
    }
    else if(app.a == 0){
        console.log("Thanks! Visit for TODO App");
    }
    else{
        console.log("Invalid value,");
        console.log("Please! Try again!");
        visit();
    }
}
async function again(){
    const want = await inquirer.prompt([
        {
            type: "number",
            name: "choi",
            message: "You wanted to create Task? 0/1"
        }
    ])
    
    if(want.choi == 1){
        create();
    }
    else{
        console.log(`Now you ${i} task was build`);
    }
}
async function create(){
    const task = await inquirer.prompt([
        {
            type: "string | number",
            name: "t1",
            message: "Create Task:",
        },
        {
            type: "number",
            name: "d1",
            message: "Now! Set date:",
        }
    ])
    console.log(`Task ${i=i+1}: ${task.t1} on ${task.d1}`);
    again();
}

visit();
again();

// console.log(`Now you ${i} task was build`);

