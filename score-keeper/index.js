"use strict"

// Score Keeper Vous devrez créer une page web contenant un petit formulaire de score. La page devra contenir au moins :
// * Un score en cours affiché * Un score maximal à atteindre * Trois boutons : `Player 1`, `Player 2` et `Reset` * Optionnel : une mise en forme améliorée / SASS

/////////////// function to add element in DOM with class name
const createElemWithClass = (tag, className, parent) => {
    const elem = document.createElement(tag);
    elem.setAttribute("class", className);
    parent.appendChild(elem);
    return elem;
};

/////////////// add elements in DOM :

const container = document.createElement("div");
container.setAttribute("class", "container");
document.body.appendChild(container);

const textScore = createElemWithClass("p", "container__text-score", container);
textScore.textContent = " to ";

const spanLeft = createElemWithClass("span", "text-score__span-left", textScore);
spanLeft.textContent = 0;

const spanRight = createElemWithClass("span", "text-score__span-right", textScore);;
spanRight.textContent = 0;

const form = createElemWithClass("form", "container__form", container);

const labelInputNumber = createElemWithClass("label", "form__label-input", form);
labelInputNumber.setAttribute("for", "quantity");
labelInputNumber.textContent = "Playing to : ";

const spanInLabel = createElemWithClass("span", "label-text__span", labelInputNumber);
spanInLabel.textContent = "0";

const inputNumber = createElemWithClass("input", "form__input-number", form);
inputNumber.setAttribute("type", "number");
inputNumber.setAttribute("id", "quantity");
inputNumber.setAttribute("name", "quantity");

const buttonPlayer1 = createElemWithClass("button", "form__button", form);
buttonPlayer1.setAttribute("type", "button");
buttonPlayer1.disabled = "true";
buttonPlayer1.textContent = "Player 1";

const buttonPlayer2 = createElemWithClass("button", "form__button", form);
buttonPlayer2.setAttribute("type", "button");
buttonPlayer2.disabled = "true"
buttonPlayer2.textContent = "Player 2";

const buttonReset = createElemWithClass("button", "form__button-reset", form);
buttonReset.setAttribute("type", "button");
buttonReset.disabled = "true";
buttonReset.textContent = "Reset";

const buttons = document.getElementsByTagName("button");

/////////// functions :

function addValue(element, value) {
    element.textContent = Number(element.textContent) + value;
}

function reset() {
    spanLeft.textContent = 0;
    spanRight.textContent = 0;
    spanInLabel.textContent = 0;
    inputNumber.value = 0;
    buttonPlayer1.disabled = true;
    buttonPlayer2.disabled = true;
    spanLeft.style.color = "black";
    spanRight.style.color = "black";
    const message = document.querySelector(".container__message");
    if (message) {
        message.remove();
    }
}


////////////// events handler :

buttonPlayer1.addEventListener("click", () => {
    addValue(spanLeft, 1);
    if (Number(spanLeft.textContent) === Number(inputNumber.value)) {
        spanLeft.style.color = "green";
        spanRight.style.color = "red";
        buttonPlayer1.disabled = true;
        buttonPlayer2.disabled = true;
        const message = document.createElement("p");
        message.setAttribute("class", "container__message");
        container.appendChild(message);
        message.textContent = "Player 1 ! You win !";
    }
});

buttonPlayer2.addEventListener("click",() => {
    addValue(spanRight, 1);
    if (Number(spanRight.textContent) === Number(inputNumber.value)) {
        spanRight.style.color = "green";
        spanLeft.style.color = "red";
        buttonPlayer1.disabled = true;
        buttonPlayer2.disabled = true;
        const message = document.createElement("p");
        message.setAttribute("class", "container__message");
        container.appendChild(message);
        message.textContent = "Player 2 ! You win !";
    }
});

buttonReset.addEventListener("click", reset);

inputNumber.addEventListener("change", () => {
    spanInLabel.textContent = inputNumber.value;
    if (Number(inputNumber.value) > 0) {
        for (let element of buttons) {
            element.disabled = false;
        }
    }
    if (Number(inputNumber.value) === 0) {
        for (let element of buttons) {
            element.disabled = true;
        }
    }
    
});


