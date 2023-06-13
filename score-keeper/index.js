"use strict"

// Score Keeper Vous devrez créer une page web contenant un petit formulaire de score. La page devra contenir au moins :
// * Un score en cours affiché * Un score maximal à atteindre * Trois boutons : `Player 1`, `Player 2` et `Reset` * Optionnel : une mise en forme améliorée / SASS

const container = document.createElement("div");
container.setAttribute("class", "container");
document.body.appendChild(container);

const textScore = document.createElement("p");
textScore.setAttribute("class", "container__text-score" );
container.appendChild(textScore);

const form = document.createElement("form");
form.setAttribute("class", "container__form");
container.appendChild(form);

const labelInputText = document.createElement("label");
labelInputText.setAttribute("class", "form__label-text");
labelInputText.setAttribute("for", "text");
labelInputText.textContent = "Ajouter le score :";
form.appendChild(labelInputText);

const inputText = document.createElement("input");
inputText.setAttribute("class", "form__input-text");
inputText.setAttribute("id", "text");
form.appendChild(inputText);

const buttonPlayer1 = document.createElement("button");
buttonPlayer1.textContent = "Player 1";
form.appendChild(buttonPlayer1);

const buttonPlayer2 = document.createElement("button");
buttonPlayer2.textContent = "Player 2";
form.appendChild(buttonPlayer2);

const buttonReset = document.createElement("button");
buttonReset.textContent = "Reset";
form.appendChild(buttonReset);

const buttons = document.getElementsByTagName("button");

for (let element of buttons) {
    element.setAttribute("class", "form__button");
    element.setAttribute("type", "button");
}






