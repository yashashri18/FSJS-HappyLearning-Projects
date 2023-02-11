// Question : Declare a varibale and assign string value to it and check if the string contains a word Script using includes() method.


let my_string = 'Lorem ipsum is dummy text that we can insert if we dont have actual data'
let finder_word = "ipsum22"
let finder_word2 = "ipsum"

if(my_string.includes(finder_word)){
    console.log('my_string contains the word ', finder_word);
}else{
    console.log('my_string does not contains the word ', finder_word);
}
if(my_string.includes(finder_word2)){
    console.log('my_string contains the word ', finder_word2);
}else{
    console.log('my_string does not contains the word ', finder_word2);
}


//Output - 
// my_string does not contains the word  ipsum22
// my_string contains the word  ipsum