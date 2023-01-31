// Question: Use the Date object to do the following activities
// - What is the year today?
// - What is the month today as a number?
// - What is the date today?
// - What is the day today as a number?
// - What is the hours now?
// - What is the minutes now?
// - Find out the numbers of seconds elapsed from January 1, 1970 to now.

//year
let my_date = new Date();
console.log('The current year is - ',my_date.getFullYear())
console.log('The current month is - ',my_date.getMonth())
console.log('The current date is - ',my_date.getDate())
console.log('The current day is - ',my_date.getDay())
console.log('The running hour is - ',my_date.getHours())
console.log('The running minute is - ',my_date.getMinutes())

let curr_date = new Date();
let curr_time = curr_date.getTime();

var past_date = new Date("01/01/1920");
let past_time = past_date.getTime();

console.log((curr_time - past_time)/1000)

//Date.now() returns the number of miliseconds since January 1, 1970

console.log("The seconds elapsed since january 1st 1970 are ",Date. now()/1000)
