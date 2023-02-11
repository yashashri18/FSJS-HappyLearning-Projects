// Question - Write a program to print all the prime number between 0 to 100 (0 and 100 included).

function checkPrime(num){

    for (let i = 1; i <= num; i++){
        let count = 0;
        for (let j = 2; j < i; j++){
            if(i%j==0){
                count++;
            }
        } 
        if(i==1){
            console.log(i," is not prime number");
        }else if(count>0){
            console.log(i," is not prime number");
        }else{
           console.log(i," number is prime number");
        }
    }
    
}

checkPrime(100);