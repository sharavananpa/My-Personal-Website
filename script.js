const accentColors = [
    '#FF5733', // Coral
    '#33FF57', // Spring Green
    '#4169E1', // Royal Blue
    '#FF00FF', // Magenta
    '#FFFF00', // Yellow
    '#FFA07A', // Light Salmon
    '#2E8B57', // Sea Green
    '#DA70D6', // Orchid
    '#8A2BE2', // Blue Violet
    '#FF1493', // Deep Pink
    '#00CED1', // Dark Turquoise
    '#FF6347', // Tomato
    '#4682B4', // Steel Blue
    '#D2691E', // Chocolate
    '#FF8C00', // Dark Orange
    '#ADFF2F', // Green Yellow
    '#40E0D0', // Turquoise
    '#DC143C', // Crimson
    '#FFD700', // Gold
    '#6A5ACD', // Slate Blue
];

function initializeAccentColor() {
    const existingColor = sessionStorage.getItem('accentColor');
    if (existingColor !== null) {
        document.documentElement.style.setProperty('--accent-color', existingColor);
    } else {
        const randomIndex = Math.floor(Math.random() * accentColors.length);
        const selectedColor = accentColors[randomIndex];
        document.documentElement.style.setProperty('--accent-color', selectedColor);
        sessionStorage.setItem('accentColor', selectedColor);
        sessionStorage.setItem('accentColorIndex', randomIndex);
    }
}

function setRandomAccentColor() {
    var randomIndex = 0;
    const existingIndex = sessionStorage.getItem('accentColorIndex');
    if (existingIndex !== null) {
        randomIndex = (parseInt(existingIndex) + 1) % accentColors.length;
    }
    const selectedColor = accentColors[randomIndex];
    document.documentElement.style.setProperty('--accent-color', selectedColor);
    sessionStorage.setItem('accentColor', selectedColor);
    sessionStorage.setItem('accentColorIndex', randomIndex);
}

initializeAccentColor();