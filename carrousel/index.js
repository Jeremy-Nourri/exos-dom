"use strict"

// Carousel **_Vous devrez créer une page web contenant un petit carousel basique. La page devra contenir au moins :
// * Des divs avec un background color ou des balises img avec de vraies images * 1 bouton suivant * Optionnel : un bouton précédent, une mise en forme améliorée / SASS

const data = ["https://img.freepik.com/photos-gratuite/coucher-soleil-tour-eiffel-depuis-paris_188544-23753.jpg?w=1380&t=st=1686569983~exp=1686570583~hmac=530950642ff2aef2bdf242261dbb02318cbabfd236c92e177c2829e64112d328",
"https://img.freepik.com/photos-gratuite/big-ben-westminster-bridge-au-coucher-du-soleil-londres-royaume-uni_268835-1395.jpg?w=1380&t=st=1686570204~exp=1686570804~hmac=677b81711fdb8d05eea7d173f470a4bcaf2630394f3b9c519ceca218fd655ed3",
"https://img.freepik.com/photos-gratuite/beau-paysage-urbain-batiments-historiques-florence-italie_181624-49926.jpg?w=1380&t=st=1686570442~exp=1686571042~hmac=46d1c542139e59a7c5a00de296ad433b3491ea323d14ac549d8c8358428aa3b1",
"https://img.freepik.com/photos-gratuite/statue-liberte-beau-ciel-nuageux_181624-1112.jpg?w=1380&t=st=1686570500~exp=1686571100~hmac=dee96f4d73783c5aadb63f4b384c68f6b5b2cbc313fc05c2eef22a69262f46fe"];

const container =  document.createElement("div");
container.setAttribute("class", "container");
document.body.appendChild(container);

const picture = document.createElement("img");
picture.setAttribute('class', 'photo');
picture.src = data[0];
container.appendChild(picture);

const buttonAfter= document.createElement("div");
buttonAfter.setAttribute("class", "button-right");
container.appendChild(buttonAfter);

const buttonBefore = document.createElement("div");
buttonBefore.setAttribute("class", "button-left");
container.appendChild(buttonBefore);


let currentPicture = 0;

function slidePictures(direction) {
    currentPicture = currentPicture + direction;
    if (currentPicture < 0) {
        currentPicture = data.length - 1
    }
    if (currentPicture > data.length - 1) {
        currentPicture = 0;
    }
    picture.src = data[currentPicture]
}

buttonAfter.addEventListener("click", () => slidePictures(1));
buttonBefore.addEventListener("click", () => slidePictures(-1));