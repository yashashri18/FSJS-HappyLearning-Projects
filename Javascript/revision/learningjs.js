/* 
******** Lecture 01 ******** 
*/

// Ways to execute js 

// 1. Browser 
// 2. node js - runtime js environemnt
// 3. adding scripts into html



/* 
*********  Lecture 02  - Variables ******** 
*/

// variable - to store data
// js is dynamically typed language - we can change type of varible in runtime

// var a = 67
// a = "abcd"
// console.log(a)
// console.log(typeof a)




/* 
*********  Lecture 03  - let , var and const ******** 
*/

// let and const are introduced in es6

// scope - 
// let and const are block scope 
// var is function scope

// redeclaration - 
// var can be redeclared
// let and const cannot be redeclared

// initialization -
// let and be re-initialize 
// const need to declare and initialize in same line 

// try to use - const >>>> let >>>> var






/* 
*********  Lecture 04  - Primitives data types and Objects ********  
*/

// Primitive DataTypes 

// 1. null
// let a = null
// 2. Number
// let b = 456
// 3. Symbol
// let f = Symbol("i am a nice symbol")
// 4. String
// let d = "Yashashri"
// 5. Boolean
// let c = true
// 6. BigInt
// let e = BigInt("567")
// 7. undefined
// let g = undefined

// console.log(a , b , c , d , e , f, g)
// console.log(typeof a , typeof b ,typeof c, typeof d, typeof e, typeof f, typeof g  )


// Non-Primitive DataTypes

// 1. Object

// const item = {
//     "harry": true,
//     "shubh" : false
// }
// console.log(item.harry)
// console.log(item.shubh)




/* 
*********  Lecture 05  - Practice Set 1******** 
*/

// 1. create a variable of type string and try to add a number to it

// var str = "Yashashri"
// var addn = str+18
// console.log(addn)



// 2. use a typeof operator to find the datatype of the string in last question

// console.log(typeof addn) //output - string



// 3. create a const object in js , can you change it to hold a number later
//const a = 10;
// a=50 // gives error in console.



// 4. tyr to add a new key to the const object , in problem 3 were you able to do it

// const obj = {
//     "firstName" : "Yashashri",
// }
// obj.lastName = "Bongulwar"
// console.log(obj)

// obj is reference to that object
// hence we can change the content in the object
// we can add or remove data from object but can not change the obj completly


// 5. Write a js program to create a word-meaning dictionary of 5 words

// const dict = {
//     "name" : "its like an identity",
//     "bottle" : "device to store water",
//     "container" : "to store things ",
//     "abcd" : "efgh",
//     "ijkl" : "mnop"
// }
// console.log(dict)
// console.log(dict.name)



/* 
*********  Lecture 06  - Operators and Expressions ******** 
*/

// 1. Arithmatic Expression

// console.log("arithmatic operators")
// let a = 45;
// let b = 4;
// console.log("a+b = ", a+b)
// console.log("a-b = ", a-b)
// console.log("a/b = ", a/b)
// console.log("a*b = ", a*b)
// console.log("a%b = ", a%b)
// console.log("a**b = ", a**b)
// console.log("a = ", a) //45
// console.log("a++ = ", a++) //45
// console.log("a = ", a) //46
// console.log("++a = ", ++a) //47
// console.log("a = ", a) //47
// console.log("a-- = ", a--) //47 
// console.log("a = ", a) //46
// console.log("--a = ", --a) //45
// console.log("a = ", a)



// 2. Assignment Operator
// let a = 10
// a = a+1
// console.log(a)
// a +=1
// console.log(a)

// 3. Comparision Operator
// == compares values
// /!= checks if values are different

// let a = 10
// let b = "10"
// let c = 5
// console.log("a==a", a==a)
// console.log("a!=c", a!=c)
// console.log("a===a", a===a)
// console.log("a!==b", a!==b)
// console.log(a>c)
// console.log(a<c)
// console.log(a<=c)
// console.log(a>=c)
// console.log(a!=c)
// console.log(a>c?"a is greater":"c is greater")


// 4. Logical Operator
// && - and  returns true if both are true
// || - or returns if any one is true
// /! - negation operator






/* 
*********  Lecture 07  - Conditional Expressions ******** 
*/

// let a = prompt("enter your age")
// //prompt always returns a string
// console.log(a , typeof a)
// let b = Number.parseInt(a)
// //to convert string into number
// console.log(b , typeof b)

//if condition

// if(b>0){
//     console.log("this is valid age")
// }


// if else

// if(b>0){
//     console.log("this is valid age")
// }else{
//     console.log("this is not valid age")
// }


// if else if (nested if else)

// if(a<0){
//     console.log("invalid age")
// }else if(a<18){
//     console.log("you are kid")
// }else{
//     console.log("you can drive")
// }

//switch case


//ternary operator

// let marks = 10
// console.log(marks == 10 ? "good" : "bad")

/* 
*********  Lecture 08  - Practise Set 2 ******** 
*/

// 1. use logical operator to find whether the age of person lies between 10 and 20
// let  age = prompt("enter your age")
// if(age> 10 && age<20){
//     console.log("age lies between 10 and 20")
// }else{
//     console.log("age is not in given range")
// }



// 2. demonstrate the use of switch case statements in Js 
// let age = prompt("what is your age")
// switch(age){
//     case '12': 
//         console.log("your age is 12")
//         break;
//     case '13': 
//         console.log("your age is 13")
//         break;
//     default:
//         console.log("your age is not special")
// }


// 3. write js program to find whether a number is divisible by 2 and 3
// let number = 6
// if(number%2 == 0 && number%3==0){
//     console.log("number is divisible by 2 and 3")
// }else{
//     console.log("number is not divisible by 2 and 3")
// }


// 4. write js program to find whether a number divisible by either 2 or 3

// let number = 7
// if(number%2 == 0 || number%3==0){
//     console.log("number is divisible by 2 or 3")
// }else{
//     console.log("number is not divisible by 2 or 3")
// }

// 5. print "you can drive" or "you cannot drive " by taking age from user
// let age = prompt("enter your age")
// if(age>18){
//     console.log("you can drive")
// }else{
//     console.log("you cannot drive")
// }

/* 
*********  Lecture 09  -  For loops in JS ******** 
*/
// Types of loops 
// for loop 
// for in loop - loops through keys in obj
// for of loop - loops through iterable  - eg array , string
// while loop
// do while 


//for loop
// for (let i =0 ; i<5 ;i++){
//     console.log(i)
// }


// for in loop - loops through keys in obj

// let obj = {
//     fname : "Yashashri",
//     lname: "Bongulwar",
// }

// for (let a in obj){
//     console.log(a)
// }

// for of loop

// for (let b of "yashashri"){
//     console.log(b)
// }


/* 
*********  Lecture 10 - while loop in JS ******** 
*/

// let i = 1;
// while(i<=5){
//     console.log(i)
//     i++
// }

// let i = 1
// do{
//     console.log(i)
//     i++
// }while(i<=5)

/* 
*********  Lecture 11 - Functions in JS ******** 
*/

//Normal Function

// function onePlusAvg(x, y){
//     return 1+ (x+y)/2
// }

// let a = 1
// let b = 2
// let c = 3

// console.log("one plus avg of ", a , " and ", b  , "is ",onePlusAvg(a,b) )
// console.log("one plus avg of "+ b + " and "+ c  + " is "+onePlusAvg(b,c) )
// console.log("one plus avg of "+ a + " and "+ c  + " is "+onePlusAvg(a,c) )


//Arrow Function

// const sum = (p,q) => {
//     return p+q
// }

// console.log(sum(1,2))


// const namaste = () => {
//     return "Namaste World"
// }
// console.log(namaste())


/* 
*********  Lecture 12  - Practise Set 3 ******** 
*/


// 1. Write a program to print the marks of a students in an obj using for loop 

// let marks  = {
//     harry : 90,
//     shubham : 9,
//     lovish : 56,
//     monika : 4
// }

// let students = Object.keys(marks)
// console.log(students)

// for (let i =0 ; i<students.length ; i++){
//     console.log("marks of "+ students[i] + " is "+ marks[students[i]])
// }


// 2. Write program for the same using for in loop 

// let marks  = {
//     harry : 90,
//     shubham : 9,
//     lovish : 56,
//     monika : 4
// }

// for (let mark in marks){
//     // console.log(mark)
//     // console.log(marks[mark])
//     console.log("marks of "+ mark + " is "+ marks[mark])
// }



// 3. write a program to print "try again " until; user enters the correct number 
// let cn = 4;
// let i ;
// while (i !=cn){
//     i = prompt("Enter correct number")
// }

// 4. write a function to find mean of 5 numbers 

// function meanOfNumbers (a, b , c, d ,e) {
//     return (a+b+c+d+e)/5
// }
// console.log("the mean of numbers is ",meanOfNumbers(11,2,3,4,5))


/* 
*********  Lecture 13  - Intro to Strings in Js ******** 
*/

// String = collection of characters 

// let name = "Yashashri"
// let friend = 'Harry'
// console.log(name)
// console.log("length od string is ",name.length)
// console.log("first char - ", name[0])
// console.log("second char - ", name[1])

// Template literals 
// let boy1 = 'promod'
// let boy2 = "nikhil"
// let sentence = `${boy1} is friend of ${boy2}`
// console.log(sentence)

//excape sequence charaters
// let fruit = 'banana'
// let fruit2 = 'bana\'na'
// let fruit3 = "bana\"na"
// let fruit4 = "bana\'na"
// console.log(fruit, fruit2, fruit3, fruit4)

/* 
*********  Lecture 14  - String Methods ******** 
*/

//strings are immutable in JS - we can modify and make new string but we cannot change original string
//string index starts from 0

//let name = "Yashashri"

//1. length
//console.log(name.length)

//2. to make uppercase / lowercase
//console.log(name.toUpperCase())
//console.log(name.toLowerCase())



//3. Slice method - to cut some part of string
//console.log(name.slice(2,4)) //start index - included , end index excluded
//console.log(name.slice(2,8))
//console.log(name.slice(4)) //if we dont pass second arg to prints string till end 

//4. Replace - 
//console.log(name.replace("ri", "ree"))

// 5. Concat
// let name = "yash"
// let friend = "yashu"
// console.log(name.concat(" is a friend of ",friend))

//6. Trim - to remove extra spaces
// let friend2 = "    Meena     "
// console.log(friend2)
// console.log(friend2.trim())
// console.log(friend2.trimEnd())
// console.log(friend2.trimStart())

 
/* 
*********  Lecture 15  -  String Problem set******** 
*/

// 1. What will yhe output of the following console.log("har\"".length)
//console.log("har\"".length) 
//length is 4 , as it does not include the escape char

// 2. Explore includes , startsWith , endsWith functions of a String
//let name = "Yashashri"
// console.log(name.includes('yash')) // false
// console.log(name.includes('Yash')) // true
// console.log(name.startsWith('Ya')) //true
// console.log(name.startsWith('ash')) //false
// console.log(name.startsWith('ya')) //false
//console.log(name.endsWith('ri')) //true
//console.log(name.endsWith('shri')) //true
//console.log(name.endsWith('ree')) //false


 
// 3. Write a program to convert given string in lowercase
// let name = "YashaShri"
// console.log(name.toLowerCase())


// 4. Extract the amount out of the string
// let str = "Please give me 400"
// console.log(str.indexOf('400'));
// console.log(str.slice(15))
// another way
// console.log(str.slice("Please give me".length))


// 5. try to change 4th char of given string , are you able to do it ?
// let name = "Yashashri"
// name[3] = "H"
// console.log(name)
//strings are immutable - we cannot change strings



/* 
*********  Lecture 16  -  Intro to Arrays ******** 
*/





/* 
*********  Lecture 17  - ******** 
*/