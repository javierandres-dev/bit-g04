'use strict';
import getList from './modulo.js';

const d = document,
  $root = d.getElementById('root'),
  devs = getList();

let html = '';

for (const dev of devs) {
  html += `
  <div class="card">
    <figure>
      <img src="${dev.photo}" alt="${dev.name}">
      <figcaption>${dev.name}</figcaption>
    </figure>
    <nav>
      <a href="${dev.web}" target="_blank" rel="noopener noreferrer">Website &#127758;</a>
      <a href="${dev.repo}" target="_blank" rel="noopener noreferrer">&#127765; Repository</a>
    </nav>
  </div>
  `;
}

$root.innerHTML = `<div class="cards">${html}</div>`;
localStorage.setItem('devs', JSON.stringify(devs));
