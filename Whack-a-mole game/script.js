// let's first select holes, moles and scoreBoard
const holes = document.querySelectorAll(".hole");
const moles = document.querySelectorAll(".mole");
const scoreBoard = document.querySelector(".score");

let score = 0; // initial score
let lastHole;
let timeUp = false; // initially time is there

// creating a function to make a random time for mole to pop from the hle
function randomTime(min, max){
    return Math.round(Math.random() * (max - min) + min);
}

// now let's select a random hole
function randomHole(holes){
    const index = Math.floor(Math.random() * holes.length);
    const hole = holes[index];


    // prevent getting same hole
    if(hole === lastHole) return randomHole(holes);

    lastHole = hole;
    return hole;
}

// function which will make the mole to peep
function peep(){
    const time = randomTime(1000, 1500); // get a random time to determine how long mole should peep
    const hole = randomHole(holes); // get the random hole
    hole.classList.add('up'); // add the css so the selected mole can "pop up"
    setTimeout( () => {
        hole.classList.remove("up"); // make the selected mole "pop down" after a random time
        if(!timeUp){
            peep();
        }
    }, time);
}

// start Game
function startGame(){ 
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    peep();
    setTimeout (() => {
        return timeUp = true
    }, 15000) // show random moles for 15 seconds 
}

function wack(e){
    if(!e.isTrusted) return;  // When an event is triggered by a user action, such as clicking a button or typing on a keyboard, the isTrusted property will be true
    score++;
    this.parentNode.classList.remove('up'); // this refers to item clicked
    scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener('click', wack));