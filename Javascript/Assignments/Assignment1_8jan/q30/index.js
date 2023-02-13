//30. Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.

function add(a,b){
    console.log(a+b);
}
function sub(a,b){
    console.log(a-b);
}
function mult(a,b){
    console.log(a*b);
}
function divide(a,b){
    console.log(a/b);
}

const performCalculation = (operator, num1, num2) => {
    switch (operator) {
        case '+':
            add(num1, num2);
            break;
        case '-':
            sub(num1, num2);
            break;
        case '*':
            mult(num1, num2);
            break;
        case '/':
            divide(num1, num2);
            break;
        default:
            console.log('Invalid operator.');
            return NaN;
    }
};

performCalculation('+',6,8) //14
performCalculation('-',6,8) //-2
performCalculation('*',6,8) //48
performCalculation('/',6,8) //0.75
performCalculation('+',10,9) //19
performCalculation('/',6,2) //3

