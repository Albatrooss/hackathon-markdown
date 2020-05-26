const myOutput = document.getElementById('output');
const myInput = document.getElementById('input');
const menu = document.getElementById('menu');
const menuBtn = document.getElementById('menu-btn');

const bgColor = document.getElementById('input-background-color');
const fontColor = document.getElementById('input-font-color');
const h1Size = document.getElementById('input-h1-size');
const h2Size = document.getElementById('input-h2-size');
const pSize = document.getElementById('input-p-size');

const markConvert = new showdown.Converter();

input.addEventListener('input', convert);
menuBtn.addEventListener('click', toggleMenu);
menu.addEventListener('keydown', updateStyle);
// bgColor.addEventListener('keydown', updateStyle);

function convert() {
  let text = input.value;
  let converted = markConvert.makeHtml(text);
  myOutput.innerHTML = converted;
}

function toggleMenu() {
  menu.classList.toggle('visible');
}

function updateStyle(e) {
  let input = e.target.value;
  if (e.key !== 'Enter') return;
  if (e.target.id === 'input-background-color') {
    if (input.length === 3 || input.length === 6 || input.length === 0) {
      myOutput.style.backgroundColor = input.length === 0 ? '#ffffff' : `#${input}`;
    }
  } else if (e.target.id === 'input-font-color') {
    if (input.length === 3 || input.length === 6 || input.length === 0) {
      myOutput.style.color = input.length === 0 ? '#ffffff' : `#${input}`;
    }
  } else if (e.target.id === 'input-h1-size') {
    myOutput.style.backgroundColor = input.length === 0 ? '#ffffff' : `#${input}`;
  }
}

convert();
