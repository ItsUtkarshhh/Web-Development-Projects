// Main Output Screen!
let display = document.getElementById('text-screen');

// Reset Button!
let resetAll = document.getElementById('reset-all-btn');

// Font Size Properties!
let fntsizednBtn = document.getElementById('fntsize-down');
let fntsizeInput = document.getElementById('fntsize-input')
let fntsizeupBtn = document.getElementById('fntsize-up');
let fntsizeSlider = document.getElementById('fntsize-slider');

// Default Setup
let minFontSize = 1;
let maxFontSize = 100;
function updateFontSize(val) {
    // Clamp value within allowed range
    val = Math.max(minFontSize, Math.min(maxFontSize, val));
    
    // Update all three controls
    display.style.fontSize = val + "px";
    fntsizeInput.value = val;
    fntsizeSlider.value = val;
}

fntsizeupBtn.addEventListener("click", () => {
    let current = Math.round(parseFloat(window.getComputedStyle(display).fontSize));
    updateFontSize(current + 1);
});

fntsizednBtn.addEventListener("click", () => {
    let current = Math.round(parseFloat(window.getComputedStyle(display).fontSize));
    updateFontSize(current - 1);
});

fntsizeInput.addEventListener("input", () => {
    let val = parseInt(fntsizeInput.value);
    if (!isNaN(val)) {
        updateFontSize(val);
    }
});

fntsizeSlider.addEventListener("input", () => {
    updateFontSize(parseInt(fntsizeSlider.value));
});

// Font Weight Properties!
let fntwgtdnBtn = document.getElementById('fntwgt-down');
let fntwgtInput = document.getElementById('fntwgt-input');
let fntwgtupBtn = document.getElementById('fntwgt-up');
let fntwgtSlider = document.getElementById('fntwgt-slider');

let minFontWgt = 400;
let maxFontWgt = 800;

function updateFontWgt(val) {
    val = Math.max(minFontWgt, Math.min(maxFontWgt, val));
    display.style.fontWeight = val;
    fntwgtInput.value = val;
    fntwgtSlider.value = val;
}

function getFontWeight() {
    let w = window.getComputedStyle(display).fontWeight;
    if (w === "normal") return 400;
    if (w === "bold") return 700;
    return parseInt(w);
}

fntwgtupBtn.addEventListener("click", () => {
    updateFontWgt(getFontWeight() + 50);
});

fntwgtdnBtn.addEventListener("click", () => {
    updateFontWgt(getFontWeight() - 50);
});

fntwgtInput.addEventListener("input", () => {
    let val = parseInt(fntwgtInput.value);
    if (!isNaN(val)) {
        updateFontWgt(val);
    }
});

fntwgtSlider.addEventListener("input", () => {
    updateFontWgt(parseInt(fntwgtSlider.value));
});



// Font Color Properties!
let fntclrPicker = document.getElementById('fnt-clr-picker');
let fntrgbInput = document.getElementById('fnt-rgb-input');
let fnthexInput = document.getElementById('fnt-hex-input');

// Background Color Properties!
let bgclrPicker = document.getElementById('bg-clr-picker');
let bgrgbInput = document.getElementById('bg-rgb-input');
let bghexInput = document.getElementById('bg-hex-input');

// Toggle Button - Night/Light Mode!
let toggleBtn = document.getElementById('toggle-btn');

// Accessing Tags!
let fieldSet = document.getElementsByTagName('fieldset');