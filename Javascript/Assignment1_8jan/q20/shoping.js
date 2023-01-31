// Question - 
// In the following shopping cart add, remove, edit items
// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// - add 'Meat' in the beginning of your shopping cart if it has not been already added
// - add Sugar at the end of your shopping cart if it has not been already added
// - remove 'Honey'
// - modify Tea to 'Green Tea'

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

//1. add 'Meat' in the beginning of your shopping cart if it has not been already added
if(!shoppingCart.includes("Meat")){
    shoppingCart.unshift('Meat');
}
console.log("1. Output after adding Meet at start -",shoppingCart);

//2. add Sugar at the end of your shopping cart if it has not been already added
if(!shoppingCart.includes("Sugar")){
    shoppingCart.push('Sugar');
}
console.log("2. Output after adding Meet at end of array -",shoppingCart);

//3. remove 'Honey'

//first find at which index honey is present in array
let honey_index = shoppingCart.indexOf('Honey');
//using splice method we can modify, insert , delete the contents of array
//here first parameter is the start index
//second parameter - how many element to be deleted from given start index
shoppingCart.splice(honey_index,1);
console.log("3. Output after removing honey -",shoppingCart);


//4. modify Tea to 'Green Tea'
let tea_index = shoppingCart.indexOf('Tea');
shoppingCart[tea_index]="Green Tea";
console.log("4. Output after changing Tea to Green Tea -",shoppingCart);


//Output
// 1. Output after adding Meet at start - [ 'Meat', 'Milk', 'Coffee', 'Tea', 'Honey' ]
// 2. Output after adding Meet at end of array - [ 'Meat', 'Milk', 'Coffee', 'Tea', 'Honey', 'Sugar' ]
// 3. Output after removing honey - [ 'Meat', 'Milk', 'Coffee', 'Tea', 'Sugar' ]
// 4. Output after changing Tea to Green Tea - [ 'Meat', 'Milk', 'Coffee', 'Green Tea', 'Sugar' ]