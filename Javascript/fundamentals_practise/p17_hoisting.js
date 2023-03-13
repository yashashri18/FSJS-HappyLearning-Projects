hello()
function hello(){
    console.log("learning hositing")
}

//the above is treated as error in many programming languages
//as the function call is done before defing the function
//but in js, it executes properly
//because
//in js, before running the code, the js interpretor goes through the file
//to check all the declarations
//it itself shifts the variable,fn ,declarations  from whereever they are to the top of their scopes
//(if it is in fn , it brings declaration at the top in function)
//This is called as hoisting 


//case 1 - 
var x; 
console.log(x); //undefined
//if we dont assign anything js internally converts it like this - var x= undefined//
x=7;
console.log(x);

//case 2 
y = 7;
console.log(y);
var y;
//output - 7
//js treats it like -  var y;y=7;console.log(y)


//case 3

console.log(z);
var z;
z = 8;
//output - undefined
//js treats it like -  var z=undefined;console.log(z);z=8

//Note - only declarations are hoisted to the top 

//case 4 

console.log(p)
var p = 10;
//in this case also, only declaration is hoisted at the top


//----------strict mode in js

//if we declare anything with keyword , this is not treaded as error bydeaflut in js
a=4;
console.log(a)

//by using strict mode , we can have strict check
"use strict"
b=4;
console.log("val of b is ",b)
