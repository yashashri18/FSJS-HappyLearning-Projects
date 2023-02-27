//***************Map - if we want to transform each and every element of an array***************

const arr = [1,2,3,4,5]
//transformation logic
function double(x){
    return x*2;
}
//transformation logic
function binary(x){
    return x.toString(2)
}

const outputb = arr.map(binary)
console.log(outputb)
//const outputd = arr.map(double)
//console.log(outputd)


//the same can be written like this also- higher order function
const outputd = arr.map(function double(x){
    return x*2;
});
console.log(outputd)

//this can be simplified to arrow function as well
const outputd2 = arr.map((x) => x*2);
console.log(outputd2)


//***************Filter - to filter out values depending on some conditions***************

const arr2 = [1,2,3,4,5]

//filter out even/odd values
function isOdd(x){
    return x%2;
}
function isEven(x){
    return x%2===0;
}
const odd_output = arr2.filter(isOdd)
console.log(odd_output)
const even_output = arr2.filter(isEven)
console.log(even_output)

const greater_output = arr2.filter((x)=> x>3)
console.log(greater_output)


//***************Reduce - to find sum,max/min*************
//the output is reduced to one single value

const arr3 = [1,2,3,6,7,4,5]

//sum

function findSum(arr){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum = sum + arr[i];
    }
    return sum;
}

console.log(findSum(arr3))


//the above logic can be done using reduce function

//the function inside reduce takes two parameters
//acc - accumulator - which accumulates the resulted value
//curr- current - takes each element of array

//also the reduce function takes two arguments
//first is function
//second is initial value of acc eg - 0 in the below example
const outputsum = arr3.reduce(function(acc, curr){
    acc = acc + curr
    return acc
},0);

console.log(outputsum)

const outputmax = arr3.reduce(function(acc, curr){
    if(curr>acc){
        acc=curr
    }
    return acc
},0);

console.log(outputmax)


//***************Few Examples************

const users = [
    {firstName: "yash", lastName: "bongulwar", age:26},
    {firstName: "yashashri", lastName: "bongulwar", age:25},
    {firstName: "parth", lastName: "bongulwar", age:27},
    {firstName: "om", lastName: "bongulwar", age:26}
]

//list of full names

const fnames = users.map(x => x.firstName +" "+x.lastName)
console.log(fnames)

//users with age 26
const age26 = users.filter(x => x.age===26)
console.log(age26)

//first names of users with age 26
const nameage26 = users.filter(x => x.age===26).map(x => x.firstName)
console.log(nameage26)

// Note - we can do chaning of map, filter and reduce 