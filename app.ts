#! /usr/bin/env node

import inquirer from "inquirer";


let currency_Value: {[key:string]: number} = {
    PKR: 277.96,
    AED: 3.67,
    USD: 1
}

let answer= await inquirer.prompt([{
    type:"list",
    name:"from",
    message:"Converting from",
    choices:["PKR","AED","USD"]
},
{
    type:"list",
    name:"to",
    message:"Converting to",
    choices:["PKR","AED","USD"]
},
{
    type:"number",
    name:"amount",
    message:"Your amount to convert"
}
])


console.log(currency_Value[answer.to] / currency_Value[answer.from] * answer.amount);
