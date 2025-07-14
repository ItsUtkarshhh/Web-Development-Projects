function getRandomColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `${r}, ${g}, ${b}`;
}

let val = getRandomColor();
console.log(val.length);