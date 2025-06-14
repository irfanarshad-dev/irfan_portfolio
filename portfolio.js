document.addEventListener("DOMContentLoaded", function() {
    const webDevElement = document.querySelector('.web-dev');
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#9B59B6'];
    let colorIndex = 0;
    const text = "Software Engineer";
    let index = 0;
    let forward = true;

    function changeColor() {
        webDevElement.style.color = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    }

    function typeWriter() {
        if (forward) {
            webDevElement.innerText = text.substring(0, index);
            index++;
            if (index > text.length) {
                forward = false;
            }
        } else {
            webDevElement.innerText = text.substring(0, index);
            index--;
            if (index === 0) {
                forward = true;
            }
        }
    }

    setInterval(changeColor, 1000);
    setInterval(typeWriter, 200);

    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });
});