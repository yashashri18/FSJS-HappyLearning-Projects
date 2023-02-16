//in every module there is one default function that we declare
//this default function is anonymous
export default function(){
    console.log("Default function from User");
}

export let name = "Yashashri";
let age = 24;

export function code(){
    console.log("coding....");
}
function cook(){
    console.log("cooking....");
}

export function withdraw(){
    console.log("User - Amount deducted...");
}