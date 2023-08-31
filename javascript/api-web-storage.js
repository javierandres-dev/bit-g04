'use strict';
const d = document,
  $root = d.getElementById('root'),
  $loader = d.getElementById('loader');
let $loginForm = null;

d.addEventListener('DOMContentLoaded', () => {
  $root.innerHTML = `
  <form id="loginForm">
      <div>
        <label for="username">Usuario</label>
        <input type="text" name="username" id="username" />
      </div>
      <div>
        <label for="password">Contraseña</label>
        <input type="password" name="password" id="password" />
      </div>
      <button type="submit">Entrar</button>
    </form>
  `;
  $loginForm = d.getElementById('loginForm');
  eventListeners();
});

function eventListeners() {
  $loginForm.addEventListener('submit', login);
}

function login(e) {
  e.preventDefault();
  const username = $loginForm.username.value;
  const password = $loginForm.password.value;
  if (username === 'BIT' && password === '2023') {
    localStorage.setItem('token', 'fakeTokenBlaBlaBla');
    changeUI('users');
  } else {
    alert('No autorizado, intenta de nuevo.');
  }
}

async function changeUI(ui) {
  if (ui === 'users') {
    const users = await getUsers();
    let html = '';
    for (const user of users) {
      html += `<li>${user.name}</li>`;
    }
    $root.innerHTML = `<ol>${html}</ol>`;
  }
}

async function getUsers() {
  try {
    $loader.classList.toggle('d-none');
    let users = await fetch('https://jsonplaceholder.typicode.com/users');
    users = await users.json();
    return users;
  } catch (error) {
    alert('Ocurrió un error :(');
  } finally {
    $loader.classList.toggle('d-none');
  }
}
