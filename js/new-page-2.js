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
