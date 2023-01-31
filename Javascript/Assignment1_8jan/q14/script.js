let my_arr = [3, 33 , 22, 34, 35, 78];
my_arr.forEach(function (item) {
    if(item%2==0){
        console.log('The number ',item,' is even number')
    }
    else{
        console.log('The number ',item,' is odd number')
    }
});