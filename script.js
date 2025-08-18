let elements = document.querySelectorAll(".set2 .element");
let elements2 = document.querySelectorAll(".set1 .element");
let elem;
let elem2;
let display = document.querySelector('.display')
elements.forEach(function (element) {
  element.addEventListener("click", function () {
    start();
    if (element.className == "red element") {
      element.classList.add("set2choosenred");
      elem = element;
      compare();
      setTimeout(function(){
        element.classList.remove("set2choosenred");
      },1500)
    } else if (element.className == "yellow element") {
      element.classList.add("set2choosenyellow");
      elem = element;
      compare();
      setTimeout(function(){
        element.classList.remove("set2choosenyellow");
      },1500)
    } else if (element.className == "green element") {
      element.classList.add("set2choosengreen");
      elem = element;
      compare();
      setTimeout(function(){
        element.classList.remove("set2choosengreen");
      },1500)
    }
  });
});

function start() {
  let rand = Math.floor(Math.random() * 2.99);
  let ele = elements2[rand];
  elem2 = ele;
  if (ele.className == "red element") {
    ele.classList.add("set1choosenred");setTimeout(function(){
        ele.classList.remove("set1choosenred");
      },1500)
  } else if (ele.className == "yellow element") {
    ele.classList.add("set1choosenyellow");
    setTimeout(function(){
        ele.classList.remove("set1choosenyellow");
      },1500)
  } else if (ele.className == "green element") {
    ele.classList.add("set1choosengreen");setTimeout(function(){
        ele.classList.remove("set1choosengreen");
      },1500)
  }
}
function compare() {
  if (elem.className.slice(0, 3) == elem2.className.slice(0, 3)) {
    setTimeout(()=>{
    display.innerText = 'DRAW'
    display.style.color='rgba(255, 255, 0, 1)'
  },1000)
    console.log('draw')
  } else if (elem.className.slice(0, 3) =='red' && elem2.className.slice(0, 3)=='yel') {
    setTimeout(()=>{
      display.innerText = 'YOU WIN'

      display.style.color='rgba(0, 255, 0, 1)'
    },1000)
    console.log('you win');
  } else if (elem.className.slice(0, 3) =='red' && elem2.className.slice(0, 3)=='gre') {
    setTimeout(()=>{
      display.innerText = 'YOU LOSE'

      display.style.color='rgba(255, 0, 0, 1)'
    },1000)
    console.log("you lose");
  } else if (elem.className.slice(0, 3) =='yel' && elem2.className.slice(0, 3)=='red') {
    setTimeout(()=>{
      display.innerText = 'YOU LOSE'

      display.style.color='rgba(255, 0, 0, 1)'
    },1000)
    console.log("you lose");
  } else if (elem.className.slice(0, 3) =='yel' && elem2.className.slice(0, 3)=='gre') {
    setTimeout(()=>{
      display.innerText = 'YOU WIN'

      display.style.color='rgba(0, 255, 0, 1)'
    },1000)
    console.log("you win");
  } else if (elem.className.slice(0, 3) =='gre' && elem2.className.slice(0, 3)=='yel') {
    setTimeout(()=>{
      display.innerText = 'YOU LOSE'

      display.style.color='rgba(255, 0, 0, 1)'
    },1000)
    console.log("you lose");
  } else if (elem.className.slice(0, 3) =='gre' && elem2.className.slice(0, 3)=='red') {
    setTimeout(()=>{
      display.innerText = 'YOU WIN'

      display.style.color='rgba(0, 255, 0, 1)'
    },1000)
    console.log("you win");
  }
}
