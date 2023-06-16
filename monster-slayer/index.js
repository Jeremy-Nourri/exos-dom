"use strict"
// Monster Slayer (Optionnel) Vous devrez créer une page web contenant un petit jeu de combat avec un monstre. La page devra contenir au moins :
// * Deux barre de vie dynamique (joueur et monstre) * 4 boutons : attaque, attaque spéciale, soin et abandon * Optionnel : Logs du combats 

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
const containerOfPlayerAvatar = createElemWithClass("img", "div-player__avatar", divPlayer);
containerOfPlayerAvatar.src = "./img/warrior-avatar.jpg";

const progessBarContainerOfPlayer = createElemWithClass("div", "div-player__progress-bar-container-player", divPlayer);
const progressBarOfPlayer = createElemWithClass("div", "div-player__progress-bar-player", progessBarContainerOfPlayer);
createElemWithClass("p", "progress-bar-player__p", progressBarOfPlayer).textContent = healthPlayer;

const divMonster = createElemWithClass("div", "div-top__div-monster", divTop);
const containerOfMonsterAvatar = createElemWithClass("img", "div-monster__avatar", divMonster);
containerOfMonsterAvatar.src = "./img/monster-avatar.jpg";

const progessBarContainerOfMonster = createElemWithClass("div", "div-monster__progress-bar-container-monster", divMonster);
const progressBarOfMonster = createElemWithClass("div", "div-monster__progress-bar-monster", progessBarContainerOfMonster);
createElemWithClass("p", "progress-bar-monster__p", progressBarOfMonster).textContent = healthMonster;

const pOfMonsterProgressBar = document.querySelector(".progress-bar-monster__p");
const pOfPlayerProgressBar = document.querySelector(".progress-bar-player__p");

const gifHealth = createElemWithClass("img", "div-player__gif-health", divPlayer);
gifHealth.src = "./img/giphy.gif";

/////////// ELEMENTS OF THE MIDDLE

const divMiddleStart = createElemWithClass("div", "container__div-middle-start", container);

const buttonStart = createButton("div-middle__button-start", "START NEW GAME", divMiddleStart);

const divMiddle = createElemWithClass("div", "container__div-middle", container);

const divGifAttack = createElemWithClass("div", "div-middle__div-gif-attack", divMiddle);
const imgGifAttack = createElemWithClass("img", "div-gif-attack__img-attack", divGifAttack);
imgGifAttack.src = "./img/attack-simple.gif";
const divGifSpecialAttack = createElemWithClass("div", "div-middle__div-gif-special-attack", divMiddle);
const imgGifSpecialAttack = createElemWithClass("img", "div-gif-attack__img-special-attack", divGifSpecialAttack);
imgGifSpecialAttack.src = "./img/attack.gif";

const buttonAttack = createButton("div-middle__button-attack", "ATTACK ⚔️", divMiddle);
const buttonSpecial = createButton("div-middle__button-special", "SPECIAL ATTACK ⚡", divMiddle);
const buttonHeal = createButton("div-middle__button-attack", "HEAL 💉+10", divMiddle);
const buttonGive = createButton("div-middle__button-give","GIVE UP 💀", divMiddle);

/////////// BOTTOM ELEMENTS

const divBottom = createElemWithClass("div", "container__div-bottom", container);
const pDivBottom = createElemWithClass("h3", "div-bottom__title", divBottom).textContent = "Attacks description";

const attackFromMonster = createElemWithClass("p", "div-bottom__monster-attack", divBottom);
const attackFromPlayer = createElemWithClass("p", "div-bottom__player-attack", divBottom);
const healthPlayerText = createElemWithClass("p", "div-bottom__player-heal", divBottom);

/////////// MODAL

const modal = document.createElement("div");
modal.setAttribute("class", "modal");
document.body.appendChild(modal);

const containerInModal = createElemWithClass("div", "modal__container", modal);
const pModal = createElemWithClass("p", "modal__p", containerInModal);
const cross = createElemWithClass("img", "modal__cross", containerInModal);
cross.src = "https://icons.veryicon.com/png/o/miscellaneous/skent-icon/cross-17.png";

const containerForDragon = createElemWithClass("div", "modal__container", modal);
const gifDragonDie = createElemWithClass("img", "modal__gif", containerForDragon);
gifDragonDie.src = "./img/dragon-die.gif";


/////////// functions attacks description

function displayMonsterAttackDescription(randomNb) {
    attackFromMonster.textContent = `The monster hits you to ${randomNb}`;
}

function displayPlayerAttackDescription(randomNb) {
    attackFromPlayer.textContent = `You hit the monster to ${randomNb}`;
}

function displayPlayerHealDescription() {
    healthPlayerText.textContent = "You add 10 points of health";
}

function removeAllAttacksDescription() {
    const allAttacksDescription = divBottom.querySelectorAll("p");
    for (const element of allAttacksDescription) {
        element.textContent = "";
    }
}

function removeHealDescription() {
    healthPlayerText.textContent = "";
}

/////////// functions attacks

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function substractHealthForAttack(min, max) {
    if (healthPlayer <= 0 && healthMonster <= 0) {
        return
    }
    else {
        const randomNumber = getRndInteger(min, max);
        healthMonster -= randomNumber;
        displayHealthLevel(healthMonster, pOfMonsterProgressBar, progressBarOfMonster);
        displayPlayerAttackDescription(randomNumber);

        const randomNumberMonsterAttack = getRndInteger(5, 10);
        healthPlayer -= randomNumberMonsterAttack;
        displayHealthLevel(healthPlayer, pOfPlayerProgressBar, progressBarOfPlayer);
        displayMonsterAttackDescription(randomNumberMonsterAttack);
    }
}

function addHealthForPlayer() {
    if (healthPlayer < 90) {
        healthPlayer += 10;
        let randomNumberMonsterAttack = getRndInteger(5, 10);
        healthPlayer -= randomNumberMonsterAttack;
        displayHealthLevel(healthPlayer, pOfPlayerProgressBar, progressBarOfPlayer);
        displayMonsterAttackDescription(randomNumberMonsterAttack);
        displayPlayerHealDescription(10);
        displayGif(gifHealth);
    }
}

/////////// function to display health
function displayHealthLevel(level, elementText, progressElement) {
    elementText.textContent = level;
    progressElement.style.width = `${level}%`;
}

/////////// functions for modal

function displayModal() {
    modal.style.display = "flex";
}

function hiddenModal () {
    modal.style.display = "none";
}

function displayButtons() {
    divMiddleStart.style.display = "none";
    divMiddle.style.display = "flex";
}

/////////// function to display gif

function displayGif(elem) {
    elem.style.display = "flex";
    setTimeout(() => elem.style.display = "none", 3000);
}


/////////// functions for others features

function resetGame() {
    divMiddleStart.style.display = "flex";
    divMiddle.style.display = "none";
    healthPlayer = 100;
    healthMonster = 100;
    displayHealthLevel(healthPlayer, pOfPlayerProgressBar, progressBarOfPlayer);
    displayHealthLevel(healthMonster, pOfMonsterProgressBar, progressBarOfMonster);
    removeAllAttacksDescription();
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
        setTimeout(() => {
            displayModal();
            pModal.textContent = "YOU WIN !";
            gifDragonDie.style.display = "flex";
        }, 3000);
    }
}

function giveUp() {
    healthPlayer = 0
    pOfPlayerProgressBar.textContent = healthPlayer;
    progressBarOfPlayer.style.width = `${healthPlayer}%`;
}

/////////// events listener 

buttonAttack.addEventListener("click", () => {
    substractHealthForAttack(3, 10);
    displayGif(divGifAttack);
    blockHealthValue();
    removeHealDescription();
});

buttonSpecial.addEventListener("click", () => {
    substractHealthForAttack(10, 20);
    displayGif(divGifSpecialAttack);
    blockHealthValue();
    removeHealDescription();
});

buttonHeal.addEventListener("click", () => {
    addHealthForPlayer();
    displayPlayerHealDescription();
    attackFromPlayer.textContent = "";    
});

buttonGive.addEventListener("click", () => {
    giveUp();
    displayModal();
    pModal.textContent = "GAME OVER !";
});

cross.addEventListener("click", () => {
    modal.style.display = "none";
    resetGame();
});

buttonStart.addEventListener("click", () => {
    gifDragonDie.style.display = "none";
    cross.style.display = "none";
    displayModal();
    pModal.textContent = "FIGHT !";
    setTimeout(() => {
        hiddenModal();
        cross.style.display = "block";
    },
    2000);
    displayButtons();
});

