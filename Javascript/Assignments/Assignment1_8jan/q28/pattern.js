//Write a program to print the given patterns using the loops-


// a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
//    *
//    **
//    ***
let input = 3;
for (let i = 1; i <= input; i++){
    let str="";
    for (let j = 1; j <= i; j++){
        str = str + "* "
    }
    console.log(str)
}

	
// b. Print a square pattern, if the input is 3 then the output should be similar to the given output
//    ***
//    ***
//    ***

for (let i = 1; i <= input; i++){
    let str="";
    for (let j = 1; j <= input; j++){
        str = str + "* "
    }
    console.log(str)
}

// c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
//      *   1 -1
//     ***  2 -3
//    ***** 3 -5
let k =0
for (let i = 1; i <= input; i++){
    let str="";
    for (let j = 1; j <= input-i; j++){
        str = str + " "
    }
    for (let j = 1; j <= (i + k); j++){
        str = str + "*"
    }
    k++
    console.log(str)
}