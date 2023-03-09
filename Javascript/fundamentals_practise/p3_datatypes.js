//in JS - DYNAMIC DATA VARIABLES : we can change the type of data stored in a variable

//Data Types

//1. String

let x = "hello";
let y = 'helo';
let z = "he'lo";
let p = 'he"lo';
let q = "he\"lo";
console.log(x+" "+y+" "+z+" "+p+" "+q+" ")
console.log(typeof(x)); //returns what type of data is stored in the database

//Template Literal
console.log(`template literal-> ${x} ${y} ${z} ${p} ${q}`)

//2. Number

let a = 10;
let b = -10;
let c = 1.56;
console.log(a+" "+b+" "+c)

//3. Boolean - true, false

let m = true;
let n = false;
//truthy and falsy values
console.log(2>3);
console.log(2<3);

//4. Undefined

let f;
console.log(f);

//5. Array
let d = ["abc","def","ghi"];

//6. Object
let e = {
    key1: "val1",
    key2: "val2"
}

//7. Null


