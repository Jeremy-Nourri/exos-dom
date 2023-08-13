"use strict"


/////////////// function to add element in DOM with class name attributes 
const createElemWithClass = (tag, className, parent) => {
    const elem = document.createElement(tag);
    elem.setAttribute("class", className);
    parent.appendChild(elem);
    return elem;
};

/////////////// function to add button in DOM with type and class name attribute 
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

let counterHeal = 3;
let counterSpecialAttack = 3;

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
const tittle = createElemWithClass("h1", "div-middle-start__title", divMiddleStart);
const spanTitle = createElemWithClass("span", "div-middle-start__span-title", tittle).textContent = "Game Dragon Slayer";

const rulesArray = [
    "You play as the warrior who must fight the dragon (from the game Elden Ring).",
    "ATTACK ⚔️: the dragon loses 2 to 10 life points, you lose 5 to 9 life points.",
    "SPECIAL ATTACK ⚡: the dragon loses 10 to 20 life points, you lose 5 to 9 life points. You can use it 3 times.",
    "HEAL 💉: you can add 10 life points, be careful during this time the dragon attacks you. You can use it 3 times."    
]

const divRules = createElemWithClass("div", "div-rules", divMiddleStart);

for (const rule of rulesArray) {
    const pRules = createElemWithClass("p", "div-rules__p", divRules);
    pRules.textContent = rule;
};

const buttonStart = createButton("div-middle__button-start", "START NEW GAME", divMiddleStart);

const divMiddle = createElemWithClass("div", "container__div-middle", container);


const divGifAttack = createElemWithClass("div", "div-middle__div-gif-attack", divMiddle);
const imgGifAttack = createElemWithClass("img", "div-gif-attack__img-attack", divGifAttack);

const divGifSpecialAttack = createElemWithClass("div", "div-middle__div-gif-special-attack", divMiddle);
const imgGifSpecialAttack = createElemWithClass("img", "div-gif-attack__img-special-attack", divGifSpecialAttack);


const buttonAttack = createButton("div-middle__button-attack", "ATTACK ⚔️", divMiddle);
const buttonSpecial = createButton("div-middle__button-special", `x${counterSpecialAttack} | SPECIAL ATTACK ⚡`, divMiddle);
const buttonHeal = createButton("div-middle__button-attack", `x${counterHeal} | HEAL 💉+10`, divMiddle);
buttonHeal.setAttribute("disabled", "disabled");
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

        const randomNumberMonsterAttack = getRndInteger(5, 9);
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
    } else if (healthPlayer >= 90){
        healthPlayer = 100;
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

/////////// arrays of gifs attacks
const arrayGifSpecialAttack = ["./img/attack.gif", "./img/attack-2.gif"];

const arrayGifAttack = ["./img/attack-simple.gif", "./img/attack-simple-2.gif"];


/////////// function to display gif

function displayGifRandom(divGif, imgGif, arrayGif) {
    let indexGif = getRndInteger(0, arrayGif.length);
    imgGif.src = arrayGif[indexGif];
    divGif.style.display = "flex";
    setTimeout(() => {
        divGif.style.display = "none";
    }, 3000);
}

/////////// function to display gif for heal
function displayGif(gif) {
    gif.style.display = "flex";
    setTimeout(() => {
        gif.style.display = "none";
    }, 3000);
}

/////////// functions for others features

function resetGame() {
    divMiddleStart.style.display = "flex";
    divMiddle.style.display = "none";
    healthPlayer = 100;
    healthMonster = 100;
    counterHeal = 3;
    counterSpecialAttack = 3;
    buttonHeal.textContent = `x${counterHeal} | HEAL 💉+10`;
    buttonSpecial.textContent = `x${counterSpecialAttack} | SPECIAL ATTACK ⚡`;
    buttonSpecial.removeAttribute("disabled");
    buttonHeal.removeAttribute("disabled");
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
        }, 2900);
    }
}

function giveUp() {
    healthPlayer = 0
    pOfPlayerProgressBar.textContent = healthPlayer;
    progressBarOfPlayer.style.width = `${healthPlayer}%`;
}

function handleDisableHealButton() {
    if (healthPlayer < 100 && counterHeal > 0) {
        buttonHeal.removeAttribute("disabled");
    } else if (counterHeal === 0) {
        buttonHeal.setAttribute("disabled", "disabled");
    }
}

/////////// events listener 

buttonAttack.addEventListener("click", () => {
    substractHealthForAttack(2, 10);
    displayGifRandom(divGifAttack, imgGifAttack, arrayGifAttack);
    blockHealthValue();
    removeHealDescription();
    handleDisableHealButton();
});

buttonSpecial.addEventListener("click", () => {
    substractHealthForAttack(10, 20);
    displayGifRandom(divGifSpecialAttack, imgGifSpecialAttack, arrayGifSpecialAttack);
    blockHealthValue();
    removeHealDescription();
    handleDisableHealButton();
    counterSpecialAttack--;
    buttonSpecial.textContent = `x${counterSpecialAttack} | SPECIAL ATTACK ⚡`;
    if (counterSpecialAttack === 0) {
        buttonSpecial.setAttribute("disabled", "disabled");
    }
});

buttonHeal.addEventListener("click", () => {
    addHealthForPlayer();
    counterHeal--;
    buttonHeal.textContent = `x${counterHeal} | HEAL 💉+10`;
    attackFromPlayer.textContent = "";
    handleDisableHealButton();
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

