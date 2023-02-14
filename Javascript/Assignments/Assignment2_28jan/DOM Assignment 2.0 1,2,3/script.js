//.style.background = "red"

//first assignment - task1
const listitem = document.createElement('li');
listitem.innerHTML = '<a href="#">Hire Me</a>';
document.querySelector('header ul').appendChild(listitem)

//first assignment - task2
let x = document.querySelector("header .search-field input").placeholder="Search My Project"

//first assignment - task3
let heroDescription = document.querySelector(".hero-left-section p");
heroDescription.children[2].innerHTML ="an Employee"
heroDescription.children[4].innerHTML ="iNeuron Intelligence"

//first assignment - task4
document.querySelector(".hero-right-section img").src = "./hc.jpeg"

//first assignment - task5
const btn = document.createElement('button');
btn.innerText = "Support Me"
document.querySelector('.hero-right-section .hero-right-section-btns').appendChild(btn);




