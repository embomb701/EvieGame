"use strict";

const audio = new Audio('sound/yeet.m4a');
const audio2 = new Audio('sound/Fart.mp3');
const audio3 = new Audio('sound/Yeet.mp3');
const audio4 = new Audio('sound/oof.mp3');
var num = Math.floor(Math.random() * 1);


// This is my solution but I can't explain how this works with no delay? LOL
// There's a better way to do this though, using css, see "toggleCowPosition"
const moveCow = async () => {
    const delayTimer = milliseconds => new Promise(response => setTimeout(response, milliseconds));

    for (let x = 0; x < 1180; x+= 5) {
        document.getElementById('cow').style.left = x + 'px';
        console.log(x);
        await delayTimer(0);
    }

    console.log('Done');
};

// Adding a class name and using CSS to animate is
// good for simple animations like what you're doing.
// More complex animation would probably benefit from
// using javascript though.
/*const toggleCowPosition = () => {
    const cow = document.getElementById('cow');
    cow.classList.toggle("rightPosition");
}*/

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

    // Cow animation using CSS.
    setTimeout(function toggleCowPosition() {
        const cow = document.getElementById('cow');
        cow.classList.toggle("rightPosition");
    }, 500);

    // Cow animation using JS.
    // moveCow();
    // for (let x = 0; x < 1180; x += .09) {
    //     setTimeout(function () { document.getElementById('cow').style.left = x + 'px' }, 100);

    //     console.log(x);
    // };
}

const playFart = () => {
    audio2.play();
    document.getElementById('btn2').innerHTML = "You Got Stinky Farted!";
    document.getElementById('fart').classList.remove('hidden');
    setTimeout(function delay() { document.getElementById('fart').classList.add('hidden'); }, 3000 )

};

const playOof = () => {
    audio4.play();
    document.getElementById('btn3').innerHTML = "You Got OOFed!";
    setTimeout(function toggleCowPosition() {
        document.getElementById('oof').classList.add('rotate');
    }, 500);

    setTimeout(function toggleCowPosition() {
        document.getElementById('oof').classList.remove('rotate');
    }, 3000);   
};

const reset = () => {
    window.location.reload();
};
