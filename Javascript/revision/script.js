// Javascript 			
			
// What is ecma script ?			
// Js is loosely typed language 		we can change the type of variable runtime	
// Es6 - let and const 			
// diff between var, let and const 		var is function scope / global scope	
// 		let and const are block scope 	
// 		var can be redeclared	
// 		let and const cannot be redeclared	
// 		const is strict version of let - neeed to declare and assign value at the same time	
// 		can not change the value of const 	
			
// Loops in js			
// for loop		to loop a block of code number of times	
// forinloop		loops through the keys in object	
// forof loop		loops through the values in object	
			
// while loop		loops a block of code on specific condition	
// do-while loop 		while loop varient which runs atleast once	
			

/* **************************************************************************
* Namaste Js
************************************************************************* */

//closures

// function a(){
//     var a1 = 11;
//     function b(){
//         console.log(a1)
//     }
//     a1=100;
//     return b
// }
// //function b remembers the reference to a1
// var c = a()
// c()


// function x(){
//     var i=1;
//     setTimeout(function(){
//         console.log(i)
//     },1000)
//     i=7
//     console.log("namaste world")
// }
// x()

//op 
//namaste world
//7



// function x(){
//     for (var i=1; i<=5;i++){
//         function close(j){
//             setTimeout(function(){
//                 console.log(j)
//             },j*1000); 
//         }
//         close(i)     
//     }
// }
// x()


// function outer(){
    
//     function inner(){
//         console.log(a)
//     }
//     var a=10
//     return inner;
// }

// outer()()
// var close= outer()
// close()




// function d () {
//     function c (){
//         function a () {
//             console.log("the value iof b is "+b)
//         }
//         a()
//     }
//     c()
// }


// var b = 10;
// d()





// {
//     console.log(a)
    
//     var a = 10;
//     let b = 20;
//     console.log(b)
//     const c = 30;
// }
//   console.log(a);
//   console.log(b)

// function d () {
//     console.log(q)
//     var q =10;
//     console.log(q)
// }
// d()


// function x() {
//     var a = 7;
//     function y() {
//       console.log("the value of a is "+a);
//     }
//     return y;
// }

//   var z = x();
//   z()


// function z() {
//     var b = 900;
//     function x() {
//       var a = 7;
//       function y() {
//         console.log(a, b);
//       }
//       y();
//     }
//     x();
// }
// z(); // 7 900

// function x() {
    
//     for(var i=1;i<=5;i++){
//         function a(i){
//             setTimeout(function () {
//                 console.log("the value of i is "+i);
//             }, i*1000);
//         }
//         a(i)   
//     }
// }
// x();

// function outer(b){
//     let a = 10;
//     function inner(){
//         console.log("a is "+a)
//         console.log("b is "+b)
//     }
//     return inner;
// }
// outer(20)()
//x = outer()
//


//constructor functions 

// function Counter () {
//     var count = 10;
//     this.incrementCount = function(){
//         count++;
//         console.log("count is "+ count);
//     }
//     this.decrementCount = function(){
//         count--;
//         console.log("count is "+ count);
//     }
// }
// var c = new Counter()
// c.incrementCount()












// //constructure Function

// function Counter(){
//     var count = 10;
//     this.incrementCount = function(){
//         count++;
//         console.log("count is "+count)
//     }
// }

// var c1 = new Counter()
// c1.incrementCount()
// c1.incrementCount()
// c1.incrementCount()
// c1.incrementCount()


/* **************************************************************************
* Code With Harry
************************************************************************* */

// For in loop - to iterate over keys in an obj

// marks = {
//     yashashri : 100,
//     krutika : 99,
//     pooja:98
// }
// for (let i in marks ){
//     console.log("marks of "+i+ " are " + marks[i] )
// }


// String and String Methods 

//Strings are immutable in JS - 
//cannot change original string, it can return new string

// let name1  = "Yashashri"
// let name2  = 'Bongulwar'
// console.log(name1.length)
// console.log(name1[0])
// console.log(name1[1])
// console.log(name1[2])


//template literal 
// let sentence  = `fname - ${name1} and lname - ${name2}`
// console.log(sentence)


//escape sequence charater
// let fruit = 'Bana\'na'
// console.log(fruit)

// let name = "Yashashri"

//length
// console.log("length is "+ name.length)

//lowercase
// console.log("lowercase is " +name.toLowerCase())

//uppercase
// console.log("uppercase is " +name.toUpperCase())

//slice - to find some part of string
//string index starts from 0
//start index is inclusive
//end index is exclusive
// console.log("slice is " +name.slice(0,4))
// console.log("slice is " +name.slice(2,7)) //index - 2, 3, 4, 5, 6 
//when we dont give second arg - string till end is printed
// console.log("slice is " +name.slice(0))
// console.log("slice is " +name.slice(4))


//replace
// console.log(name.replace("i","ee"))

//concat method
// console.log(name.concat(" is a very talented girl ","OK"))

//Trim 
// let friend = "     test     "
// console.log(friend.trim())

//Practise set on Strings - 

// 1. guess o/p
// console.log("har\"".length)

//includes method in string
//returns o/p - true or false
// const sentence = "this quick brown fox jumps over dog"
// const word = 'fox'
// console.log(sentence.includes(word))


// let str2 = "Please give Rs 1000"
// let amount = str2.slice("Please give Rs".length)
// console.log(amount)

// let friend = "Deepika"
// friend[3]="R"
// console.log(friend) 
//friend will not change because String are immutable

/*
* Arrays In Js
*/

// let marks = [91, 23, false , "not present"]

//access elements
// console.log(marks[0])
// console.log(marks[1])
// console.log(marks[2])
// console.log(marks[4]) // undefined
// console.log(marks[5]) // undefined

//length
// console.log("length is "+ marks.length)

//adding new values 
// marks[4] = 55
// console.log(marks[4])

//chnaging existing values
//marks[1] = 70
// console.log(marks[1])
// console.log(marks)

// console.log(typeof marks) //object



/*
* Arrays Methods In Js
*/

// let num = [1 , 2 , 3 , 4, 5 , 6 ]
// console.log(num)
//Convert array to String

// let b = num.toString()
// console.log(b)
// console.log(typeof b) //string

//Join Method 

//jois the array elements by given parameter and creates string
// let c = num.join("--")
// console.log(c)
// console.log(typeof c)

//Pop - pops out last element from array

// let poped = num.pop()
// console.log(num)
// console.log(poped)

//shift - pops out first element from array
// let shifted = num.shift()
// console.log(num)
// console.log(shifted)


//Push -  adds new element at the end of the array
// let pushed = num.push('abcd')
// console.log(num)
// console.log(pushed)

//unshift - add new element at the start of the array and returns new array

// let r = num.unshift(10)
// console.log(r)
// console.log(num)

/*
* Arrays Methods In Js - PART 2
*/

// let num = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9]
// console.log(num)

//Delete - does not affect the length of the array
//only delete element at given index
// delete num[0]
// console.log(num) //[empty, 2, 3, 4, 5, 6, 7, 8, 9]


// let num = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9]
// let num2 = [11 , 12, 13, 14, 15, 16, 17 , 18 ,19]
// let num3 = [21, 22, 23 , 24, 25]


//Concat Method  - 
//to merge the arrays, 
//returns a new array , does not change existing array

// let newArray = num.concat(num2)
// console.log(newArray)

// let newArray2 = num.concat(num2, num3)
// console.log(newArray2)


//Sort Method - 
//modifies the original array
//it is used to sort an array alphabetically

// let num = [551 , 22 , 3 , 14 , 5 , 6 , 7 , 8 , 229]
// num.sort()
// console.log(num)

//Reverse - modifies the original array
// num.reverse()
// console.log(num)

//Splice and Slice methods

//Spilce
//first param - start index
//second param - number of elements to be deleted
//rest parameters to be added

// let num = [551 , 22 , 3 , 14 , 5 , 6 , 7 , 8 , 229]
// num.splice(2, 4, 1002, 1002)
// console.log(num)


//Slice - slices out the piece of an array , returns a new array
// let num = [551 , 22 , 3 , 14 , 5 , 6 , 7 , 8 , 229]
// console.log(num)
// slicearr = num.slice(2,4)
// console.log(slicearr)


/*
* Using loops with Array
*/

// let num = [3 , 54 , 1 , 2 , 4]

// for(let i=0; i< num.length ; i++){
//     console.log(num[i])
// }


//forEach

// num.forEach((ele)=>{
//     console.log(ele)
// })


//Map
//cretes a new array by performing some function on each array element

// const arr = [45, 23, 21]
// let a = arr.map((value)=>{
//     console.log(value)
//     return value+1
// })

// const arr = [45, 23, 21]
// let a = arr.map((value , index)=>{
//     console.log(value , index)
//     return value+1
// })

// const arr = [45, 23, 21]
// let a = arr.map((value , index, array)=>{
//     console.log(value , index , array)
//     return value+1
// })

//Filter

// const arr2 = [0, 3, 5 , 10, 12, 17]
// let arr = arr2.filter((item)=> {
//     return item<10
// })
// console.log(arr)

//Reduce
// const arr = [1, 2, 3, 4, ,5 ]
// let newarr = arr.reduce((h1, h2)=>{
//     return h1+h2
// })
// console.log(newarr)

// const arr3 = [1, 2, 3, 4 ,5, 2, 1 ]
// let reduce_func = (h1, h2) => {
//     return h1+h2
// }

// let newarr = arr3.reduce(reduce_func)
// console.log(newarr)


//Console

// console.log("hello")
// console.error("this is error")
// console.warn("this is warning")
// console.log("this is info")
//assertion prints when assertion is failed
// console.assert(5<10)  
// console.assert(5>10) 

//to clear console
// console.clear()
// const obj = {key1:"value1", key2:"value2"}
// console.table(obj)


// Alert , Confirm , Prompt

// alert("hello")

//prompt - accepts user input and returns
// let a = prompt("enter some number")
// console.log(a)

//confirm - returns true or false
// let a = confirm("are you ok ?")
// console.log(a)



//DOM , BOM and Window

//window is the global object

// console.log(window)
// window.console.log(window)
// window.alert()

//DOM ??
//JS creates one object named document and it represents whole html of page 

// console.log(document)
// console.log(document.body)
// document.body.style.background = "pink"

//JS can change html , css

//BOM ? - it represents additional objects provided by browser
//eg - alert , prompt , confirm are also a part of BOM


/*
* DOM Manipulation
*/



/*
* Access childs 
*/

// console.log(document.body.firstChild)
// console.log(document.body.lastChild)


//console.log(document.body.childNodes) //this does not returns an array  , it returns nodelist

//let arr = Array.from(document.body.childNodes)
//console.log(arr) //this is an array

// document.body.childNodes[0] is same as document.body.firstChild

// document.body.childNodes[document.body.childNodes - 1] is same as document.body.lastChild

/*
* Access Siblings
*/
//next sibling
//console.log(document.getElementsByClassName('first')[0].nextSibling)

//prev sibling
//console.log(document.getElementsByClassName('second')[0].prevSibling)

/*
* Accessing Parent
*/

// console.log(document.getElementsByClassName('first')[0].parentNode) //parentNode can return anything - text , comment or html element

// console.log(document.getElementsByClassName('first')[0].parentElement) //parentElement can only return valid html element








