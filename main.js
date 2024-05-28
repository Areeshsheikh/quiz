#! /usr/bin/env node
import inquirer from "inquirer";
let point = 0;
//question1
let question_one = await inquirer.prompt([
    {
        name: "one",
        message: "typescript is a superset off?",
        type: "list",
        choices: ["python", "c++", "javascript"]
    }
]);
if (question_one.one == "javascript") {
    console.log("your answer is correct");
    point++;
}
else {
    console.log("incorrect answer");
}
//question2
let question_two = await inquirer.prompt([
    {
        name: "two",
        message: "what is computer?",
        type: "list",
        choices: ["electronic machine", "place", "food"]
    }
]);
if (question_two.two == "electronic machine") {
    console.log("your answer is correct");
    point++;
}
else {
    console.log("incorrect answer");
}
//question3
let question_three = await inquirer.prompt([
    {
        name: "three",
        message: "who is the founder of microsoft?",
        type: "list",
        choices: ["elon musk", "Bill gates", "mark"]
    }
]);
if (question_three.three == "Bill gates") {
    console.log("your answer is correct");
    point++;
}
else {
    console.log("incorrect answer");
}
//question4
let question_four = await inquirer.prompt([
    {
        name: "four",
        message: "who is the current prime minister of pakistan?",
        type: "list",
        choices: ["imran khan", "nawaz sharif", "shehbaz sharif"]
    }
]);
if (question_four.four == "shehbaz sharif") {
    console.log("your answer is correct");
    point++;
}
else {
    console.log("incorrect answer");
}
//question5
let question_five = await inquirer.prompt([
    {
        name: "five",
        message: "what is the color of our national flag?",
        type: "list",
        choices: ["black&white", "blue&green", "green&white"]
    }
]);
if (question_five.five == "green&white") {
    console.log("your answer is correct");
    point++;
}
else {
    console.log("incorrect answer");
}
//output condition
if (point >= 4) {
    console.log("congratulations!");
    console.log(`your point: ${point}`);
}
else {
    console.log("you loss! try next time");
    console.log(`your point: ${point}`);
}
