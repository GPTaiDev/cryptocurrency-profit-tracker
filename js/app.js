import { initUI } from './utils.js';
import { loadInvestments, saveInvestment } from './state.js';
import { switchTheme } from './utils.js';
document.addEventListener('DOMContentLoaded', () => {
    initUI();
    loadInvestments();
    document.getElementById('theme-switcher').addEventListener('click', switchTheme);
    // Bind more event listeners
});
// Implement CRUD, theme switching, and other functionalities