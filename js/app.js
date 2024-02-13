  const input = document.querySelector('text_List');
  const button =document.querySelector('button');
  const listUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();

  button.addEventListener('click', (e) => {
    e.preventDefault();
    tableBody(input.value);
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

