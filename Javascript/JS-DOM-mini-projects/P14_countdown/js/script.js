
let ip 
const btnsumbit = () => {
    console.log('btn clicked')
    ip = document.getElementById('user_input').value;
    console.log('user entered date is ', ip)
}


const calc = ()=>{
    
    //future date for countdown
    const d = new Date(ip)
    //current date
    const td = new Date();
    
    //difference in seconds
    const diff = (d-td)/1000

    // queryselector to input type text
    const box  = document.querySelectorAll('.col input')
    if(ip){
    box[0].value = Math.floor((diff/(3600))/24)
    box[1].value = Math.floor(diff / 3600) % 24;
    box[2].value = Math.floor(diff / 60) % 60;
    box[3].value = Math.floor(diff % 60);
    }
}
//calling fn after every one second
setInterval(func = ()=>{
    calc()
}, 1000);
