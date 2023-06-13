"use strict"
// Liste de courses Vous devrez créer une page web contenant une petite todo liste. La page devra contenir au moins :

// * Un input * 1 bouton ajouter * Optionnel : une possibilité de suppression et/ou d'édition, une mise en forme améliorée / SASS

const data = ["farine", "sucre"];

const container =  document.createElement("div");
container.setAttribute("class", "container");
document.body.appendChild(container);

const title = document.createElement("h1");
title.setAttribute('class', 'container__title');
title.textContent = "Liste de courses";
container.appendChild(title);

const form = document.createElement("form");
form.setAttribute('class', 'form');
container.appendChild(form);

const labelInputText = document.createElement("label");
labelInputText.setAttribute('class', 'container__input-label');
labelInputText.setAttribute('for', 'article');
labelInputText.textContent = "Nom de l'article";
form.appendChild(labelInputText);

const inputText = document.createElement("input");
inputText.setAttribute('class', 'container__input-text');
inputText.setAttribute('type', 'text');
inputText.setAttribute('placeholder', "Entrez le nom d'un article");
inputText.setAttribute('name', 'article');
inputText.setAttribute('id', 'article');
form.appendChild(inputText);


const button = document.createElement("button");
button.setAttribute('class', 'container__button');
button.setAttribute('type', 'submit');
button.textContent = "Ajouter";
form.appendChild(button);

const containerList = document.createElement('div');
containerList.setAttribute('class', 'container-list');
container.appendChild(containerList);

function addArticle(event) {
    event.preventDefault();

    if (inputText.value === "") {
        return;
    }
    if (data.includes(inputText.value)) {
        alert("Cet article est déjà dans la liste");
        return;
    }
    data.push(inputText.value);
    displayListOfArticles();
    
    inputText.value = "";
}

function crossWordOfCheckBox() {
    const checkbox = document.querySelectorAll('input[type="checkbox"]');
    for(let element of checkbox){
        element.addEventListener('change', function() {
            if (this.checked) {
                 this.parentNode.style.textDecoration = "line-through";
            }
            else {
                 this.parentNode.style.textDecoration = "none";
            }
        });
    }
}

function displayListOfArticles() {
    for (const element of data) {
        const articleAlReadyInTheList = document.getElementById(element);

        if (!articleAlReadyInTheList) {

            const rowOfArticle = document.createElement('div');
            rowOfArticle.setAttribute('class', 'container-list__row');
            containerList.appendChild(rowOfArticle);
            
            const checkBox = document.createElement("input");
            checkBox.setAttribute('class', 'container-list__row-article');
            checkBox.setAttribute('type', 'checkbox');
            checkBox.setAttribute('id', element);
            rowOfArticle.appendChild(checkBox);

            const checkBoxLabel = document.createElement("label");
            checkBoxLabel.setAttribute('class', 'container-list__row-label');
            checkBoxLabel.setAttribute('for', element);
            checkBoxLabel.textContent = element;
            rowOfArticle.appendChild(checkBoxLabel);
        }
    }
    crossWordOfCheckBox();
}


displayListOfArticles();

button.addEventListener("click", addArticle);
form.addEventListener("submit", addArticle);




