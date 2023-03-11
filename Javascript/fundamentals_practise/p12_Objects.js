//Objects has (Human)
// 1. Properties - the one who defines us (Name, Height, Mobile no)
// 2. Functions - the actions that can be executes (walk, sing, eat)

//Objetsc in Programming
// Student, Teacher , Course, Book in Learmning mgnt system
// Account, Account holder, cashier - Banking System
//Book, Department - Library mgnt system


//-----empty object------
// let Person = {};
// console.log(Person)

//------object with properties----

let Person = {
    firstName: "Yashashri",
    lastName: "Bongulwar"
};
console.log(Person)

//accessing values
console.log(Person.firstName)
console.log(Person.lastName)
console.log(Person.age) //undefined
console.log(Person['firstName'])
console.log(Person) //{ firstName: 'Yashashri', lastName: 'Bongulwar' }

//modifing value
Person.firstName = 'yash'
console.log(Person)

//adding new property to existing obj
Person.age = '25';
console.log(Person)

//deleting property
delete Person.lastName
console.log(Person)

//checking if property is present - returns true or false
console.log('age' in Person)
console.log('age2' in Person)


Person.weight = '50';
//Iteration over properties
for (let key in Person){
    console.log(key+" "+Person[key])
}


//------object Methods--------

//methos 1
Person.sayHello1 = function(){
    console.log("hello from method1")
}
//Person.sayHello1();

//method 2
function greet(){
    console.log("hello from method2")
}
Person.sayHello2 = greet;
//Person.sayHello2();

//method 3  
let P = {
    firstName: "Yashashri",
    lastName: "Bongulwar",
    sayHello: function(){
        console.log("hello from method3")
    }
}
//P.sayHello();

//method 4 - es6
let P2 = {
    firstName: "Yashashri",
    lastName: "Bongulwar",
    sayHello(){
        console.log("hello from method4")
    }
}
//P2.sayHello();



// ---------------This property-------

let p = {
    firstName : 'Yash',
    lastName: "B",
    brand:"Audi",
    sayHello(){
        console.log("Hello ! I have a "+car.brand +" car")
        console.log("Hello ! I have a "+this.brand +" car") //this refers to current obj
    }
};
let car = {
    brand: "Tata",
    model : "Safari"
}

p.sayHello();



//--------------Object constructor - to create blueprint of Object---


//object constructor function

function Student(first,last,age,cls){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.class = cls;
}

//creating objects

let std1 = new Student("Yash","B","25","19");
let std2 = new Student("Yasha","Ba","21","6");

console.log(std1)
console.log(std2)

//aading one more prop in std1 object only
std1.nationality = "India"
console.log(std1)

std1.name = function(){
    return this.firstName+" "+this.lastName
}
console.log(std1)
console.log(std1.name())

//adding property,methods to object constructor function - using Proptotype 

//protype is a super class
//every object in js inherites from prototypes
Student.prototype.nationality = "India"; //this we can see in browser's console as it is added in Persons's proptype
console.log(std1) 
console.log(std2)

Student.prototype.name = function(){
    return this.firstName+ " "+this.lastName;
}

///this we can see in browser's console as it is added in Persons's proptype
console.log(std1) 
console.log(std2)



//------------------Nested Onjects ------------

let User = {
    id:101,
    email:"abc@gmail.com",

    personalInfo: {
        name : "abc",
        addr: {
            street: "ababab",
            city: "ukd",
            country :"India"
        }
    }
};

console.group(User)
console.group(User.personalInfo)
console.group(User.personalInfo.addr)
console.group(User.personalInfo.addr.city)