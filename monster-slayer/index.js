"use strict"
// Monster Slayer (Optionnel) Vous devrez créer une page web contenant un petit jeu de combat avec un monstre. La page devra contenir au moins :
// * Deux barre de vie dynamique (joueur et monstre) * 4 boutons : attaque, attaque spéciale, soin et abandon * Optionnel : Logs du combats (couleurs différenciées joueur et monstre)


/////////////// function to add element in DOM with attribute class name
const createElemWithClass = (tag, className, parent) => {
    const elem = document.createElement(tag);
    elem.setAttribute("class", className);
    parent.appendChild(elem);
    return elem;
};

/////////////// function to add button in DOM with attribute type and class name
const createButton = (className, text, parent) => {
    const btn = document.createElement("button");
    btn.setAttribute("type", "button");
    btn.setAttribute("class", className);
    btn.textContent = text;
    parent.appendChild(btn);
    return btn;
};

///////// create div container

const container = document.createElement("div");
container.setAttribute("class", "container");
document.body.appendChild(container);

/////////// Init
let healthPlayer = 100;
let healthMonster = 100;


///////// TOP ELEMENTS

const divTop = createElemWithClass("div", "container__div-top", container);

const divPlayer = createElemWithClass("div", "div-top__div-player", divTop);
const nameOfPlayer = createElemWithClass("p", "div-player__p", divPlayer).textContent = "Player";
const progessBarContainerOfPlayer = createElemWithClass("div", "div-player__progress-bar-container-player", divPlayer);
const progressBarOfPlayer = createElemWithClass("div", "div-player__progress-bar-player", progessBarContainerOfPlayer);
createElemWithClass("p", "progress-bar-player__p", progressBarOfPlayer).textContent = healthPlayer;

const divMonster = createElemWithClass("div", "div-top__div-monster", divTop);
const nameOfMonster = createElemWithClass("p", "div-monster__p", divMonster).textContent = "Monster";
const progessBarContainerOfMonster = createElemWithClass("div", "div-monster__progress-bar-container-monster", divMonster);
const progressBarOfMonster = createElemWithClass("div", "div-monster__progress-bar-monster", progessBarContainerOfMonster);
createElemWithClass("p", "progress-bar-monster__p", progressBarOfMonster).textContent = healthMonster;

/////////// ELEMENTS OF THE MIDDLE

const divMiddle = createElemWithClass("div", "container__div-middle", container);

const buttonStart = createButton("div-middle__button-start", "START NEW GAME", divMiddle);

const buttonAttack = createButton("div-middle__button-attack", "ATTACK", divMiddle);
const buttonSpecial = createButton("div-middle__button-special", "SPECIAL ATTACK", divMiddle);
const buttonHeal = createButton("div-middle__button-attack", "HEAL", divMiddle);
const buttonGive = createButton("div-middle__button-give","GIVE UP", divMiddle);

/////////// BOTTOM ELEMENTS

const divBottom = createElemWithClass("div", "container__div-bottom", container);
const pDivBottom = createElemWithClass("p", "div-bottom__p", divBottom).textContent = "Attacks description";


///////////

const pOfMonsterProgressBar = document.querySelector(".progress-bar-monster__p");
const pOfPlayerProgressBar = document.querySelector(".progress-bar-player__p")


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function substractHealthForAttack() {
    if (healthPlayer > 0 && healthMonster > 0) {
        let randomNumber = getRndInteger(3, 10);
        healthMonster -= randomNumber;
        pOfMonsterProgressBar.textContent = healthMonster;
        let randomNumberMonsterAttack = getRndInteger(5, 10);
        healthPlayer -= randomNumberMonsterAttack;
        pOfPlayerProgressBar.textContent = healthPlayer;
    }
}

function substractHealthForSpecialAttack() {
    if (healthPlayer > 0 && healthMonster > 0) {
        let randomNumber = getRndInteger(10, 20);
        healthMonster -= randomNumber;
        pOfMonsterProgressBar.textContent = healthMonster;
        let randomNumberMonsterAttack = getRndInteger(5, 10);
        healthPlayer -= randomNumberMonsterAttack;
        pOfPlayerProgressBar.textContent = healthPlayer;
    }
}

function addHealthForPlayer() {
    if (healthPlayer < 90) {
        healthPlayer += 10;
        let randomNumberMonsterAttack = getRndInteger(5, 10);
        healthPlayer -= randomNumberMonsterAttack;
        pOfPlayerProgressBar.textContent = healthPlayer;
    }
}

function blockHealthValue() {
    if (healthPlayer <= 0) {
        buttonAttack.disabled = true;
        buttonSpecial.disabled = true;
        return pOfPlayerProgressBar.textContent = 0;
    }
    if (healthMonster <= 0) {
        buttonAttack.disabled = true;
        buttonSpecial.disabled = true;
        return pOfMonsterProgressBar.textContent = 0;
    }
}


///////// events listener 

buttonAttack.addEventListener("click", () => {
    substractHealthForAttack();
    blockHealthValue();
});

buttonSpecial.addEventListener("click", () => {
    substractHealthForSpecialAttack();
    blockHealthValue();
});

buttonHeal.addEventListener("click", addHealthForPlayer);
