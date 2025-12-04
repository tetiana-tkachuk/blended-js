const colorSwicherBtn = document.querySelector('.color-swicher-btn');
const firstCircle = document.querySelector('.first-circle');
const closeWindowBtn = document.querySelector('.close-btn');
const dragBox = document.querySelector('.drag-box');

colorSwicherBtn.addEventListener('click', e => {
  firstCircle.style.backgroundColor = 'pink';
  firstCircle.style.transform = 'translateX(100px)';
});

colorSwicherBtn.addEventListener('blur', e => {
  firstCircle.style.backgroundColor = 'grey';
  firstCircle.style.transform = 'translateX(0)';
});

closeWindowBtn.addEventListener('click', e => {
  setTimeout(() => {
    window.close();
  }, 2000);
});

console.log(window);
console.dir(window.document);
