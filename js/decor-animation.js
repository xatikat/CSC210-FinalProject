export function rotateDecorations(decorations) {
    for (let decor of decorations) {
        // cat group has a translate applied already, so it needs to be added to the rotate
        if (decor.className == 'cat-group') {
            decor.style.transform = 'translate(-50%) rotate(-10deg)';
            setTimeout(() => {
                decor.style.transform = 'translate(-50%) rotate(20deg)';
            }, 1000);
        } else {
            // otherwise just rotate normally
            decor.style.transform = 'rotate(-20deg)';
            setTimeout(() => {
                decor.style.transform = 'rotate(35deg)';
            }, 1000);
        }
    }
}