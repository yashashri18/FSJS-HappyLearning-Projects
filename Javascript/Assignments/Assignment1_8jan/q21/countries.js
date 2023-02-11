//Question : In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.


let countries =  ['India','Ethiopia','France','Germany','Switzerland'];
if(countries.includes('Ethiopia')){
    console.log('Ethiopia is present in array')
}else{
    countries.push('Ethiopia');
}
console.log(countries);