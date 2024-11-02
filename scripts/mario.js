const mario = document.getElementById('mario');
const marioSound = document.getElementById('marioSound');

mario.addEventListener('click', () => {
    marioSound.currentTime = 0;
    marioSound.play();
});