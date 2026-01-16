// event propagation
const parentEl = document.querySelector('.parent');
const childEl = document.querySelector('.child');
const descendantEl = document.querySelector('.descendant');

parentEl.addEventListener('click', e => {
  setTimeout(() => {
    console.log(e.target);
    e.target.style.backgroundColor = 'lightgreen';
  }, 2000);
});

parentEl.addEventListener('click', e => {
  console.log(e.target);
  console.log(e.currentTarget);
  setTimeout(() => {
    e.target.style.backgroundColor = 'yellow';
  }, 1000);
});

//
const colorPalette = document.querySelector('.color-palette');
const output = document.querySelector('.output');

colorPalette.addEventListener('click', selectColor);

// This is where delegation «magic» happens
function selectColor(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  const selectedColor = event.target.dataset.color;
  output.textContent = `Selected color: ${selectedColor}`;
  output.style.color = selectedColor;
}

// Some helper functions to render palette items
createPaletteItems();

function createPaletteItems() {
  const items = [];
  for (let i = 0; i < 60; i++) {
    const color = getRandomHexColor();
    const item = document.createElement('button');
    item.type = 'button';
    item.dataset.color = color;
    item.style.backgroundColor = color;
    item.classList.add('item');
    items.push(item);
  }
  colorPalette.append(...items);
}

function getRandomHexColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}
