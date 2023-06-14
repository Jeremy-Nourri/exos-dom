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

///////// TOP ELEMENTS

const divTop = createElemWithClass("div", "container__div-top", container);

const divPlayer = createElemWithClass("div", "container__div-fighter", divTop);
const nameOfPlayer = createElemWithClass("p", "div-top__p", divPlayer );
const progessBarContainerOfPlayer = createElemWithClass("div", "div-top__progress-bar-container-player", divPlayer);
const progressbBarOfPlayer = createElemWithClass("div", "div-top__progress-bar-player", progessBarContainerOfPlayer);

const divMonster = createElemWithClass("div", "container__div-fighter", divTop);
const nameOfMonster = createElemWithClass("p", "div-fighter__p", divMonster);
const progessBarContainerOfMonster = createElemWithClass("div", "div-top__progress-bar-container-monster", divMonster);
const progressbBarOfMonster = createElemWithClass("div", "div-top__progress-bar-monster", progessBarContainerOfMonster);


/////////// ELEMENTS OF THE MIDDLE

const divMiddle = createElemWithClass("div", "container__div-middle", container);

const buttonStart = createButton("div-middle__button-start", "START NEW GAME", divMiddle);

const buttonAttack = createButton("div-middle__button-attack", "ATTACK", divMiddle);
const buttonSpecial = createButton("div-middle__button-special", "SPECIAL ATTACK", divMiddle);
const buttonHeal = createButton("div-middle__button-attack", "HEAL", divMiddle);
const buttonGive = createButton("div-middle__button-give","GIVE UP", divMiddle);


/////////// BOTTOM ELEMENTS

const divBottom = createElemWithClass("div", "container__div-middle", container);

