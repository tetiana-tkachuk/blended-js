//------API method fetch() ------//
//
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    // Response handling
  })
  .then(data => {
    // Data handling
  })
  .catch(error => {
    // Error handling
  });

//
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Data handling
    console.log('Отримані дані:', data);
  })
  .catch(error => {
    // Error handling
    console.log('Помилка запиту:', error);
  });

//
const options = {
  method: 'GET',
};

fetch('https://jsonplaceholder.typicode.com/users', options)
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then(data => {
    // Data handling
  })
  .catch(error => {
    // Error handling
  });

//

const fetchUsersBtn = document.querySelector('.btn');

fetchUsersBtn.addEventListener('click', () => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(users => {
      // Дані від бекенда
      console.log(users);
    })
    .catch(error => console.log(error));
});

//

// const fetchUsersBtn2 = document.querySelector('.btn');
// const userList = document.querySelector('.user-list');

// fetchUsersBtn2.addEventListener('click', () => {
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     })
//     .then(users => {
//       const markup = users
//         .map(user => {
//           return `<li>
// 	          <p><b>Name</b>: ${user.name}</p>
// 	          <p><b>Email</b>: ${user.email}</p>
// 	          <p><b>Company</b>: ${user.company.name}</p>
// 	        </li>`;
//         })
//         .join('');

//       userList.insertAdjacentHTML('beforeend', markup);
//     })
//     .catch(error => console.log(error));
// });

//
const fetchUsersBtn3 = document.querySelector('.btn');
const userList3 = document.querySelector('.user-list');

fetchUsersBtn3.addEventListener('click', () => {
  fetchUsers()
    .then(users => renderUsers(users))
    .catch(error => console.log(error));
});

function fetchUsers() {
  return fetch(
    'https://jsonplaceholder.typicode.com/users?_limit=6&_sort=name'
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function renderUsers(users) {
  const markup = users
    .map(user => {
      return `<li>
          <p><b>Name</b>: ${user.name}</p>
          <p><b>Email</b>: ${user.email}</p>
          <p><b>Company</b>: ${user.company.name}</p>
        </li>`;
    })
    .join('');
  userList3.insertAdjacentHTML('beforeend', markup);
}
