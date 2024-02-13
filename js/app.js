const input = document.querySelector('#text_List');
  const button = document.querySelector('button');

  const listUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();

  function callUser(id) {

    let user = users.find((user) => user.id == id)
    let userTableBody = ``

    userTableBody = `<tr>
   <td class='centered'>${user.id}</td>
   <td class='centered'>${user.name}</td>
   <td class='centered'>${user.phone}</td>
   </tr>`;

   document.getElementById("tableBody_FoundUser").innerHTML = userTableBody;
  }

  button.addEventListener('click', (e) => {
    e.preventDefault();

    callUser(input.value);
  });
 
  let tableBody = ``;
  users.forEach((user, index) => {
    tableBody += `<tr>
   <td class='centered'>${user.id}</td>
   <td class='centered'>${user.name}</td>
   <td class='centered'>${user.address.city}</td>
   </tr>`;
  });

  document.getElementById("tableBody_Users").innerHTML = tableBody;
};

window.addEventListener("load", function () {
  listUsers();
});
