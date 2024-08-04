import inquirer from "inquirer";

let todo : string[] = ["A", "B"];

async function create_todo (todo : string[])
{
    do{
        let ans = await inquirer.prompt([
            {
                type: "list",
                name: "select",
                message: "Selact an operator",
                choices: ["Add", "Update", "View", "Delete"],
            }
        ])
        if(ans.select == "Add"){
            let add_todo = await inquirer.prompt([
                {
                    type: "input",
                    name: "add",
                    message: "Add items"
                }
            ]);
            todo.push(add_todo.add);
            console.log(todo);
        }
        if(ans.select == "Update"){
            let update_todo = await inquirer.prompt([
                {
                    type: "list",
                    name: "update",
                    message: "Select item for update",
                    choices: todo.map(item => item)
                }
            ]);
            let add_todo = await inquirer.prompt([
                {
                    type: "input",
                    name: "add",
                    message: "Add items... "
                }
            ]);
            let new_todo = todo.filter(val => val !== update_todo.update)
            todo = [...new_todo,add_todo.add]
            console.log(todo)
        }
        if(ans.select == "View"){
            console.log(todo);
        }
        if(ans.select == "Delete"){
            let delate_todo = await inquirer.prompt([
                {
                    type: "list",
                    name: "update",
                    message: "Select item for update",
                    choices: todo.map(item => item),
                }
            ]);
            let new_todo = todo.filter(val => val !== delate_todo.update);
            todo = [...new_todo];
            console.log(todo);
        }
    } while (true);
}

create_todo(todo);