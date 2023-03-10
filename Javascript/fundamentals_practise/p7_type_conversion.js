// 1. String() //converts into string
// 2. Number()
// 3. Boolean()

//Number to String
let type = 4;
console.log(typeof type);
let newType = String(type);
console.log(typeof newType);


//Boolean to String
let typeB = true;
console.log(typeof typeB);
let newTypeB = String(typeB);
console.log(typeof newTypeB);

//String to Number eg 1
type = "32";
console.log(typeof type);
newType = Number(type);
console.log(typeof newType);

//String to Number eg 2
type = "hello";
console.log(typeof type);
newType = Number(type);
console.log(newType); //NaN
console.log(typeof newType);

//Booelan to Number
type = true;
console.log(typeof type);
newType = Number(type);
console.log(newType); //1
console.log(typeof newType);

//Number to Boolean eg 1
type = 0;
console.log(typeof type);
newType = Boolean(type);
console.log(newType); //false - for 0 
console.log(typeof newType);

//Number to Boolean eg 2
type = 66;
console.log(typeof type);
newType = Boolean(type);
console.log(newType); //true for all except zero
console.log(typeof newType);

//String to Boolean eg 1
type = "";
console.log(typeof type);
newType = Boolean(type);
console.log(newType); //false - as string is empty
console.log(typeof newType);

//String to Boolean eg 2
type = "abcd";
console.log(typeof type);
newType = Boolean(type);
console.log(newType); //true - for nonempty string
console.log(typeof newType);