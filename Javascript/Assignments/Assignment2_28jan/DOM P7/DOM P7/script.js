//task 1 - remove languages having 2.0 in names

let elm = document.querySelectorAll(".main .main__languages a")
let arr = []
elm.forEach((element)=>{
    if(element.innerText.includes('2.0')){
        element.style.display = "none"
        arr.push(element.innerText)
    }
})
localStorage.setItem("arrayIncludes", JSON.stringify(arr));



//task 2 -
let ip = document.querySelector('.main .main__form form  .main__form-input ')
ip.disabled = false;
ip.value = "Namaste";
let btn = document.querySelector('.main .main__form form  .main__form-btn ')
btn.disabled = false;
btn.addEventListener('click',()=>{

    let items = JSON.parse((localStorage.getItem("arrayIncludes")))
    items.map((element)=>{
        const aTag = document.createElement("a")
        aTag.href = 'https://www.ineuron.ai';    
        aTag.target = '_blank';
        aTag.innerText = element
        document.querySelector(".main .main__languages").appendChild(aTag)

    })
})


