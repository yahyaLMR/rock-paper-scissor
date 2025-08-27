
// Select all player (set2) and computer (set1) elements
let elements = document.querySelectorAll(".set2 .element");
let elements2 = document.querySelectorAll(".set1 .element");

// Variables to store the current player and computer choices
let elem;
let elem2;

// Reference to the display area for showing results
let display = document.querySelector('.display');

// Add click event listeners to each player element
elements.forEach(function (element) {
  element.addEventListener("click", function () {
    // When a player clicks, start the round
    start();
    // Highlight the chosen element and store the choice
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


// Randomly select the computer's choice and highlight it
function start() {
  let rand = Math.floor(Math.random() * 2.99); // Random index for computer's choice
  let ele = elements2[rand];
  elem2 = ele;
  // Highlight the computer's chosen element
  if (ele.className == "red element") {
    ele.classList.add("set1choosenred");
    setTimeout(function(){
      ele.classList.remove("set1choosenred");
    },1500)
  } else if (ele.className == "yellow element") {
    ele.classList.add("set1choosenyellow");
    setTimeout(function(){
      ele.classList.remove("set1choosenyellow");
    },1500)
  } else if (ele.className == "green element") {
    ele.classList.add("set1choosengreen");
    setTimeout(function(){
      ele.classList.remove("set1choosengreen");
    },1500)
  }
}


// Score variables and references to scoreboard elements
let playerScore = 0;
let computerScore = 0;
const playerScoreElem = document.getElementById('player-score');
const computerScoreElem = document.getElementById('computer-score');



// Compare the player's and computer's choices and update the result and scores
function compare() {
  // If both choices are the same, it's a draw
  if (elem.className.slice(0, 3) == elem2.className.slice(0, 3)) {
    setTimeout(()=>{
      display.innerText = 'DRAW';
      display.style.color='rgba(255, 255, 0, 1)';
    },1000);
    // No score change for draw
  }
  // Player: rock, Computer: paper
  else if (elem.className.slice(0, 3) =='red' && elem2.className.slice(0, 3)=='yel') {
    setTimeout(()=>{
      display.innerText = 'YOU WIN';
      display.style.color='rgba(0, 255, 0, 1)';
      playerScore++;
      playerScoreElem.textContent = playerScore;
    },1000);
  }
  // Player: rock, Computer: scissor
  else if (elem.className.slice(0, 3) =='red' && elem2.className.slice(0, 3)=='gre') {
    setTimeout(()=>{
      display.innerText = 'YOU LOSE';
      display.style.color='rgba(255, 0, 0, 1)';
      computerScore++;
      computerScoreElem.textContent = computerScore;
    },1000);
  }
  // Player: paper, Computer: rock
  else if (elem.className.slice(0, 3) =='yel' && elem2.className.slice(0, 3)=='red') {
    setTimeout(()=>{
      display.innerText = 'YOU LOSE';
      display.style.color='rgba(255, 0, 0, 1)';
      computerScore++;
      computerScoreElem.textContent = computerScore;
    },1000);
  }
  // Player: paper, Computer: scissor
  else if (elem.className.slice(0, 3) =='yel' && elem2.className.slice(0, 3)=='gre') {
    setTimeout(()=>{
      display.innerText = 'YOU WIN';
      display.style.color='rgba(0, 255, 0, 1)';
      playerScore++;
      playerScoreElem.textContent = playerScore;
    },1000);
  }
  // Player: scissor, Computer: paper
  else if (elem.className.slice(0, 3) =='gre' && elem2.className.slice(0, 3)=='yel') {
    setTimeout(()=>{
      display.innerText = 'YOU LOSE';
      display.style.color='rgba(255, 0, 0, 1)';
      computerScore++;
      computerScoreElem.textContent = computerScore;
    },1000);
  }
  // Player: scissor, Computer: rock
  else if (elem.className.slice(0, 3) =='gre' && elem2.className.slice(0, 3)=='red') {
    setTimeout(()=>{
      display.innerText = 'YOU WIN';
      display.style.color='rgba(0, 255, 0, 1)';
      playerScore++;
      playerScoreElem.textContent = playerScore;
    },1000);
  }
}
