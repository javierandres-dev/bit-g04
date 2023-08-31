'use strict';
const $figure = document.querySelector('figure');
const $button = document.querySelector('button');
const $p = document.querySelector('p');

const obtenerPato = () => {
  fetch('https://random-d.uk/api/v2/random')
    .then((respuesta) => {
      return respuesta.json();
    })
    .then((data) => {
      $figure.innerHTML = `
      <img src="${data.url}" alt="${data.message}">
      `;
    })
    .catch((error) => {
      console.error('error desde catch', error);
      $p.textContent =
        'Ocurrió un error, por favor intenta de nuevo más tarde.';
    });
};

$button.addEventListener('click', obtenerPato);

(() => {
  $p.textContent = 'Bienvenido!';
  setTimeout(() => {
    obtenerPato();
  }, 3000);
})();
