// Variable declaration!
let nextColorbtn = document.getElementById('next-color-btn');
let prevColorbtn = document.getElementById('prev-color-btn');
let copyColorbtn = document.getElementById('copy-color-btn');
let screenDisplay = document.getElementById('screen');
let resetbtn = document.getElementById('reset-btn');

let colorCode = ["RGB(255, 255, 255)"];
let colorIndex = 0;

function getRandomColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `RGB(${r}, ${g}, ${b})`;
}

// Next Button Interaction!
function nextColor() {
    if(colorIndex < colorCode.length - 1) {
        colorIndex++;
        document.body.style.backgroundColor = colorCode[colorIndex];
        screenDisplay.textContent = colorCode[colorIndex];
        copyColorbtn.textContent = "Copy Color";
    }
    else {
        const newColor = getRandomColor();
        colorCode.push(newColor);
        colorIndex++;
        document.body.style.backgroundColor = newColor;
        screenDisplay.textContent = newColor;
        copyColorbtn.textContent = "Copy Color";
    }
}

nextColorbtn.addEventListener('click', nextColor);

// Previous Button Interaction!
function prevColor() {
    if (colorIndex > 0) {
        colorIndex--;
        const prevColor = colorCode[colorIndex];
        document.body.style.backgroundColor = prevColor;
        screenDisplay.textContent = prevColor;
        copyColorbtn.textContent = "Copy Color";
    }
}

prevColorbtn.addEventListener('click', prevColor);

function resetAll() {
    document.body.style.backgroundColor = 'white';
    screenDisplay.textContent = 'RGB(255, 255, 255)';
    colorCode.splice(1, colorCode.length);
    colorIndex = 0;

    let popup = document.getElementById('popup-message');
    popup.classList.add('show');
    setTimeout(() => {
        popup.classList.remove('show');
    }, 1500);
}

resetbtn.addEventListener('click', resetAll);


// Copy color Button Interaction!
function copyColor() {
    const colorToCopy = colorCode[colorIndex];
    navigator.clipboard.writeText(colorToCopy)
    .then(() => {
        copyColorbtn.textContent = "Copied!";
        setTimeout(() => {
            copyColorbtn.textContent = "Copy Color";
        }, 1000);
    })
    .catch(err => {
        copyColorbtn.textContent = "Not Copied!";
    });
}

copyColorbtn.addEventListener('click', copyColor);
