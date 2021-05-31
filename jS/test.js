
/*window.addEventListener('load', init);

let game = document.getElementById("game");
let box = document.getElementById("B1")

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

 */



document.getElementById("btn").addEventListener("click", function () {
    document.getElementById("B1").innerHTML = "i";
    removeBtn()
})
function removeBtn(){
    const elem = document.getElementById('btn');
    elem.parentNode.removeChild(elem);
    return false;
}