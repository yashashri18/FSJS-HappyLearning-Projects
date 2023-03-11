//Repeatative block of code is written in the fn
//Types
//1. Predefined eg:alert(), confirm(), console.log()
//2. User Defined
//-----Functions with Argument-----
function MulTable(num){//num is parameter
    for(i=0;i<=10;i++){
        console.log(`${num} x ${i} = ${num*i}`);
    }
}

//MulTable(3);//passing argument
//console.log();
//MulTable(5);

//------Passing Two Arguments-------

function add(num1,num2){
    console.log(num1+num2)
}
//add(5,7);
//add(3,8);


//------Passing variable Arguments-------

//Arguments array- padding variables numbers of arguments
//it bydefaults creates an array of arguments named as 'arguments'
function add(){
    
    if(arguments.length == 0){
        console.log('No parameters passed')
    }else{
        //console.log(arguments);
        let sum = 0;
        for(let i=0;i<arguments.length;i++){
            sum = sum+ arguments[i];
        }
        console.log("sum of arguments is ",sum)
    }
}
// add();
// add(5);
// add(5,6);
// add(4,5,6);
// add(4,5,6,7);
// add(4,5,6,7,8);


//------Storing Function in a Variable-------
let addition = add;//now we can call the fun by addition name also
//addition(3,4)


//------Returning a value using Function-------

function addNum(a,b){
    return a+b; //we can return anything - array,number,string,any data-types
}
let c = addNum(5,6);
//console.log(c);
//console.log(addNum(6,6));

//Note - 
//1. if we do not return anything , bydefault it will return undefined
//2. we can not return 2 times , it returns back from the first return statement



//------Anonymous Function-------

// we can assign function to a variable like this 
let show = function abc(){
    console.log("Inside Show");
};

//Anonymous Function - now if we are assigning , then we can assign without name also

let show1 = function(){
    console.log("Inside Show1");
};
//the above syntax is also called as Function Expression
//calling
//show1();

//we create anonymous fn,
// 1. if calling only one time
// 2. passing as a parameter
// 3. computer's memory is not wasted, by saving the name of fun

// setTimeout(function(){
//     console.log("inside anonymous fn");
// },3000);


//------------Immediately Invoked Function --------------
/*
(function(){
    console.log("hello")
})();
*/

//why to use
// 1. if we want to use some variable with limited life and want to use only for 
//some bliock of code, then we write that in II function
//2. we can use the same global variable name in local scope

let str1 = "global";
(function(){
    let str1 = "local";
    console.log(str1)
})();
console.log(str1)


