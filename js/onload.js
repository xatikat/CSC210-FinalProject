import { rotateDecorations } from './decor-animation.js'

window.onload = function() {
    let main = document.getElementsByTagName('main');
    let decorationsDiv = document.getElementById('decorations');
    decorationsDiv.style.opacity = 1;
    main[0].style.opacity = 1;

    // start interval for rotating decorations!!
    setInterval(() => {rotateDecorations(decorationsDiv.getElementsByTagName('img'))}, 2000);
};