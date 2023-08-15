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


// Arrays = variables to hold more than one values 
//in js single array can have any datatype
//Arrays are mutable - we can add,change the value
//in JS , arrays are objects

// let a = [1, 2, 3, 4 , "abcd" , true , null]
// console.log(typeof a)
// console.log(a)
// console.log(a[0])
// console.log(a[2])
// console.log(a[4])
// a[4] = "efgh"
// console.log(a)
// console.log("the lenght of array a is ",a.length)



/* 
*********  Lecture 17  - Array Methods in JS ******** 
*/

// let num = [1, 2, 3, 34, 4, 78]

// 1. toString() 
// let b = num.toString()
// console.log(b)

//2. join()
// let c = num.join()
// console.log(c)
// console.log(typeof c)
// console.log(num.join(' '))
// console.log(num.join('--'))

//3. pop() - pops out the last element from array
// console.log(num)
// let last = num.pop()
// console.log(num)
// console.log(last)


//4 . push() - pushes element at the end
//let newln = num.push(66) //returns new array length
//console.log(newln, num)

//5. shift - pops out element from  start
// let a = num.shift()
// console.log(a, num)

//6. unshift() - adds element at the start
//let a = num.unshift("start") //returns the new lenght of array
//console.log(num, a)



/* 
*********  Lecture 18  - Array Methods in JS - part 2 ******** 
*/



//1. delete - is not a method , it is an operator
//it does not delete the item , does not affect the lenght of array
//it make item empty

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(num)
// delete num[0]
// console.log(num)

// 2. concat - to concat two arrays

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19]
// console.log(num.concat(num_more))
// let new_arr = num.concat(num_more, [21,22])
// console.log(new_arr)


// 3. sort - sorts the original array

// let arr = ["a", "c" , "b"]
// let num = [1, 34, 66, 22 , 11]
// console.log(num.sort())
// console.log(arr.sort())
// console.log(arr)

// 4. slice - slices out a piece from an array
// it creates a new array

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const num2 = num.slice(2) //start index to end
// console.log(num2)
// const num3 = num.slice(2, 5) //start index and end index
// console.log(num3)

// 5. splice - creates new array by adding and deleting elements from instanceof
//first arg = start index
//second arg = no of items to remove
//remaing args = items to be added
// const num = [1, 2, 3, 4, 5]
// num.splice(2, 1, 22, 24, 44, 45, 88)
// console.log(num) 




// 6. reverse()
// const num = [1, 2, 3, 4]
// num.reverse()
// console.log(num)

// 7. Array.from - to create an array from collection
// let name = 'yashashri'
// let arr = Array.from(name)
// console.log(arr)


/* 
*********  Lecture 19  - Loops with Arrays ******** 
*/

// let num = [3, 54, 1 , 2, 3]

// 1. for loop 

// for (let i=0; i< num.length;i++){
//     console.log(num[i])
// }

// 2. for each loop
// num.forEach((no)=>{
//     console.log(no * no)
// })

// 3. for of loop
// for (let i of num){
//     console.log(i * i)
// }

// 4. for in loop - iterate over index

// for(let i in num){
//     console.log(i)
// }


/* 
*********  Lecture 20  - Map , Filter , Reduce ******** 
*/

// 1. map () - returns a new array by performing some operation on each array element

// let arr = [45,23,21]
// let arr2 = arr.map((num, index)=>{
//     return num+index
// })
// console.log(arr2)

// 2. filter - returns a new array where elements are filtered as per condition
// let arr = [45,23,21, 24, 30]
// let arr2 = arr.filter((num)=>{
//     return num%2==0
// })
// console.log(arr2)

// 3. Reduce - reduces the array to single number output
// let arr3 = [1, 2, 3, 5, 2, 1]

// let num = arr3.reduce((h1, h2)=>{
//     return h1+h2
// },10)

// console.log(num)


/* 
*********  Lecture 21  - Practice set on arrays ******** 
*/

// 1. create an array of numbers and take input from the user to add numbers to this array
// let arr = [1, 2, 3, 4, 5]
// let a = prompt("enter number of your choice")
// a = Number.parseInt(a)
// arr.push(a)
// console.log(arr)

// 2. keep adding numbers to the above array until 0 is added to the array

// let arr = [1, 2, 3, 4, 5]
// let a
// while(a!=0){
//     a = prompt("enter number of your choice")
//     a = Number.parseInt(a)
//     arr.push(a)
// }
// console.log(arr)


// 3. filter for numbers divisible by 10 from a given array

// let arr = [1, 2, 30, 7, 10 , 56, 89]
// let arr2 = arr.filter((num)=>{
//  return num%10==0
// })
// console.log(arr2)

// 4. create an array of square of given numbers


// let arr = [1, 2, 30, 7, 10 , 56, 89]
// let arr2 = arr.map((num)=>{
//  return num*num
// })
// console.log(arr2)


// 5. use reduce to calculate factorial of a given number from an array of first n natural numbers
// (n being the number whose factorial needs to be calculated)

// let arr = [1, 2, 3, 4, 5, 6, 7, 8]
// let arr2 = arr.reduce((x1, x2)=>{
//  return x1*x2
// })
// console.log(arr2)


/* 
*********  Lecture 22  - Guess the Number ******** 
*/

// let number = Math.floor(Math.random()*100)+1
// console.log(number)
// let guess = 0
// let chances = 0;
// do{
//     guess = prompt("guess number between 1 to 10")
//     guess = Number.parseInt(guess)
//     chances++
//     if(guess < number){
//         console.log("guess is lesser than number")
//     }
//     else if(guess > number){
//         console.log('guess is greater than ')
//     }else{
//         console.log("you guess it correct")
//     }
// }while(guess != a)


/* 
*********  Lecture 23 , 24 - JS in Browser ******** 
*/

// Js was initially created to make webpages alive 
// Js can be written right in a webpage HTML to make it interactive 

// adding js into html 
//way 1 - adding script file
// allows separation of concers + browsers caches this js files 
{/* <script src="./script.js"></script> */}

//way 2 - write script in same file
// no caching , no separation of concerns
{/* <script>
    console.log('hello')
</script> */}


/* 
*********  Lecture 25 - JS console methods ******** 
*/

// console.log(console) 
// console.error("this is error")
// console.info('this is info')
// console.assert(5>67)
// console.assert(500>67)
// console.warn("this is warning")
// let obj = {a:1, b:2, c:3}
// console.table(obj)

/* 
*********  Lecture 26 - JS Excerice 1******** 
*/

/* 
*********  Lecture 27 - alert , prompt , confirm******** 
*/

// alert('hello')

// prompt - asks input from user
// let a = prompt("enter the value of a")
// document.write("the value of a is ", a)


//confirm - returns true / false
// let age = confirm('is your age >= 18')
// if(age == true){
//     document.write('you can drive')
// }else{
//     document.write("you are under 18")
// }


/* 
*********  Lecture 28 - DOM , BOM and window object ******** 
*/

//window - it is a global object
// console.log(window)
// console.log(window.document)
// console.log(window.document.body)


//DOM - represents the page content as html
//document.body.style.backgroundColor = 'red';

// BOM - represents additional objects provided by the browser
// eg - functions like alert(), confirm(), propmt() are the part of BOM


/* 
*********  Lecture 29 - JS Practise set  ******** 
*/

// 1. accept age from user and suggest if user can drive or not

// let age = prompt("Enter your age")
// age = Number.parseInt(age)

// const canDrive = (age) => {
//     return age>18?true:false
// }

// if(canDrive(age)){
//     alert("You can drive")
// }else{
//     alert("you cannot drive")
// }
 
// 2. in above question ask the user if he wants to see the prompt again

// let playAgain = true
// const canDrive = (age) => {
//     return age>18?true:false
// }
// while(playAgain == true){
//     let age = prompt("Enter your age")
//     age = Number.parseInt(age)
//     if(canDrive(age)){
//         alert("You can drive")
//     }else{
//         alert("you cannot drive")
//     }
//     playAgain = confirm("You want to play again")
// }


// 3. in above question use console,error() to log the error is user entered age is negative 

// let playAgain = true
// const canDrive = (age) => {
//     return age>18?true:false
// }
// while(playAgain == true){
//     let age = prompt("Enter your age")
//     age = Number.parseInt(age)
//     if(age<0){
//         console.error("please enter a valid age")
//         break;
//     }
//     if(canDrive(age)){
//         alert("You can drive")
//     }else{
//         alert("you cannot drive")
//     }
//     playAgain = confirm("You want to play again")
// }

// 4. if user enters a number greater than 4, the program change url to google.com(redirection)

// let number = prompt("Enter your number")
// number = Number.parseInt(number)

// if(number > 4){
//     location.href = "https://google.com"
// }

// 5. change the bg of page to red based on users input

// let col = prompt("Enter bg color")
// document.body.style.backgroundColor = col


/* 
*********  Lecture 30 - snake , water , gun game ******** 
*/

// case 1 - snake water -> winner is snake
// case 2 - water gun   -> winner is water 
// case 3 - snake gun   -> winner is gun


/* 
*********  Lecture 31 - Walking the dom ******** 
*/

// DOM tree refers to the HTML page where all the nodes are objects. 
// There are three main types of nodes in the DOM tree
// 1. Text Node
// 2. element Node
// 3. comment Node

// in an html page , html is at the root and head and body are its children


/* 
*********  Lecture 32 - Accessing Children of an element ******** 
*/

// console.log(document.body.firstChild) //returns empty text node as it assumes space as a text after body tag
// console.log(document.body.firstElementChild) // returns first element child in body

// console.log(document.body.lastChild) 
// console.log(document.body.lastElementChild) //same as lastElementChild

// console.log(document.body.childNodes) //returns nodelist of all types of child nodes
// console.log(document.body.children) // returns html collection of elements

//childnodes looks like an array but not actually an array
//use Array.from(document.body.childNodes) to convert it into an array

// elm.childNodes[0] = ele.firstChild
// elm.childNodes[elm.childNodes.length - 1] = elm.lastChild


/* 
*********  Lecture 33 - Parent and Siblings ******** 
*/

// Siblings are the nodes that are children of the same parent
// eg - head and body are siblings and are children of html

// prevSibling - head is prevSibling of body
// nextSibling - body is nextSibling of head

// a = document.body.firstChild
// console.log(a.firstChild.nextSibling)
// console.log(a.parentNode) 
// console.log(a.parentElement) //returns same as parentNode

// parentElement retuns only when it has element as parent otherwise returns null


/* 
*********  Lecture 34 - Element Navigation Only ******** 
*/

// we were getting all types of children - comments , text nodes , elements
// but we need only elements 

// b = document.body
// console.log(b.firstChild) //returns any type of node
// console.log(b.firstElementChild) //returns only element node

// console.log(b.lastChild)
// console.log(b.lastElementChild)

// console.log(b.firstElementChild.firstElementChild.nextElementSibling)
// console.log(b.firstElementChild.lastElementChild.previousElementSibling)