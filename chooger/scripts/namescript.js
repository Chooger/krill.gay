const nameElement = document.getElementById('name');

const texts = [
    "Cͨ", "Cͨhͪ", "Cͨhͪoͦ", "Cͨhͪoͦoͦ", "Cͨhͪoͦoͦg", "Cͨhͪoͦoͦgeͤ", "Cͨhͪoͦoͦgeͤrͬ", "Cͨhͪoͦoͦgeͤ", "Cͨhͪoͦoͦg", "Cͨhͪoͦoͦ", "Cͨhͪoͦ", 
"Cͨhͪ", "Cͨ" ];

let currentIndex = 0;
const interval = 350;

function updateText() {
    nameElement.textContent = texts[currentIndex];
    currentIndex = (currentIndex + 1) % texts.length;
}

setInterval(updateText, interval);
