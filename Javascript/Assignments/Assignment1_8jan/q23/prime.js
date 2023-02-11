//Question : Write a program to check that the number given by the user is a prime number or not.

function checkPrime(num){
    if(num==1){
        console.log("number is not prime number");
        return;
    }
    let count = 0;
    for (let i = 2; i < num; i++){
        if(num%i==0){
            count++;
        }
    } 
    if(count>0){
        console.log(num," is not prime number");
    }else{
        console.log(num," number is prime number");
    }
}
//2,3,5,7,11
checkPrime(1);