document.addEventListener('DOMContentLoaded', () => {
    const message = document.getElementById('message');
    const blurWrapper = document.getElementById('blur-wrapper');
    const audioPlayer = document.getElementById('audioPlayer');
    const backgroundVideo = document.getElementById('background-video');
    const linksWrapper = document.getElementById('links-wrapper');

    if (message && blurWrapper && audioPlayer && backgroundVideo && linksWrapper) {
        message.addEventListener('click', () => {
            backgroundVideo.style.filter = 'none';
            blurWrapper.style.filter = 'none';
            linksWrapper.style.filter = 'none'; 

            message.style.display = 'none';

            audioPlayer.volume = 0.2;
            audioPlayer.play().catch(error => {
                console.error('Error playing audio:', error);
            });
        });
    } else {
        console.error('One or more elements are missing');
    }
});
