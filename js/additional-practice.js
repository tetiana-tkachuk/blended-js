// #region Object

const book = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  isPublic: true,
  rating: 8.38,
};

console.log(book.genres); // ['historical prose', 'adventure']
console.log(book.genres[1]); // adventure

const propKey = 'author';

console.log(book[propKey]); // 'Bernard Cornwell'

book.pageCount = 836;
book.originalLanguage = 'en';
book.translations = ['ua', 'en'];
book.price = {
  hardcover: 39,
  softcover: 29,
};

console.log(book);

const userName = 'Henry Sibola';
const age = 25;

const user = {
  userName: userName,
  age: age,
};

console.log(user.userName); // 'Henry Sibola'
console.log(user.age); // 25

const userName2 = 'Henry Sibola';
const age2 = 31;

const user2 = {
  userName2,
  age2,
};

console.log(user2.userName2); // 'Henry Sibola'
console.log(user2.age2); // 31

const propName3 = 'userName';

const user3 = {
  age: 25,
};

user3[propName3] = 'Emily White';

console.log(user3.userName);

const propName4 = 'userName';

const user4 = {
  age: 28,
  [propName4]: 'Melany Smith',
};

console.log(user4.userName);

const book2 = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  rating: 8.38,
};

for (const key in book2) {
  console.log(key);
}
// each iteration returns one key of one property
// 'title'
// 'author'
// 'genres'
// 'rating'

const bookKeys = [];
const bookValues = [];

for (const key in book2) {
  bookKeys.push(key);
  bookValues.push(book2[key]);
}

console.log(bookKeys); // ['title', 'author', 'genres', 'rating']
console.log(bookValues); // ["The Last Kingdom", ['historical prose', 'adventure'], "Bernard Cornwell", 8.38]

const book3 = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  rating: 8.38,
};
const keys = Object.keys(book3);
console.log(keys); // ['title', 'author', 'genres', 'rating']

const values = Object.values(book3);
console.log(values); // ["The Last Kingdom", ['historical prose', 'adventure'], "Bernard Cornwell", 8.38]

const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Tell-Tale Heart',
    author: 'Edgar Allan Poe',
    rating: 7.75,
  },
];

for (const book of books) {
  console.log(book); // each object
  console.log(book.title); // each title
  console.log(book.author); // each autor
  console.log(book.rating); // each rating
}

const authorToSearchFor = 'Robert Sheckley';

for (const book of books) {
  if (book.author === authorToSearchFor) {
    console.log(book);
    console.log(book.title);
    console.log(book.rating);
  }
}

const titles = [];

for (const book of books) {
  titles.push(book.title);
}

console.log(titles); // ["The Last Kingdom", "Beside Still Waters", "The Tell-Tale Heart"]

let totalRating = 0;

for (const book of books) {
  totalRating += book.rating;
}

const averageRating = totalRating / books.length;
console.log(averageRating); // 8

// ----- !!!!!!!! ----- //
// Object method is function definition
const bookShelf = {
  books: ['The Last Kingdom', 'Dream Guardian'],

  getBooks() {
    const allBooks = [];
    for (const book of this.books) {
      allBooks.push(book);
    }
    return allBooks;
  },

  addBook(bookName) {
    this.books.push(bookName);
  },
};

console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Dream Guardian']
bookShelf.addBook('New book 1'); // Adding book New book 1
bookShelf.addBook('New book 2'); // Adding book New book 2

console.log(bookShelf.getBooks());

const bookShelf2 = {
  books: [
    { title: 'The Last Kingdom', rating: 8 },
    { title: 'The Mist', rating: 6 },
  ],
  getBooks() {
    return this.books;
  },
  addBook(newBook) {
    this.books.push(newBook);
  },
};

bookShelf2.addBook({ title: 'Dream Guardian', rating: 9 });

console.log(bookShelf2.getBooks());

const bookShelf3 = {
  books: [
    { title: 'The Last Kingdom', rating: 8 },
    { title: 'The Mist', rating: 6 },
  ],
  getAvarageRating() {
    let totalRating = 0;
    for (const book of this.books) {
      totalRating += book.rating;
    }
    return totalRating / this.books.length;
  },
};

console.log(bookShelf3.getAvarageRating());

const bookShelf4 = {
  books: [
    { title: 'The Last Kingdom', rating: 8 },
    { title: 'The Mist', rating: 6 },
    { title: 'Nightmare', rating: 5 },
  ],

  changeRating(bookName, newRating) {
    for (const book of this.books) {
      if (book.title === bookName) {
        book.rating = newRating;
      }
    }
  },
};

bookShelf4.changeRating('The Mist', 9);
console.log(bookShelf4);

// #endregion Object

// #region spread and rest

// old school way -> arguments
function multiply() {
  console.log(arguments);
}
multiply(1, 2); // pseudo-array [1, 2]
multiply(1, 2, 3); // pseudo-array [1, 2, 3]
multiply(1, 2, 3, 4); // pseudo-array [1, 2, 3, 4]

// new school way -> ...rest
function multiply2(...args) {
  console.log(args);
}

multiply2(1, 2); // [1, 2]
multiply2(1, 2, 3); // [1, 2, 3]
multiply2(1, 2, 3, 4); // [1, 2, 3, 4]

function multiply3(first, second, ...args) {
  console.log(first, second, args);
}

multiply3(1, 2); // 1 2
multiply3(1, 2, 3); // 1 2 [3]
multiply3(1, 2, 3, 4); // 1 2 [3, 4]

// new scool way -> ...spreed
console.log(...[1, 2, 3]); // 1 2 3

const temps = [14, -4, 25, 8, 11];

console.log(...temps); // 14 -4 25 8 11

console.log(Math.max(...temps)); // 25

const temps2 = [14, -4, 25, 8, 11];
const copyOfTemps = [...temps];
console.log(copyOfTemps); // [14, -4, 25, 8, 11]

const lastWeekTemps = [14, 25, 11];
const currentWeekTemps = [23, 17, 18];
const allTemps = [...lastWeekTemps, ...currentWeekTemps];
console.log(allTemps); // [14, 25, 11, 23, 17, 18]

// spread for object
// 1
const first = { propA: 5, propB: 10 };
const second = { propC: 15 };
const third = { ...first, ...second };
console.log(third); // { propA: 5, propB: 10, propC: 15 }

//2
const first2 = { propA: 5, propB: 10, propC: 50 };
const second2 = { propC: 15, propD: 20 };

const third2 = { ...first2, ...second2 };
console.log(third2); // { propA: 5, propB: 10, propC: 15, propD: 20 }
const fourth2 = { ...second2, ...first2 };
console.log(fourth2); // { propA: 5, propB: 10, propC: 50, propD: 20 }

const fifth2 = { ...first2, propB: 20, ...second2 };
console.log(fifth2); // { propA: 5, propB: 20, propC: 15, propD: 20 }

// #endregion spread and rest

// #region callback
function invite(name) {
  return `Hi,${name}! We glad to invite you join us at the party tomorrow 💙`;
}
console.log(invite('John')); // call of function
console.log(invite); // link on function

//
function greet(name) {
  console.log(`Hello, ${name}`);
}

function notify(name) {
  console.log(`Dear ${name}, your room will be ready in 30 minutes`);
}

function registerGuest(name, callback1, callback2) {
  console.log(`Registering ${name}!`);
  callback1(name);
  callback2(name);
}

registerGuest('Mango', greet, notify);
// 1 action -> "Registering Mango!"
// 2 action -> "Welcome Mango!"
// 3 action -> "Dear Mango, your room will be ready in 30 minutes"

// inline callback function
function registerGuest2(name, callback) {
  console.log(`Registering ${name}!`);
  callback(name);
}

registerGuest2('Monica', function greet(name) {
  console.log(`Welcome ${name}!`);
});

registerGuest2('Kendy', function notify(name) {
  console.log(`Dear ${name}, your room will be ready in 30 minutes`);
});
// #endregion callback
