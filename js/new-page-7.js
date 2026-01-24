//------ event propagation -----//

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

//------ Colorpicker ------//

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

//----- new Date -----//

const date = new Date();

console.log(date);
// "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

const newDate = new Date('2026-08-06');
console.log(newDate); //

console.log(new Date('2030')); // "Tue Jan 01 2030 02:00:00 GMT+0200"
console.log(new Date('2030-03')); // "Fri Mar 01 2030 02:00:00 GMT+0200"
console.log(new Date('2030-03-16')); // "Sat Mar 16 2030 02:00:00 GMT+0200"
console.log(new Date('2030-03-16T14:25:00')); // "Sat Mar 16 2030 14:25:00 GMT+0200"

console.log(new Date(2030, 2, 16, 14, 25, 0, 0)); // "Sat Mar 16 2030 14:25:00 GMT+0200 "

//----- getTime() -----//

console.log(new Date(0));
// "Thu Jan 01 1970 03:00:00 GMT+0300 (Eastern European Standard Time)"

const unicDate = new Date();
console.log(unicDate.getTime()); // 1769270286909

//----- insted of newDate + getTime ====> Date.now() -----//

const time = Date.now();
console.log(time); // 1769270592433

//
const startTime = Date.now();

// some code for execution
for (let i = 0; i <= 100; i += 1) {
  console.log(i);
}

const endTime = Date.now();
const elapsedTime = endTime - startTime;

console.log(`Time spent on execution: ${elapsedTime} ms`);

// GET

const date1 = new Date('March 16, 2030 14:25:00');
console.log('Date: ', date1); // "Sat Mar 16 2030 14:25:00 GMT+0200"

// Повертає день місяця від 1 до 31
console.log('Day: ', date1.getDate()); // 16

// Повертає день тижня від 0 до 6, починається з неділі
console.log('Day of the week: ', date1.getDay()); // 6

// Повертає місяць від 0 до 11
console.log('Month: ', date1.getMonth()); // 2

// Повертає рік з 4 цифр
console.log('Full year: ', date1.getFullYear()); // 2030

// Повертає години
console.log('Hours: ', date1.getHours()); // 14

// Повертає хвилини
console.log('Minutes: ', date1.getMinutes()); // 25

// Повертає секунди
console.log('Seconds: ', date1.getSeconds()); // 0

// Повертає мілісекунди
console.log('Milliseconds: ', date1.getMilliseconds()); // 0

// SET

date.setMinutes(50);
console.log(date); // "Sat Mar 16 2030 14:50:00 GMT+0200"

date.setFullYear(2040);
console.log(date); // "Fri Mar 16 2040 14:50:00 GMT+0200"

date.setMonth(4);
console.log(date); // "Wed May 16 2040 14:50:00 GMT+0300"

//------ Promise ------//

const isSuccess = true;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve('Success! Value passed to resolve function');
    } else {
      reject('Error! Error passed to reject function');
    }
  }, 2000);
});

console.log(promise); // Promise object

//----- promise.then(onResolve, onReject); -----//

const isSuccess1 = true;

// Create promise
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess1) {
      resolve('Success! Value passed to resolve function');
    } else {
      reject('Error! Error passed to reject function');
    }
  }, 2000);
});

// Registering promise callbacks
promise1.then(
  value => {
    console.log(value); // "Success! Value passed to resolve function"
  },
  error => {
    console.log(error); // "Error! Error passed to reject function"
  }
);

//------ method catch(error => {Promise rejected})  ------//

const isSuccess2 = true;

// Create promise
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess2) {
      resolve('Success! Value passed to resolve function');
    } else {
      reject('Error! Error passed to reject function');
    }
  }, 3000);
});

// Registering promise callbacks
promise2
  .then(value => {
    console.log(value); // "Success! Value passed to resolve function"
  })
  .catch(error => {
    console.log(error); // "Error! Error passed to reject function"
  });

//------ method finally(() => {Promise fulfilled or rejected})  ------//

const isSuccess3 = true;

// Create promise
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess3) {
      resolve('Success! Value passed to resolve function');
    } else {
      reject('Error! Error passed to reject function');
    }
  }, 4000);
});

// Registering promise callbacks
promise3
  .then(value => console.log(value)) // "Success! Value passed to resolve function"
  .catch(error => console.log(error)) // "Error! Error passed to reject function"
  .finally(() => console.log('Promise settled')); // "Promise settled"

//-------- Promise chaining -------//

const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(5);
  }, 6000);
});

promise4
  .then(value => {
    console.log(value); // 5
    return value * 2;
  })
  .then(value => {
    console.log(value); // 10
    return value * 3;
  })
  .then(value => {
    console.log(value); // 30
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log('finally');
  });

//------- promiscification of function------//

// before
const fetchUserFromServer = (username, onSuccess, onError) => {
  console.log(`Fetching data for ${username}`);

  setTimeout(() => {
    // Change value of isSuccess variable to simulate request status
    const isSuccess = true;

    if (isSuccess) {
      onSuccess('success value');
    } else {
      onError('error');
    }
  }, 7000);
};

fetchUserFromServer(
  'Mango',
  user => console.log(user),
  error => console.error(error)
);

// after
const fetchUserFromServer2 = username => {
  return new Promise((resolve, reject) => {
    console.log(`Fetching data for ${username}`);

    setTimeout(() => {
      // Change value of isSuccess variable to simulate request status
      const isSuccess = true;

      if (isSuccess) {
        resolve('success value'); // значенням параметра resolve буде колбек-функція методу then()
      } else {
        reject('error'); // значенням параметра reject буде колбек-функція методу catch()
      }
    }, 8000);
  });
};

fetchUserFromServer2('Mango')
  .then(user => console.log(user))
  .catch(error => console.error(error));

//------ Promise.resolve() and Promise.reject() ------//

// Promise.reject().then().catch();
