function button() {
    const btn = document.createElement("button");
    btn.innerHTML = "KLAAR";
    btn.type = "submit";
    btn.addEventListener("click", function () {
        location.href = "collage4.html"
    })
    document.body.appendChild(btn)
}




function removeBtn(number){
    const elem = document.getElementById('btn'+ number);
    elem.parentNode.removeChild(elem);
}




document.getElementById("btn4").addEventListener("click", function () {
    document.getElementById("B1").innerHTML = "i";
    removeBtn(4)
    removeBtn(1)
    removeBtn(2)
    removeBtn(3)
    button()
})



document.getElementById('btn1').addEventListener("click", function () {

        removeBtn(1)

    }
)

document.getElementById('btn2').addEventListener("click", function () {

        removeBtn(2)

    }
)
document.getElementById('btn3').addEventListener("click", function () {

        removeBtn(3)

    }
)

