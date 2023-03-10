//Functions to interact with user : alert, prompt and confirm

// 1. alert() - shows a message

// 2. prompt() - shows a message + input text 
//It returns the text on clicking of ok
//if calcel btn or esc is clicked , it returns null

// 3. confirm() - shows a message to confirm with "Ok" or "Cancel"
//it returns true on click of ok
//returns false on click of cancle/esc

//All these pause script execution and dont allow the visitor to
//interact with the rest of the page until the window has been dismissed.

//alert()
//alert("welocme to our site");


//prompt()
//let age = prompt('Enter your age');
// let age = prompt('Enter your age',20); //default value is 20
// if(age != null){
//     document.write("Your age is", age);
// }else{
//     document.write("You did not give age");
// }


//confirm()

let ans = confirm("Are you sure , you want to delete ?")
if(ans == true){
    document.write("ok deleted")
}else{
    document.write("ok, No deletion")
}
