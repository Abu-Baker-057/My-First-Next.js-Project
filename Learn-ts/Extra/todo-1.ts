import inquirer from "inquirer";

let todo: string[] = [];
let loop = true;

while(loop){
    const answer: {
        TODO: string,                   // de-structuring
        add_more: boolean,
    } = await inquirer.prompt([
        {
            type: "input",
            name: "TODO",
            message: "What do you want to add in your todo? ",
        },
        {
            type: "confirm",
            name: "add_more",
            message: "Do you want to addmore todo? ",
            default: false,
        }
    ])
    const {TODO, add_more} = answer;
    // console.log("🚀 ~ answer:", answer)
    loop = add_more
    if(TODO){
        todo.push(TODO)
    }else{
        console.log("Kindly add valid input");
    }
    
}
    // console.log(todo);

if(todo.length){
    console.log("Your Todo List: ");
    todo.forEach(list_show => {
        console.log(list_show)
    });
}else{
    console.log("No Todo found")
}
