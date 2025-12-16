// -------- 1
const numbers = [1, 2, 3, 4, 5];

const getNewNumbersArray = numArray => numArray.map(num => num ** 2);
console.log(getNewNumbersArray(numbers)); // [1, 4, 9, 16, 25]

// -------- 2
const data = [
  { id: 1, values: [1, 2, 3] },
  { id: 2, values: [4, 5, 6] },
  { id: 3, values: [7, 8, 9] },
];

const getDataArray = data =>
  data.reduce((acc, obj) => {
    acc = acc.concat(obj.values);
    return acc;
  }, []);

const dataValuesInfo = getDataArray(data);
console.log(dataValuesInfo); // [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let newArray = [];
// const getNewArray = data =>
//   data.forEach(obj => (newArray = newArray.concat(obj.values)));

// getNewArray(data);

// console.log(newArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// -------- 3

const people = [
  { name: 'John', age: 27 },
  { name: 'Jane', age: 31 },
  { name: 'Bob', age: 19 },
];

const checkAge = (array, minAge) => array.some(person => person.age < minAge);

console.log(checkAge(people, 20)); //true

// -------- 4

const numbers2 = [2, 4, 6, 8, 10];

const checkEvenNumber = array => array.every(num => num % 2 === 0);

console.log(checkEvenNumber(numbers2)); // true

// -------- 5

const numbers3 = [2, 1, 6, 8, 9, 10, 12];

const findFirstOddNumber = array => array.find(num => num % 2 !== 0);

console.log(findFirstOddNumber(numbers3)); // 1

// ------- 6

const numbersArray = [4, 2, 5, 1, 3];

const sortNumbersIncrease = array => array.toSorted();

console.log(sortNumbersIncrease(numbersArray)); // [1, 2, 3, 4, 5]

// ------- 7

const stringArray = ['banana', 'orange', 'apple', 'pear'];

const sortFruitsNameByAlphabet = fruitsArray => fruitsArray.toSorted();

console.log(sortFruitsNameByAlphabet(stringArray));

const sortFruitsNameReverse = fruitsArray => fruitsArray.toSorted().reverse();

// const sortFruitsNameReverse = fruitsArray =>
//   fruitsArray.toSorted((a, b) => b.localeCompare(a));

console.log(sortFruitsNameReverse(stringArray));

// ------ 8

const users = [
  { name: 'John', age: 27 },
  { name: 'Jane', age: 31 },
  { name: 'Bob', age: 19 },
];

const sortUsersByAgeDecrease = usersArray =>
  usersArray.toSorted((user1, user2) => user2.age - user1.age);

console.log(sortUsersByAgeDecrease(users));

// ------ 9

const users2 = [
  { name: 'John', age: 27 },
  { name: 'Jane', age: 31 },
  { name: 'Bob', age: 19 },
];

const filterUsersbyAge = (users, age) => users.filter(user => user.age > age);

console.log(filterUsersbyAge(users2, 20));

// ------ 10

const numbers4 = [1, 2, 3, 4, 5];

const countSum = numbers =>
  numbers.reduce((acc, num) => {
    acc += num;
    return acc;
  }, 0);

console.log(countSum(numbers4));
