'use strict';
import getList from './modulo.js';

const d = document,
  $root = d.getElementById('root'),
  devs = getList();

let html = '';

for (const dev of devs) {
  html += `<li>${dev.name}</li>`;
}

$root.innerHTML = `<ul>${html}</ul>`;
localStorage.setItem('devs', JSON.stringify(devs));
