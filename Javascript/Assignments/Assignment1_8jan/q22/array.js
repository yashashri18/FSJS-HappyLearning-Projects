// Question
// The following is an array of 10 students ages:
// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// 1. Sort the array and find the min and max age
// 2. Find the median age(one middle item or two middle items divided by two)
// 3. Find the average age(all items divided by number of items)
// 4. Find the range of the ages(max minus min)
// 5. Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]


//1. Sort the array and find the min and max age
let min = ages.sort()[0];
console.log("The min element is ",min)
let max = ages.sort()[ages.length-1];
console.log("The max element is ",max)

// 2. Find the median age(one middle item or two middle items divided by two)
//length is even
if((ages.length%2)==0){
    let median = (ages.sort()[ages.length/2] + ages.sort()[(ages.length/2)+1])/2;
    console.log("median is - "+median);

}else{
    //lenght is odd
    console.log("median is - ",ages.sort()[(Math.ceil(ages.length/2))])
}


// 3. Find the average age(all items divided by number of items)
let sum=0;
for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
}
let avg = sum/ages.length;
console.log("The average is ",avg);

// 4. Find the range of the ages(max minus min)
console.log("the range of ages is - ",(max-min));

  
// 5. Compare the value of (min - average) and (max - average), use abs() method

if(Math.abs(min - avg)>Math.abs(max- avg)){
    console.log("In the above array ,the absolute value of Math.abs(min - avg) is greater than Math.abs(max- avg)");
}else{
    console.log("In the above given array ,the absolute value of Math.abs(min - avg) is lesser than Math.abs(max- avg)");
}
