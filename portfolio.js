
    document.addEventListener("DOMContentLoaded", function() {
        const webDevElement = document.querySelector('.web-dev');
        const colors = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#9B59B6']; // Array of colors
        let colorIndex = 0;

        function changeColor() {
            webDevElement.style.color = colors[colorIndex];
            colorIndex = (colorIndex + 1) % colors.length; // Loop through the colors
        }

        setInterval(changeColor, 1000); // Change color every 1 second
    });
    
    document.addEventListener("DOMContentLoaded", function() {
        const webDevElement = document.querySelector('.web-dev');
        const text = "Web Developer"; // Text to display
        let index = 0;
        let forward = true;

        function typeWriter() {
            if (forward) {
                webDevElement.innerText = text.substring(0, index);
                index++;
                if (index > text.length) {
                    forward = false; // Start deleting letters
                }
            } else {
                webDevElement.innerText = text.substring(0, index);
                index--;
                if (index === 0) {
                    forward = true; // Start typing again
                }
            }
        }

        setInterval(typeWriter, 200); // Adjust typing speed (200ms per letter)
    });