const state = {
    view:{
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score"),
    },
    values:{
        gameVelocity: 1000,
        hitPosition: 0,
        result: 0,
        currentTime: 30,
    },
    actions:{
        timerId: setInterval(randomSquare, 1000),
        countDownTimerId: setInterval(countDown, 1000),
    }
};

function playSound(audioNome){
    let audio = new Audio(`./src/audio/${audioNome}.mp3`);
    audio.volume = 0.2;
    audio.play();
};

function countDown(){
    state.values.currentTime--;
    state.view.timeLeft.textContent = state.values.currentTime;
    if (state.values.currentTime <= 0){
        clearInterval(state.actions.countDownTimerId)
        clearInterval(state.actions.timerId)
        alert("Fim do Jogo! - Seu Resultado foi: "+ state.values.result);
        playSound("gameOver");
    };
};

// Gera um randomico para aparecer o inimigo
function randomSquare(){
    state.view.squares.forEach((square) => {
        square.classList.remove("enemy");
    });
    let randomNumber = Math.floor(Math.random()*9);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy");
    state.values.hitPosition = randomSquare.id;
};

function moveEnemy(){
    state.values.timerId = setInterval(randomSquare, state.values.gameVelocity);
};

// Verifica onde está o inimigo nos quadrantes
function addListenerHitBox(){
    state.view.squares.forEach((square) => {
        square.addEventListener("mousedown", () => {
            if(square.id === state.values.hitPosition){
                state.values.result++
                state.view.score.textContent = state.values.result;
                state.values.hitPosition = null;
                playSound("somRifle");
            };
        });
    });
};

function initialize(){
    moveEnemy();
    addListenerHitBox(); 
    playSound("fundoGame");
};

initialize();


