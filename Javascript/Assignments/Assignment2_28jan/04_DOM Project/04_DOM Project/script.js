const colors = ["#A57512","#C43A7C","#F6901A","#99CC3A","#63A2DC"]
let elements = document.getElementsByClassName('clash-card__unit-stats');
let child_elm = document.querySelectorAll('.clash-card__unit-stats .one-third');
for (let i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = colors[i];
    for (let j = 0; j < child_elm.length; j++) {
        child_elm[j].style.color = "white";
    }
}



