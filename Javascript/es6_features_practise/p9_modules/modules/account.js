//in every module there is one default function that we declare
//this default function is anonymous
export default function(){
    console.log("Default function from Account");
}

let accont_no = 1234567890;
let account_type = "saving";

function withdraw(){
    console.log("Account - Amount deducted...");
}
function deposit(){
    console.log("Balance updated...");
}

//if we want to export multiple things at a time
export {withdraw,deposit}