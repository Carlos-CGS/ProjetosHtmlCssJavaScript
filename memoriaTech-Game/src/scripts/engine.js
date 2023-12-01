const emojis = [
    "🏍",
    "🏍",
    "🚂",
    "🚂",
    "🛳",
    "🛳",
    "🚓",
    "🚓",
    "🛸",
    "🛸",
    "🚀",
    "🚀",
    "🚁",
    "🚁",
    "✈",
    "✈"
];

let OpenCards = [];

//Abaixo faz os emojis aparecerem de forma rondômica
let shufleEmojis = emojis.sort(()=>(Math.random()>0.25)? 2: -1);

for(let i=0; i < emojis.length; i++){
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shufleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box)
}

function playSound(audioNome){
    let audio = new Audio(`./src/audios/${audioNome}.mp3`);
    audio.volume = 0.2;
    audio.play();
};

function handleClick(){
    if(OpenCards.length < 2){
        this.classList.add("boxOpen");
        OpenCards.push(this);
    }
    if(OpenCards.length == 2){
        setTimeout(checkMath, 500);
    }
}

function checkMath(){
    if(OpenCards[0].innerHTML === OpenCards[1].innerHTML){
        OpenCards[0].classList.add("boxMath");
        OpenCards[1].classList.add("boxMath");
        playSound("acerto");
    } else {
        OpenCards[0].classList.remove("boxOpen");
        OpenCards[1].classList.remove("boxOpen");
        playSound("erro");
    }
    OpenCards = []

    if(document.querySelectorAll(".boxMath").length === emojis.length){
        const divVitoria = document.getElementById('mensagemVitoria');
        divVitoria.classList.remove('oculto');
        document.getElementById('container').classList.add('oculto');
        playSound("vitoria");
    }
}

