const markConvert = new showdown.Converter();

let menuShowing = false;
let mobile = window.innerWidth < 1000 ? true : false;

/*------ DOM ELEMENTS ------*/

const myOutput = document.getElementById('output');
const myInput = document.getElementById('input');
const menu = document.getElementById('menu');
const menuBtn = document.getElementById('menu-btn');

const bgColor = document.getElementById('input-background-color');
const fontColor = document.getElementById('input-font-color');

/*------ EVENT LISTENERS ------*/

input.addEventListener('input', convert);
menuBtn.addEventListener('click', toggleMenu);
menu.addEventListener('input', updateStyle);
// bgColor.addEventListener('keydown', updateStyle);

/*------ FUNCTIONS ------*/

function convert() {
  let text = input.value;
  let converted = markConvert.makeHtml(text);
  myOutput.innerHTML = converted;
}

function toggleMenu() {
  menu.classList.toggle('visible');
  if (menuShowing) {
    menuBtn.classList.toggle('menu-clicked');
    menuShowing = false;
  } else {
    let timeout = mobile ? 50 : 200;
    setTimeout(() => menuBtn.classList.toggle('menu-clicked'), timeout);
    menuShowing = true;
  }
}

function updateStyle(e) {
  let input = e.target.value;
  if (e.target.id === 'input-background-color') {
    if (input.length === 3 || input.length === 6 || input.length === 0) {
      myOutput.style.backgroundColor = input.length === 0 ? '#ffffff' : `#${input}`;
      document.getElementById('input-background-color').style.backgroundColor =
        input.length === 0 ? '#ffffff' : `#${input}`;
    }
  } else if (e.target.id === 'input-font-color') {
    if (input.length === 3 || input.length === 6 || input.length === 0) {
      myOutput.style.color = input.length === 0 ? '#ffffff' : `#${input}`;
      document.getElementById('input-font-color').style.color =
        input.length === 0 ? '#ffffff' : `#${input}`;
    }
  } else if (e.target.id === 'input-h1-size') {
    let h1Els = document.querySelectorAll('#output h1');
    h1Els.forEach(x => (x.style.fontSize = input));
  } else if (e.target.id === 'input-h2-size') {
    let h2Els = document.querySelectorAll('#output h2');
    h2Els.forEach(x => (x.style.fontSize = input));
  } else if (e.target.id === 'input-p-size') {
    let pEls = document.querySelectorAll('#output p');
    pEls.forEach(x => (x.style.fontSize = input));
  }
}

convert();
