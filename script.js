const accentColors = [
    '#ff5733', // coral
    '#33ff57', // spring green
    '#4169e1', // royal blue
    '#ff00ff', // magenta
    '#ffff00', // yellow
    '#ffa07a', // light salmon
    '#2e8b57', // sea green
    '#da70d6', // orchid
    '#8a2be2', // blue violet
    '#ff1493', // deep pink
    '#00ced1', // dark turquoise
    '#ff6347', // tomato
    '#4682b4', // steel blue
    '#d2691e', // chocolate
    '#ff8c00', // dark orange
    '#adff2f', // green yellow
    '#40e0d0', // turquoise
    '#dc143c', // crimson
    '#ffd700', // gold
    '#6a5acd', // slate blue
];

function initializeAccentColor() {
    const existingColor = sessionStorage.getItem('accentColor');
    if (existingColor !== null) {
        document.documentElement.style.setProperty('--accent-color', existingColor);
    } else {
        const randomIndex = Math.floor(Math.random() * accentColors.length);
        const selectedColor = accentColors[randomIndex];
        document.documentElement.style.setProperty('--accent-color', selectedColor);
        window.sessionStorage.setItem('accentColor', selectedColor);
        window.sessionStorage.setItem('accentColorIndex', randomIndex);
    }
}

initializeAccentColor();