//---- TASK-1 ----//

const bodyEl = document.querySelector('body');
console.log(bodyEl);
console.log(document.body);

const titleEl = document.querySelector('#title');
console.log(titleEl);
console.log(document.getElementById('title'));

const listEl = document.querySelector('.list');
console.log(listEl);

const dataTopicElements = document.querySelectorAll('[data-topic]');
console.log(dataTopicElements);

const firstDataTopicEl = document.querySelector('[data-topic]');
console.log(firstDataTopicEl);
console.log(dataTopicElements[0]);

const secondDataTopicEl = dataTopicElements[dataTopicElements.length - 1];
console.log(secondDataTopicEl);
console.log(listEl.lastElementChild);

const mainTitleEl = document.querySelector('h1');
const mainTitleSiblingEl = mainTitleEl.nextElementSibling;
console.log(mainTitleSiblingEl);

const h3TitleElements = document.querySelectorAll('h3');
console.log(h3TitleElements);
h3TitleElements.forEach(title => title.classList.add('active'));

const navigationDataTopicEl = document.querySelector(
  '[data-topic="navigation"]'
);
console.log(navigationDataTopicEl);

navigationDataTopicEl.style.backgroundColor = 'yellow';

navigationDataTopicEl.querySelector('p').textContent = 'Я змінив тут текст!';

const currentTopic = 'manipulation';
const dataTopicEl = document.querySelector(`[data-topic = ${currentTopic}]`);
console.log(dataTopicEl);
dataTopicEl.style.backgroundColor = 'lightblue';

const completedTitle = document.querySelector('.completed');
console.log(completedTitle);
const parent = completedTitle.parentElement;
// const parent = completedTitle.parentNode;
parent.remove();

const p = document.createElement('p');
p.textContent = "Об'єктна модель документа (Document Object Model)";
mainTitleEl.after(p);

mainTitleEl.insertAdjacentHTML(
  'afterend',
  "<p>Об'єктна модель документа (Document Object Model)</p>"
);

const liEl = document.createElement('li');
const h3El = document.createElement('h3');
const pEl = document.createElement('p');
h3El.textContent = 'Властивість innerHTML';
pEl.textContent =
  'Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу';

listEl.append(liEl);
liEl.prepend(h3El, pEl);

// another way
const newItem =
  '<li><h3>Властивість innerHTML</h3><p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p></li>';

listEl.insertAdjacentHTML('beforeend', newItem);

// listEl.innerHTML = ''; // clean list

//---- TASK-2 ----//

const numberContainer = document.querySelector('.number-container');

const randomNumber = () => Math.floor(Math.random() * 100) + 1;

const blockNumberElements = [];

for (let i = 0; i <= 100; i++) {
  const blockNumber = randomNumber();

  const blockNumberEl = document.createElement('div');
  blockNumberEl.classList.add('number');

  if (blockNumber % 2 === 0) {
    blockNumberEl.classList.add('even');
    blockNumberEl.textContent = blockNumber;
  } else {
    blockNumberEl.classList.add('odd');
    blockNumberEl.textContent = blockNumber;
  }

  blockNumberElements.push(blockNumberEl);
}
numberContainer.append(...blockNumberElements);
