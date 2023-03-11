//Creating Array

//Method 1
//let Book = new Array ("Math", "Physics","Bio","Computer Science");
//Mathos 2
let Book = ["Math", "Physics","Bio","computer science"];

//accessing values using index
//console.log(Book[0]);

//changing value using index
//Book[1]="English";
//console.log(Book);


//Opearations in Array

//Length
//console.log(Book.length);

//push() - Adding element at the end of array
//Book.push('Hindi');
//console.log(Book);


//unshift() - Adding element at the start of array
// Book.unshift('Hindi');
// console.log(Book);

//pop() - removes element from end
// Book.pop();
// console.log(Book);

//shift() - removes element from beginning
// Book.shift();
// console.log(Book);

//splice() - removes elements from given index
// Book.splice(2,2); //start index, how many elements to delete
// console.log(Book);

//Making array empty
//Book = []; //method 1
//Book.length = 0;
//console.log(Book);

//indexOf() 
//console.log(Book.indexOf("Bio"));

//isArray() - determines whether it is array or not
//console.log(Array.isArray(Book))
// let p =10;
// console.log(Array.isArray(p))

//split() - splits words of string into array
// let text = "This is a random text";
// let wordarray = text.split(' ');
// console.log(wordarray)
// wordarray = text.split('s');
// console.log(wordarray)

//join() - creates string from array
//let str = Book.join(); //joins using ,
//let str = Book.join(' '); //joins using space
//let str = Book.join('ab'); //joins using ab
//let str = Book.join('-');
//console.log(str);

//Merge two arrays -
// let Book2 = ['Hindi','English'];
// let Book3 = ["Lang1","Lang2"]
// let newBook = Book.concat(Book2,Book3);
// console.log(newBook);


// MultiDimentional Array

let bookWithPages = [
    ["Math","300"],
    ["Physics","300"],
    ["Science","300"],
    ["Chem","300"],
    ["Bio","300"]
];

// console.log(bookWithPages[0][0]);
// console.log(bookWithPages[0][1]);
// console.log(bookWithPages[1][0]);
// console.log(bookWithPages[1][1]);
// console.log(bookWithPages[1]);
// console.log(bookWithPages[3]);


//for each loop 

Book = ["Math", "Physics","Bio","computer science"];

Book.forEach(myfun);
function myfun(value){
    console.log(value)
}