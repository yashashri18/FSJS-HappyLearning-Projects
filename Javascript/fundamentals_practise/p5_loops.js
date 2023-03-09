//Loop - used , when a task is repeated

//While loop - the block of code is executed after the condition is checked

let count = 1;
while(count <=5){
    console.log("counting");
    count++;
}

//sum of even numbers between 1 to 100
let counter = 1;
let sum = 0;

while(counter <= 100){
    if(counter%2==0){
        sum = sum+counter;
    }
    counter++;
}
console.log("sum of even numbers between 1 to 100 is", sum);



//Do While loop - first the block of code is executed, then it will scheck the condition
count =1;
do{
    console.log(count);
    count++;
}while(count<=5)


//For loop
count =1;
for(count =1;count<=5;count++){
    console.log(count);
}


//Break - it stops execution and comes out of the block, terminates the loop/execution
count =1;
for(count =1;count<=5;count++){
    if(count ==3){
        break;
    }
    console.log(count);
}

//Continue - it will skip execution only for matched value , and then starts execution for remaining loop
count =1;
for(count =1;count<=5;count++){
    if(count ==3){
        continue;
    }
    console.log(count);
}

//Nested Loops
for(let counti =1;counti<=5;counti++){
    for(let countj =1;countj<=5;countj++){
        console.log(counti * countj)
    }
}

