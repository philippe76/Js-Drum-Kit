

let drumPad = document.querySelectorAll('.drum-pad');
let displaySound = document.querySelector('#display');

drumPad.forEach(item => {
    item.addEventListener('click', () => {
        let sound = document.getElementById(item.innerText);
        sound.play();
        let soundName = item.childNodes[1].innerText;
        displaySound.innerHTML = `<p>${soundName}</p>`;
        item.classList.add('played');
        setTimeout(() => {
            item.classList.remove('played');
        },200)
    })
})

window.addEventListener('keydown', e => {
    let sound = document.getElementById(e.key.toUpperCase());
    sound.play();
    let soundName = sound.innerText;
    displaySound.innerHTML = `<p>${soundName}</p>`;
    let keyNode = sound.parentNode;
    keyNode.classList.add('played');
    setTimeout(() => {
        keyNode.classList.remove('played');
    },200)
})