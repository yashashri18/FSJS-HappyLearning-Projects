//DAte is another predefined object in js

let x = new Date(); //current date ad=nd time
console.log(x)

//year. month, day, hr, min, sec, milisec
x = new Date(2018, 11, 13, 10, 33,56,7);
console.log(x)

x = new Date(2018, 11, 13);
console.log(x)

//min year and month are mandatory
x = new Date(2018, 01);
console.log(x)


//there are many predefined format as below
x = new Date("October 13,2028");
console.log(x)

//1 jan 1970 calculations start from this day

//getters
x = new Date();
console.log(x.getTime()); //time in milisections from 1 jan 1970
console.log(x.getFullYear());//2023
console.log(x.getMonth()); // 0 - Jan
console.log(x.getDate());
console.log(x.getHours());
console.log(x.getMinutes());
console.log(x.getSeconds());
console.log(x.getDay()); //0 - sunday , 1- monday, 2- tuesday

//setters
x.setFullYear(2024);
x.setMonth(0);
x.setSeconds(45);
x.setMinutes(55);
console.log(x);

//calculate date after 50 days from 13 Oct , 2018
x = new Date('October 13, 2018 11:12:33');
x.setDate(x.getDate()+50)
console.log(x)

//comparing two dates

x = new Date('October 13, 2018 11:12:33');
let y = new Date();
if(x>y){
    console.log("x is past date")
}else{
    console.log("y is past date")
}