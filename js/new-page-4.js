console.dir(document.forms);

const form = document.querySelector('.js-form');

form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(e) {
  e.preventDefault();

  console.log(e);

  const form = e.target;

  console.log(form.elements);
  console.log(form.elements.userEmail.value);

  const formData1 = {
    comment: form.elements.userComment.value,
    password: form.elements.userPassword.value,
    email: form.elements.userEmail.value,
  };

  console.log(formData1);

  // --- for large forms with many inputs --- //
  const formData2 = new FormData(form);
  // 1
  const formDataObj = {};
  for (const [key, value] of formData2) {
    console.log(key, value);
    formDataObj[key] = value;
  }
  console.log(formDataObj);
  // 2
  const formDataObj2 = Object.fromEntries(formData2);
  console.log(formDataObj2);
  // 3
  const formDataObj3 = Object.fromEntries(new FormData(form));

  form.reset();
}

///// keyboard events
document.addEventListener('keydown', handleKeydown);

function handleKeydown(e) {
  console.log(e);
  console.log(e.code);
  console.log(e.key);

  console.log(e.keyCode); // the best
  console.log(e.metaKey); // true or false
  console.log(e.altKey); // true or false
  console.log(e.ctrlKey); // true or false
  console.log(e.shiftKey); // true or false
}

document.addEventListener('keydown', removeCombinations);

function removeCombinations(e) {
  if (e.metaKey && e.code === 'KeyC') {
    console.log('Cancel copying');
    e.preventDefault();
  }
}
