const box = document.getElementById('box');
const buttons = document.getElementsByTagName('button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', () => {
        const newColor = button.dataset.color;
        box.style.backgroundColor = newColor;
        box.textContent = newColor.toUpperCase();
    });
});