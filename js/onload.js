import { rotateDecorations } from './decor-animation.js'

let loadingDiv = document.getElementById('loading');

setTimeout(() => {loadingDiv.children[0].style.opacity = 1;}, 1000)

window.onload = function() {
    //let main = document.getElementsByTagName('main');
    //main[0].style.opacity = 1;
    let decorationsDiv = document.getElementById('decorations');
    //decorationsDiv.style.opacity = 1;
    
    loadingDiv.style.opacity = 0;
    setTimeout(() => {loadingDiv.style.display = 'none';}, 800)
    
    // start interval for rotating decorations!!
    setInterval(() => {rotateDecorations(decorationsDiv.getElementsByTagName('img'))}, 2000);
};