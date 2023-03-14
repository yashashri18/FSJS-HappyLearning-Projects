var timer = false;

var count = 0;
var sec = 0;
var min = 0;
var hr = 0;

function start(){
    timer = true;
    stopWatch();
}
function stop(){
    timer = false;
}
function reset(){
    timer = false;
    count = 0;
    sec = 0;
    min = 0;
    hr = 0;

    document.getElementById("count").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("hr").innerHTML = "00";



}

function stopWatch(){
    

    if(timer == true){
        
    count = count +1; //when count value is 100 , it means 1000miliseconds are crossed, then increase second's value by 1
    if(count==10){
        sec = sec + 1;
        count =0;
    }
    if(sec == 60){
        min = min + 1;
        sec = 0;
    }
    if(min == 60){
        hr = hr+1;
        min = 0;
        sec = 0;
    }

    let strCount = count;
    let strSec = sec;
    let strMin = min;
    let strHr = hr;

    if(strCount<10){
        strCount = "0"+strCount;
    }
    if(strSec<10){
        strSec = "0"+strSec;
    }
    if(strMin<10){
        strMin = "0"+strMin;
    }
    if(strHr<10){
        strHr = "0"+strHr;
    }
    

    document.getElementById("count").innerHTML = strCount;
    document.getElementById("sec").innerHTML = strSec;
    document.getElementById("min").innerHTML = strMin;
    document.getElementById("hr").innerHTML = strHr;

        setTimeout("stopWatch()",100)//this function is called in every 10 milisecoonds
    }
}
