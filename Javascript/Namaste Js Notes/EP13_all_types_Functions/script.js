//the major diff between creating functions with these two(1 , 2) is hoisting,
//a(); //a called
//b(); //TypeError: b is not a function
//console.log(b) //undefined


//1. Function Statement   aka Function Declaration
function a(){
    console.log("a called")
}
//a();
//2. Function Expression - function acts like a value
//in case of function expression b is treated like a variable
var b = function(){
    console.log("b called")
}
//b();

//3. Anonymous Function - function without a name is called anonymous function

//anonymous function does not have their own identity
//following will result out tobe a syntax error
//function(){console.log("anonymous ")}//Function statements require a function name
//this is an invalid syntax , because a function should always have a name

//then what is the use of anonymous function
//these are used in places where functions are used as values

//4. Named Function Expression
//it is similar to Function Expression , but instead of anonymous func , a name is given to function

var c = function d(){
    console.log("d called")
    console.log(d)
}
//c(); //d called
//d(); //ReferenceError: d is not defined
//here d is present in outer scope, but it is treated as a local variable
//hence we can call it inside a function 



//5 . Diff between Parameters and Arguments

//param1, param2 are local variables inside the function
//these identifiers are known as parameters
var e = function(param1, param2){
    console.log(param1, param2)
}
//arguments are the values that we pass inside the function
//e("arg1","arg2")

//6. First Class Functions / First Class Citizens - 
// the ability of functions 
//1. to be used as values
//2. and can be passed as an argument to another function
//3. and can be returned as a function
// this ability is known as First Class Functions 

//in js we can pass function inside a function as an argument - functions are treadted as values
var f =function(param1){
    console.log(param1)
}
//f(function(){});
function xyz(){};
//f(xyz);

//in js we can also return a function inside a function
var g = function(){
    return function(){

    }
}
console.log(g())

//7. Arrow Functions