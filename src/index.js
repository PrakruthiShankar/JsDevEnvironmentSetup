import {getUsers} from './api/userApi';

getUsers().then(result => {
let userBody = "";

result.forEach(user => {
  userBody += `<tr>
  <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
  <td>${user.id}</td>
  <td>${user.name}</td>
  <td>${user.email}</td>
  </tr>`
});
global.document.getElementById('users').innerHTML = userBody;
});

