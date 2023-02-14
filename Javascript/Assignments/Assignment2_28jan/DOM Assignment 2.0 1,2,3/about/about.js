let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});

//Assignment 1 - task 2
let elm = document.createElement('div')
elm.innerHTML = "<h3>Skills</h3><p>I posses a very good command over the Full Stack Development technologies like MERN which can be seen in my word over the Github</p>";
elm.classList.add("accordian");
console.log(elm)
document.querySelector('.accordian-wrapper').appendChild(elm)
document.querySelector('.accordian-wrapper').lastChild.click()

//Assignment 1 - task 1
const x = (document.querySelectorAll('.accordian-wrapper h3'))
x.forEach(elm => {
  elm.style.backgroundColor = "#dadaf8";
  console.log(elm.innerHTML)
  if(elm.innerHTML.includes('Hobbies') || elm.innerHTML.includes('Achievement') || elm.innerHTML.includes('Skills')){
      elm.click()
  }
})






