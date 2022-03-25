const sounds = [ 'alert', 'collect', 'impact', 'payment', 'swipe', 'laugh' ];

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;

    btn.addEventListener('click', () => {
        stopSounds();

        document.getElementById(sound).play();
    })

    document.getElementById('buttons')
        .appendChild(btn);
})

function stopSounds() {
    sounds.forEach(sound => {
        const audio = document.getElementById(sound);

        audio.pause;
        audio.current = 0;
    })
}