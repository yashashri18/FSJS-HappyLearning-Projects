//in every module there is one default function that we declare
//this default function is anonymous
export default function(){
    console.log("Default function from User 2");
}

export let name = "Yashashri";
export let age = 24;

export function code(){
    console.log("User 2 coding....");
}
function cook(){
    console.log("User 2 cooking....");
}

//we can import modules from one another
import {withdraw} from './account.js'
withdraw();