"use strict";

const audio = new Audio('sound/yeet.m4a');
const audio2 = new Audio('sound/Fart.mp3');
const audio3 = new Audio('sound/Yeet.mp3');
const audio4 = new Audio('sound/oof.mp3');
var num = Math.floor(Math.random() * 1);

const playYeet = () => {
    console.log(num);
    switch (num) {
        case 0: audio.play();
            num = 1;
            break;
        case 1: audio3.play();
            num = 0;
            break;
    }

    document.getElementById('btn1').innerHTML = "You Got Yeeted!";
    for (let x = 0; x < 1180; x += .7) {   
        setTimeout(function () { document.getElementById('cow').style.left = x + 'px' }, 900);
        console.log(x);
    };
}

const playFart = () => {
    audio2.play();
    document.getElementById('btn2').innerHTML = "You Got Stinky Farted!";
};

const playOof = () => {
    audio4.play();
    document.getElementById('btn3').innerHTML = "You Got OOFed!";
};

const reset = () => {
    window.location.reload();
};
