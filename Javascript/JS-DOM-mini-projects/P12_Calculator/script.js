let buttons = document.querySelectorAll('.global');
const btns_array = Array.from(buttons);

let exp=""


btns_array.map((elem)=>{
    elem.addEventListener('click',()=>{
        if(elem.value === "="){
            exp = eval(exp)
            document.querySelector('.result').value = exp
           
        }else if(elem.value === "C"){
            exp=" "
            document.querySelector('.result').value = exp
        }
        else{
            console.log(elem.value)
            exp= exp + elem.value
            document.querySelector('.result').value = exp
        }
        
    })
})