

let drumPad = document.querySelectorAll('.drum-pad');

drumPad.forEach(item => {
    item.addEventListener('click', () => {
        let sound = document.getElementById(item.innerText);
        sound.play()
    })

})