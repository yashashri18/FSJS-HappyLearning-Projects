//Question - 29. Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.

function checkfiletype(fname){
    //console.log(fname.indexOf("."))
    if(fname.indexOf(".")==-1){
        console.log("Please provide a file with extension")
    }
    else{
        console.log("the extension of file is -",fname.substring(fname.lastIndexOf(".")+1, fname.length));
    }
}

checkfiletype("style.css") // the extension of file is - css
checkfiletype("index.js") // the extension of file is - js
checkfiletype("script.js") // the extension of file is - js
checkfiletype("index.html") // the extension of file is - html
checkfiletype("hello") // Please provide a file with extension
checkfiletype("hello.js.html") // the extension of file is - html