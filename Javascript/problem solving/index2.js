// //Q-1 Write a JavaScript program to display the current day and time in the following format.  
// //Sample Output : Today is : Tuesday.
// //Current time is : 10 PM : 30 : 38
// //Solution - 

// const d = new Date()
// console.log(d)

// const weeks = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

// console.log("Today is : "+weeks[d.getDay()]+".")

// let h = d.getHours()
// let m = d.getMinutes()
// let s = d.getSeconds()
// let ap = "PM"

// if(h>12){
//   h=h-12
//   ap = "AM"
// }
// console.log("Current time is : "+h+" "+ap+" : "+m+" : "+s)


// //Q-2: Write a JavaScript program to get the current date.
// //in below format 
// //mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
// //Solution - 

// //get month
// let mo = d.getMonth()+1
// if(mo<9){
//   mo = "0"+mo
// }

// //get date
// let de = d.getDate()
// if(de<10){
//   de = "0"+de
// }

// //get year
// let yr = d.getFullYear()
// console.log("mm-dd-yyyy : "+mo+"-"+de+"-"+yr)
// console.log("mm/dd/yyyy : "+mo+"/"+de+"/"+yr)
// console.log("dd-mm-yyyy : "+de+"-"+mo+"-"+yr)
// console.log("dd/mm/yyyy : "+de+"/"+mo+"/"+yr)

// //Q-3 Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

// //Solution
// var s1=5, s2=6, s3=7
// var sp = (s1+s2+s3)/2

// var area = Math.sqrt(sp*(sp-s1)*(sp-s2)*(sp-s3))
// console.log("Area is "+area)

// //Q-4: Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.

// text = "w3resource"
// // setInterval(function () 
// // {
// //  text = text[text.length - 1] + text.substring(0, text.length - 1);
// //   console.log(text)
// // }, 2000);

// //Q-5 : 
// //Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar. 
// let lyear = 2020
// console.log((lyear%100 == 0)?((lyear%400 == 0)):((lyear%4 == 0)))

// //logic - if year%4 ===0 -> if(year%100 ===0) -> if(year%400==0) -> leap year
// //if it is divisible by  4 and 100 , it is divisible by 400 also

// //Q-6
// //Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050

// //month 0-11
// //date - 1
// //year varies
// for(let i=2014;i<=2050;i++){
//   var firstdate = new Date(i,0,01)
//   if(firstdate.getDay()==0){
//     console.log("For "+i+" True")
//   }
// }


// //Q - 7
// // Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched"
// //let userinput = prompt("What's your name?"); //this will run in browser
// let userinput =7;
// if(userinput == Math.ceil(Math.random()*10)){
//     console.log("Good Work")
// }
// else{
//     console.log("Not matched")
// }

// //Q-8 Write a JavaScript program to calculate days left until next Christmas. 
// today = new Date()
// let c_date = new Date(today.getFullYear(), 11, 25)
// if(today.getMonth()==11 && toady.getDate()>=25){
//     c_date.setFullYear(c_date.getFullYear()+1)
// }
// let diff = c_date - today
// console.log("diff in days is "+Math.ceil((diff)/(1000*60*60*24)))


console.log("hello")
