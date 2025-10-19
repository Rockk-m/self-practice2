const box = document.getElementById('box');
const addButton = document.getElementById('add');
const removeButton = document.getElementById('remove');
const toggleButton = document.getElementById('toggle');

addButton.addEventListener('click', () => {
    box.classList.add('bordered');
});

removeButton.addEventListener('click', () => {
    box.classList.remove('bordered');
});

toggleButton.addEventListener('click', () => {
    box.classList.toggle('bordered');
});