document.addEventListener('DOMContentLoaded', () => {

    const bgColorInput = document.getElementById('bgColor');
    const fontColorInput = document.getElementById('fontColor');
    const fontSizeSelect = document.getElementById('fontSize');
    const saveButton = document.getElementById('saveBtn');
    const resetButton = document.getElementById('resetBtn');
    
    const SETTINGS_KEY = 'userWebSettings';

    const fontSizes = {
        small: '0.8rem',
        medium: '1rem',
        large: '1.5rem'
    };

    const applySettings = (settings) => {
        const bgColor = settings?.bgColor || '#FFFFFF'; 
        const fontColor = settings?.fontColor || '#000000'; 
        const fontSizeKey = settings?.fontSize || 'medium'; 

        document.body.style.backgroundColor = bgColor;
        document.body.style.color = fontColor;
        document.body.style.fontSize = fontSizes[fontSizeKey]; 

        bgColorInput.value = bgColor;
        fontColorInput.value = fontColor;
        fontSizeSelect.value = fontSizeKey;
    };

    saveButton.addEventListener('click', () => {
        const currentSettings = {
            bgColor: bgColorInput.value,
            fontColor: fontColorInput.value,
            fontSize: fontSizeSelect.value,
        };
        localStorage.setItem(SETTINGS_KEY, JSON.stringify(currentSettings));
        applySettings(currentSettings);
        alert('The settings have been saved!');
    });

    resetButton.addEventListener('click', () => {
        if (confirm('Do you want to clear all the saved settings?')) {
            localStorage.removeItem(SETTINGS_KEY);
            location.reload(); 
        }
    });

    const savedSettings = JSON.parse(localStorage.getItem(SETTINGS_KEY) || 'null'); 
    applySettings(savedSettings); 
});