function button() {
    const btn = document.createElement("button");
    btn.innerHTML = "volgende";
    btn.type = "submit";
    btn.addEventListener("click", function () {
        location.href = "ik.html"
    })
    document.body.appendChild(btn)
}




function removeBtn(number){
    const elem = document.getElementById('btn'+ number);
    elem.parentNode.removeChild(elem);
}




document.getElementById("btn4").addEventListener("click", function () {
    document.getElementById("B1").innerHTML = "oo";
    removeBtn(4)
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
