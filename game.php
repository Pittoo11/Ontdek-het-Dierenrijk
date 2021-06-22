<?php

?>

<!DOCTYPE html>
<html lang="nl" xmlns="">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Homepage</title>
    <link rel="stylesheet" href="css/stylesheet.css"/>
</head>


<header>

</header>


<body>
    <img onmouseover= speaks(`ik`) src="images/ik.png" width="750" height="750" >

    <section class="word">
        <box id = "B1"></box> <box>k</box>
    </section>

    <section>
        <button onmouseover = play("A.mp3") type="button" id="btn1">a</button> <button onmouseover = play("I.mp3") type="button" id="btn0">i</button> <button onmouseover = play("O.mp3") type="button" id="btn2">o</button> <button onmouseover = play("E.mp3") type="button" id="btn3">e</button>

    <script type="text/javascript" src="jS/ik.js"></script>
</body>


<footer>

</footer>

<script>


    function play(mp3) {
        let audio = new Audio("phonetics/"+ mp3);
        audio.play();
    }

    function speaks (message) {
        let msg = new SpeechSynthesisUtterance();
        let voices = window.speechSynthesis.getVoices();
        msg.volume = 1; // From 0 to 1
        msg.rate = 1; // From 0.1 to 10
        msg.pitch = 0; // From 0 to 2
        msg.text = message;
        msg.lang = 'nl';
        speechSynthesis.speak(msg);
    }



</script>