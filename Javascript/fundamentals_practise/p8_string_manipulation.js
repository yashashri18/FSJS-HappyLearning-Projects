let strF = "Yashashri";
let strL = 'Bongulwar';
let fullname = `${strF} ${strL}`; //template literal

//Use of Escape Character

//for new line 
let str = "Yashashri \n Bongulwar"
//console.log(str)

//for tab spacing
str = "Yashashri \t Bongulwar"
//console.log(str)

//if we want to print \ itself
str = "Yashashri \ Bongulwar"; //wont work
let str2 = "Yashashri \\ Bongulwar"; //work 
//console.log(str); 
//console.log(str2); 

str = "Yashashri \" Bongulwar"; //if we want " 
//console.log(str);


//Length of string
str = "Hello"
//console.log(str.length);

//Char at some digit
//console.log(str[0]); //indexing starts from 0

//Concat
str = "Yashashri";
str2 ="Bongulwar";
//console.log(str+" "+str2)

//String Methods


//Concat Method
let str3 = str.concat(" ",str2);
//console.log(str3);

//Substring
str = "  This is Javascript learning. It is usefull learning  "
//console.log(str.substr(8,18));//start index, length from start index
//console.log(str.substring(0,6)); //start index, end index(exclusive)

//Indexof
// console.log(str.indexOf("learning"));
// console.log(str.indexOf("learning", 20)); //starts scanning from index 20
// console.log(str.lastIndexOf("learning")); //starts from last
// console.log(str.lastIndexOf("abcd"));//returns - 1, means given string is not present


//Remove spaces from sides
// console.log(str.trim()); 
// console.log(str.trimStart()); //removes spaces from start 
// console.log(str.trimEnd()); //removes spaces from end 


//Capitalization
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());


//Replace
//console.log(str.replace("usefull","the best"));

//Include - returns true or false
console.log(str.includes("usefull"));
console.log(str.includes("Usefull"));



