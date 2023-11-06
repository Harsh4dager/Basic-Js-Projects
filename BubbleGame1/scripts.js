// make bubbles
function makeBubbles(){
    let cluster = "";

    for(let i = 0; i<140; i++){
        cluster += `<div class="bubble">${Math.floor(Math.random()*10)}</div>`
    }

    document.querySelector("#pBottom").innerHTML = cluster;
    console.log(cluster);
}
makeBubbles();

// timer
function timer(){
    TimerObj = document.querySelector(".Timer .Points");
    var mytimer = setInterval(()=>{
        if(TimerObj.textContent > 0) 
            TimerObj.textContent = +TimerObj.textContent - 1;
        else {
            clearInterval(mytimer);
            document.querySelector("#pBottom").innerHTML = `<h1>Game Over<h1>`;
        };
    },1000);
}
timer();

// get new Hit
function NewHit(){
    HitPoint = document.querySelector(".Hit .Points");
    HitPoint.textContent = Math.floor(Math.random()*10);
}
NewHit();

// increase score;
let Score = 0;
function increaseScore(){
    Score+= 10;
    const ScoreValue = document.querySelector(".Score .Points");
    ScoreValue.textContent = Score;
}


// using eventBubbling
document.querySelector("#pBottom").addEventListener("click",(details)=> {
    let clickedNum = details.target.textContent;
    let HitValue = document.querySelector(".Hit .Points").textContent;
    if( clickedNum == HitValue){
        increaseScore();
        makeBubbles();
        NewHit();
    };
})
