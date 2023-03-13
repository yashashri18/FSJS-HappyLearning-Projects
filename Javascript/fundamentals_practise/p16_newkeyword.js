//we can create obj like this
// var person = {
//     name: "yash",
//     age:25
// }
// console.log(person.name)

//create object using new

// var person = new Object();
// person.name = "Yash"
// person.age = 25;
// console.log(person.name)


//----------getters-----------
var person = {
    name: "yash",
    age:25,

    //getters
    // getname: function(){
    //     return this.name.toUpperCase();
    // }
    get getname(){
        return this.name.toUpperCase();
    },
    //setter
    set setname(n){
        this.name = n.toUpperCase();
    }
}
console.log(person.getname)
person.setname = "yashashri"
console.log(person)
