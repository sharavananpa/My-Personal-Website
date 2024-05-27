const existingColor = sessionStorage.getItem('accentColor');
if (existingColor) {
    document.documentElement.style.setProperty('--accent-color', existingColor);
}