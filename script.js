

let drumPad = document.querySelectorAll('.drum-pad');

drumPad.forEach(item => {
    item.addEventListener('click', () => {
        let sound = document.getElementById(item.innerText);
        sound.play();
    })
})

window.addEventListener('keydown', e => {
    console.log(e.key);
    let sound = document.getElementById(e.key.toUpperCase());
    sound.play();
})