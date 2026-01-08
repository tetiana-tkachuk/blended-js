// form
const registerForm = document.querySelector('.form');

registerForm.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const login = form.elements.login.value;
  const password = form.elements.password.value;

  if (login === '' || password === '') {
    alert('Please fill in all the field!');
    return console.log('Not all the fields are filled in!');
  }

  console.log(`Login: ${login}, Password: ${password}`);
  form.reset();
}

// checkbox
const select = document.querySelector('.pizza-select');
const textOutput = document.querySelector('.text-output');
const valueOutput = document.querySelector('.value-output');

select.addEventListener('change', setOutput);

function setOutput(e) {
  const selectedOptionValue = e.currentTarget.value;
  const selectedOptionIndex = e.currentTarget.selectedIndex;
  const selectedOptionText = e.currentTarget.options[selectedOptionIndex].text;

  textOutput.textContent = selectedOptionText;
  valueOutput.textContent = selectedOptionValue;
}

// focus and blur
const textInput = document.querySelector('.text-input');
const setFocusBtn = document.querySelector('[data-action="set"]');
const removeFocusBtn = document.querySelector('[data-action="remove"]');

setFocusBtn.addEventListener('click', () => {
  textInput.focus();
});

removeFocusBtn.addEventListener('click', () => {
  textInput.blur();
});

textInput.addEventListener('focus', () => {
  textInput.value = 'This input has focus';
});

textInput.addEventListener('blur', () => {
  textInput.value = '';
  textInput.style.backgroundColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
});

/////
const userName = document.querySelector('.js-user-name');

userName.addEventListener('blur', handleInput);

function handleInput(event) {
  const elem = event.target;
  const enteredValue = elem.value.trim();
  // const enteredValue = event.target.value.trim();
  if (enteredValue.length > 2) {
    console.log(enteredValue);
  } else
    alert(
      'Please enter a valid name! It must contain more than one character.'
    );
}

////

const imgTitleEl = document.querySelector('.js-img-title');
const imgEl = document.querySelector('.js-img');
const btnEl = document.querySelector('.js-btn');

imgTitleEl.style.marginBottom = '20px';
imgEl.style.marginBottom = '30px';

btnEl.addEventListener('click', handleImg);

function handleImg() {
  imgTitleEl.textContent = `Photo ${imgEl.attributes.width.value}px has been taken from Wirecutter:`;
  if (
    imgEl.src ===
    'https://cdn.thewirecutter.com/wp-content/media/2021/03/dogharnesses-2048px-6907-1024x682.webp'
  ) {
    imgEl.src =
      'https://cdn.thewirecutter.com/wp-content/media/2021/03/adopting-a-dog-2048px-9074-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp';
  } else
    imgEl.src =
      'https://cdn.thewirecutter.com/wp-content/media/2021/03/dogharnesses-2048px-6907-1024x682.webp';
}

/////

const passwordRefs = {
  inputEl: document.querySelector('.js-user-password'),
  btnEl: document.querySelector('.js-password-eye-btn'),
};

passwordRefs.btnEl.addEventListener('click', handleVisibility);

function handleVisibility() {
  if (passwordRefs.inputEl.attributes.type.value === 'password') {
    passwordRefs.inputEl.setAttribute('type', 'text');
    passwordRefs.btnEl.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" width="20px">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
`;
  } else {
    passwordRefs.inputEl.setAttribute('type', 'password');
    passwordRefs.btnEl.innerHTML = `<svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
            width="20px"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
            />
          </svg>`;
  }
}

///
const actionBtnsEl = document.querySelectorAll('[data-action-btn]');
const friendsListEl = document.querySelector('.friends-list');
const friends = document.querySelectorAll('.friends-list-item p');
console.log(actionBtnsEl);
console.log(friends);

actionBtnsEl.forEach(actionBtnEl =>
  actionBtnEl.addEventListener('click', handleFriends)
);

function handleFriends(e) {
  if (e.target.dataset.actionBtn === 'create') {
    console.log('create');
    console.log(e.target);
    friendsListEl.insertAdjacentHTML('beforeend', `<li><p>New friend</p></li>`);
  }
}

////

const modalRefs = {
  backdropEl: document.querySelector('.backdrop'),
  closeBtnEl: document.querySelector('.close-modal-btn'),
  openBtnEl: document.querySelector('.open-modal-btn'),
};

modalRefs.openBtnEl.style.backgroundColor = '#76b8f1ff';

// modalRefs.openBtnEl.addEventListener('click', () => {
//   modalRefs.backdropEl.classList.toggle('is-open');
// });

// modalRefs.closeBtnEl.addEventListener('click', () => {
//   modalRefs.backdropEl.classList.toggle('is-open');
// });

const toggleModal = () => {
  modalRefs.backdropEl.classList.toggle('is-open');
};

modalRefs.openBtnEl.addEventListener('click', toggleModal);
modalRefs.closeBtnEl.addEventListener('click', toggleModal);

/** classList methods
 * - add
 * - remove
 * - toggle
 * - replace
 * - contains
 */

///

const options = [
  { label: 'red', color: '#ee416dff' },
  { label: 'blue', color: '#3398f1ff' },
  { label: 'yellow', color: '#ecf169ff' },
  { label: 'green', color: '#57eb88ff' },
];

const colorPickerContainerEl = document.querySelector('.js-color-picker');

const elements = options.map(option => {
  const colorPickerBtnEl = document.createElement('button');
  colorPickerBtnEl.textContent = option.label;
  colorPickerBtnEl.style.backgroundColor = option.color;
  colorPickerBtnEl.style.border = '1px solid grey';
  colorPickerBtnEl.style.borderRadius = '30px';
  colorPickerBtnEl.style.padding = '10px 20px';
  colorPickerBtnEl.style.marginRight = '10px';
  return colorPickerBtnEl;
});

colorPickerContainerEl.append(...elements);

///

const hearts = ['💙', '🧡', '❤️', '💖'];

const listEl = document.querySelector('.hearts-list');

const itemsMarkup = hearts.map(heart => `<li>${heart}</li>`).join('');

listEl.insertAdjacentHTML('beforeend', itemsMarkup);

///

const searchOuery = 'cats';

const searchBtn = document.createElement('button');
searchBtn.classList.add('btn');
searchBtn.textContent = 'search';

listEl.insertAdjacentElement('afterend', searchBtn);

searchBtn.addEventListener('click', e => {
  handleSearchBtn(e, searchOuery);
});

function handleSearchBtn(e, prompt) {
  console.log(`Request to server with: ${prompt}`);
}

///
const fruitMovementContainer = document.querySelector('.fruit-movement');

const moveFruitBtn = document.createElement('button');
moveFruitBtn.classList.add('btn');
moveFruitBtn.textContent = 'Move fruit';
fruitMovementContainer.insertAdjacentElement('beforeend', moveFruitBtn);

const fruitBox = document.createElement('div');
fruitBox.textContent = '🍓';
fruitBox.style.fontSize = '56px';
fruitMovementContainer.insertAdjacentElement('beforeend', fruitBox);

moveFruitBtn.addEventListener('click', handleFruitClick);

let position = 0;
const shift = 10;
function handleFruitClick(e) {
  position += shift;
  fruitBox.style.transform = `translate(${position}px, ${position}px)`;
}

/// 2 3 5 4 1
setTimeout(() => console.log(1), 0);
console.log(2);
new Promise(res => {
  console.log(3);
  res();
}).then(() => console.log(4));
console.log(5);

//
