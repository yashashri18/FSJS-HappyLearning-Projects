// Global Variable vs Local Variable

let car = "Audi"; //Global variable
function add(){
    let result = 33; //Local variable
    console.log(result);
    console.log(car); //car is accessible here
}
add();
console.log(car); 
console.log(result);//result is not accessible here