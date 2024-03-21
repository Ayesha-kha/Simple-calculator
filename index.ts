#! /usr/bin/env node
import inquirer from "inquirer";


const answer = await inquirer.prompt([
  {
    message: "Enter your first number please!",
    type: "number",
    name: "firstNumber",
  },
  {
    message: "Enter your second number please!",
    type: "number",
    name: "secondNumber",
  },
  {
    message: "Select operator which operation you want to perform",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

if (answer.operator === "Addition") {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "Subtraction") {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "Multiplication") {
  console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "Division") {
  console.log(answer.firstNumber / answer.secondNumber);
} else {
    console.log("your are selectiong wrong operator, Please select correct operator");
}

