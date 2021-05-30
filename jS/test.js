window.addEventListener('load', init);

let game = document.getElementById("game");

function init() {
    createText();
}

function createText(){
    let gameCard = document.createElement('div');
    gameCard.classList.add('gameCard');
    game.appendChild(gameCard);

    let title = document.createElement('h1');
    title.innerText = "Titelscherm";
    gameCard.appendChild(title);
}