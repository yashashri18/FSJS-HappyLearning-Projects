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

