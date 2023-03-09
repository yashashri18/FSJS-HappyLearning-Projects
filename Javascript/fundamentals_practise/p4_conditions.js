// If Condition
if(5<7){
    console.log("5<7")
}


// If Else Condition

let age = 19;
if(age>=18){
    console.log("you can vote");
}else{
    console.log("you can not vote");
}


// if elseif else Condition


// if(condition1){
// ..
// }else if(condition1){
// ..
// }else{
// ..
// }

//Nested if else

let hasVoterCard = "No";
if(age>=18){
    if(hasVoterCard == "yes"){
        console.log("You can vote");
    }else{
        console.log("get your voter card");
    }
}else{
    console.log("You can not vote");
}

//Ternary Operator
let isLoggedin =1 ; //if 0 logout , if 1 login
let option = isLoggedin == 1 ? "logout":"login";
console.log(option)


//Nullish coalescing operator

let user;
console.log(user);
console.log(user ?? "Guest User"); // instead of undefined, the user will get the given value
user = "test";
console.log(user ?? "Guest User"); // if user have value, it will print that value


//Switch Case - 
//it is used when strict comparision is required

let input;
input = 0;

switch(input){
    case 1://if(input === 1)
        console.log("1....");
        break;
    case 2:
        console.log("2....");
        break;  
    default:      
        console.log("invalid");
        break;
}

//we can use below syntax - if multiple cases have same output-

switch(input){
    case 1://if(input === 1)
    case 'one'://if(input === one)
        console.log("1....");
        break;
    case 2://if(input === 1)
    case 'two'://if(input === 'two')
        console.log("2....");
        break;   
    default:      
        console.log("invalid");
        break;   
}




