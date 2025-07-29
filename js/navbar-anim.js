let navHoverArea = document.getElementById('nav-hover-area'); 

navHoverArea.addEventListener('mouseenter', () => {
    navbar.style.top = '16px'
    navbar.style.opacity = 1;
    navbar.style.transform = "scale(1)";
})

navHoverArea.addEventListener('mouseleave', () => {
    navbar.style.top = "-128px";
    navbar.style.opacity = 0.7;
    navbar.style.transform = "scale(0.9)";
})

