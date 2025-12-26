const colorSwicherBtn = document.querySelector('.color-swicher-btn');
const firstCircle = document.querySelector('.first-circle');

colorSwicherBtn.addEventListener('click', e => {
  firstCircle.style.backgroundColor = 'pink';
  firstCircle.style.transform = 'translateX(100px)';
});

colorSwicherBtn.addEventListener('blur', e => {
  firstCircle.style.backgroundColor = 'grey';
  firstCircle.style.transform = 'translateX(0)';
});

const moveBtn = document.querySelector('.move-btn');
const secondCircle = document.querySelector('.second-circle');

moveBtn.addEventListener('click', moveCircle);

let moveLeft = 300;
let moveRight = 0;
const distance = 50;

function moveCircle(e) {
  if (moveLeft === -300) {
    moveRight = 0;
    secondCircle.style.transform = `translateX(${moveRight}px)`;
  } else if (moveRight >= 300) {
    moveLeft -= distance;
    secondCircle.style.transform = `translateX(${moveLeft}px)`;
  } else {
    moveRight += distance;
    secondCircle.style.transform = `translateX(${moveRight}px)`;
  }

  console.log('moveRight:', moveRight);
  console.log('moveLeft:', moveLeft);
}

// --- close window --- //

const closeWindowBtn = document.querySelector('.close-btn');

closeWindowBtn.addEventListener('click', e => {
  setTimeout(() => {
    window.close();
  }, 2000);
});

console.log(window);
console.dir(window.document);

// toys
const input = document.querySelector('.calc-input');
console.log(input.hasAttribute('placeholder'));
input.setAttribute('placeholder', 'newplaceholder');
console.log(input.getAttribute('placeholder'));

console.log(input.placeholder);

input.placeholder = 'wow';

//
const newButton = document.createElement('button');
const calcDiv = document.querySelector('.calculator');
newButton.classList = 'big-button';
calcDiv.append(newButton);
const styledBtn = document.querySelector('.big-button');
styledBtn.textContent = 'Button';
styledBtn.style.width = '300px';
styledBtn.style.height = '60px';
styledBtn.style.backgroundColor = 'green';
styledBtn.style.borderRadius = '10px';
styledBtn.style.color = 'white';
styledBtn.style.fontSize = '24px';

const buttonsObjsArray = [
  { btnName: 'first', btnBG: 'yellow' },
  { btnName: 'second', btnBG: 'light-blue' },
  { btnName: 'third', btnBG: 'orange' },
  { btnName: 'fourth', btnBG: 'grey' },
];

const btnMarkup = buttonsObjsArray
  .map(
    ({ btnName }, i) =>
      `<button class="test-btn ${btnName}" type='button'>${btnName}</button>`
  )
  .join('');

calcDiv.insertAdjacentHTML('beforeend', btnMarkup);

const allBtns = document.querySelectorAll('.test-btn');
console.log(allBtns);

allBtns.forEach(btn => (btn.style.backgroundColor = 'yellow'));

//

const createEl = (elName, className) => {
  const neededBtn = document.createElement(elName);
  neededBtn.classList = className;
  calcDiv.append(neededBtn);
};

createEl('button', 'click-btn');

const btnToStyle = document.querySelector('.click-btn');

btnToStyle.style.backgroundColor = 'pink';
btnToStyle.style.width = '300px';
btnToStyle.style.height = '100px';
btnToStyle.style.borderRadius = '10px';
btnToStyle.textContent = 'Test button';
