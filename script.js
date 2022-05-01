'use strict';

// Selecting elements

const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');

let playing;

// Starting conditions
const init = function () {
    playing = true;

    diceEl.classList.add('hidden');
};
init();


// Rolling dice functionality
btnRoll.addEventListener('click', function () {
    if (playing) {
        // 1. Generating a random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;

        // 2. Display dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

    }
});

