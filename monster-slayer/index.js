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

/////////// Init value
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

const pOfMonsterProgressBar = document.querySelector(".progress-bar-monster__p");
const pOfPlayerProgressBar = document.querySelector(".progress-bar-player__p");

/////////// ELEMENTS OF THE MIDDLE

const divMiddleStart = createElemWithClass("div", "container__div-middle-start", container);

const buttonStart = createButton("div-middle__button-start", "START NEW GAME", divMiddleStart);

const divMiddle = createElemWithClass("div", "container__div-middle", container);

const buttonAttack = createButton("div-middle__button-attack", "ATTACK", divMiddle);
const buttonSpecial = createButton("div-middle__button-special", "SPECIAL ATTACK", divMiddle);
const buttonHeal = createButton("div-middle__button-attack", "HEAL", divMiddle);
const buttonGive = createButton("div-middle__button-give","GIVE UP", divMiddle);

/////////// BOTTOM ELEMENTS

const divBottom = createElemWithClass("div", "container__div-bottom", container);
const pDivBottom = createElemWithClass("p", "div-bottom__p", divBottom).textContent = "Attacks description";

/////////// MODAL

const modal = document.createElement("div");
modal.setAttribute("class", "modal");
document.body.appendChild(modal);

const containerInModal = createElemWithClass("div", "modal__container", modal);
const pModal = createElemWithClass("p", "modal__p", containerInModal);
const cross = createElemWithClass("img", "modal__cross", containerInModal);
cross.setAttribute("src", "https://icons.veryicon.com/png/o/miscellaneous/skent-icon/cross-17.png")

/////////// functions

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function displayHealthLevel(level, elementText, progressElement) {
    elementText.textContent = level;
    progressElement.style.width = `${level}%`;
}

function substractHealthForAttack() {
    if (healthPlayer <= 0 && healthMonster <= 0) {
        return
    }
    else {
        const randomNumber = getRndInteger(3, 10);
        healthMonster -= randomNumber;
        displayHealthLevel(healthMonster, pOfMonsterProgressBar, progressBarOfMonster)
        const randomNumberMonsterAttack = getRndInteger(5, 10);
        healthPlayer -= randomNumberMonsterAttack;
        displayHealthLevel(healthPlayer, pOfPlayerProgressBar, progressBarOfPlayer)
    }
}

function substractHealthForSpecialAttack() {
    if (healthPlayer <= 0 && healthMonster <= 0) {
        return
    }
    else {
        const randomNumber = getRndInteger(10, 20);
        healthMonster -= randomNumber;
        displayHealthLevel(healthMonster, pOfMonsterProgressBar, progressBarOfMonster)
        const randomNumberMonsterAttack = getRndInteger(5, 10);
        healthPlayer -= randomNumberMonsterAttack;
        displayHealthLevel(healthPlayer, pOfPlayerProgressBar, progressBarOfPlayer)
    }
}

function addHealthForPlayer() {
    if (healthPlayer < 90) {
        healthPlayer += 10;
        let randomNumberMonsterAttack = getRndInteger(5, 10);
        healthPlayer -= randomNumberMonsterAttack;
        displayHealthLevel(healthPlayer, pOfPlayerProgressBar, progressBarOfPlayer)
    }
}

function displayModal() {
    modal.style.display = "flex";
}

function displayButtons() {
    divMiddleStart.style.display = "none";
    divMiddle.style.display = "flex";
}

function resetGame() {
    divMiddleStart.style.display = "flex";
    divMiddle.style.display = "none";
    healthPlayer = 100;
    healthMonster = 100;
    displayHealthLevel(healthPlayer, pOfPlayerProgressBar, progressBarOfPlayer)
    displayHealthLevel(healthMonster, pOfMonsterProgressBar, progressBarOfMonster)
}

function blockHealthValue() {
    if (healthPlayer <= 0) {
        progressBarOfPlayer.style.width = 0;
        pOfPlayerProgressBar.textContent = 0;
        displayModal();
        pModal.textContent = "GAME OVER !";
    }
    if (healthMonster <= 0) {
        progressBarOfMonster.style.width = 0;
        pOfMonsterProgressBar.textContent = 0;
        displayModal();
        pModal.textContent = "YOU WIN !";
    }
}

function giveUp() {
    healthPlayer = 0
    pOfPlayerProgressBar.textContent = healthPlayer;
    progressBarOfPlayer.style.width = `${healthPlayer}%`;
}

/////////// events listener 

buttonAttack.addEventListener("click", () => {
    substractHealthForAttack();
    blockHealthValue();
});

buttonSpecial.addEventListener("click", () => {
    substractHealthForSpecialAttack();
    blockHealthValue();
});

buttonHeal.addEventListener("click", addHealthForPlayer);

buttonGive.addEventListener("click", () => {
    giveUp();
    displayModal();
    pModal.textContent = "GAME OVER !";
});

cross.addEventListener("click", () => {
    modal.style.display = "none";
    resetGame();
})

buttonStart.addEventListener("click", displayButtons);
