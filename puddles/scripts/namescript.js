const nameElement = document.getElementById('name');

const texts = [
    "P", "Pu", "Pud", "Pudd", "Puddl", "Puddle", "Puddles", "Puddle", "Puddl", "Pudd", "Pudd", "Pud", "Pu", "P"
];

let currentIndex = 0;
const interval = 350;

function updateText() {
    nameElement.textContent = texts[currentIndex];
    currentIndex = (currentIndex + 1) % texts.length;
}

setInterval(updateText, interval);
