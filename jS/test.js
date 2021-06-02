/*window.addEventListener('load', init);*/
let words = [
    {
        word: "vis",
        image: "../images/vis.png",
        test: ["v", "", "s"],
        letters: ["a", "i", "u"]
    }
]

/*let game = document.getElementById("game");
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
function button() {
    const btn = document.createElement("button");
    btn.innerHTML = "volgende";
    btn.type = "submit";
    btn.addEventListener("click", function () {
    location.href = "collage.html"
    })
    document.body.appendChild(btn)
}




function removeBtn(number){
    const elem = document.getElementById('btn'+ number);
    elem.parentNode.removeChild(elem);
}




document.getElementById("btn0").addEventListener("click", function () {
    document.getElementById("B1").innerHTML = "i";
    removeBtn(0)
    removeBtn(1)
    removeBtn(2)
    removeBtn(3)
    button()
})



document.getElementById('btn1').addEventListener("click", function () {
        alert("Niet de goede, probeer nogmaals")
        removeBtn(1)

    }
)

document.getElementById('btn2').addEventListener("click", function () {
        alert("Niet de goede, probeer nogmaals")
        removeBtn(2)

    }
)
document.getElementById('btn3').addEventListener("click", function () {
        alert("niet de gooie, probeer nog een keer")
        removeBtn(3)

    }
)

