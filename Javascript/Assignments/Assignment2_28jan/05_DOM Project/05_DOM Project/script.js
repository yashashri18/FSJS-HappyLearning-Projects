//Pro Subscription Button
let elm = document.createElement('div')
elm.innerHTML = '<a href="index.html" class="btn">Pro Subscription</a>'
document.querySelector('.nav-center').appendChild(elm)



//adding of card
let elm2 = document.createElement('div')
elm2.classList.add('card')
elm2.innerHTML = '<a href="#" class="recipe-text"><img src="./img/recipe-5.jpeg" class="recipe-img " /><h5 class="recipe-name">Hakka Noodles</h5><p class="recipe-disp">Prep : 15min | Cook : 30min</p></a>';
document.querySelector('.recipe-gallery').appendChild(elm2)



//adding Menu to Recipes
let elm3 = document.createElement('a')
elm3.innerHTML = "Chinese(7)"
elm3.href = "#"
console.log(elm3)
document.querySelector('.recipes-container .tags-container > div').appendChild(elm3)
