// Question:12. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

var my_date = new Date();
console.log(my_date);

//get day
let my_day = my_date.getDate();
if(my_day<10){
    my_date = "0"+my_day;
}
console.log(my_day)

//get month
let my_month = my_date.getMonth()+1;
if(my_month<10){
    my_month = "0"+my_month;
}
console.log(my_month)

//get year
let my_year = my_date.getFullYear();
console.log(my_year)

//get hours
let my_hour = my_date.getHours();
console.log(my_hour)

//get mins
let my_mins = my_date.getMinutes();
console.log(my_mins)

//YYYY-MM-DD HH:mm
function format1(my_day, my_month, my_year,my_hour,my_mins){
    return my_year+"-"+my_month+"-"+my_day+" "+my_hour+":"+my_mins;
}

//DD-MM-YYYY HH:mm
function format2(){
    return my_day+"-"+my_month+"-"+my_year+" "+my_hour+":"+my_mins;
}

//DD/MM/YYYY HH:mm
function format3(){
    return my_day+"/"+my_month+"/"+my_year+" "+my_hour+":"+my_mins;
}


let result1 = format1(my_day, my_month, my_year,my_hour,my_mins);
console.log("YYYY-MM-DD HH:mm Format output - ",result1);

let result2 = format2(my_day, my_month, my_year,my_hour,my_mins);
console.log("DD-MM-YYYY HH:mm Format output - ",result2);

let result3 = format3(my_day, my_month, my_year,my_hour,my_mins);
console.log("DD/MM/YYYY HH:mm Format output - ",result3);


