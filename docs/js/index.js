'use strict';
const d = document,
  $root = d.getElementById('root'),
  devs = [
    {
      name: 'Daniel Guevara',
      photo:
        'https://media.licdn.com/dms/image/D4E03AQFe9s-sqJFBdA/profile-displayphoto-shrink_400_400/0/1681144169400?e=1698883200&v=beta&t=ot-mAjBf-mE5RXbgtmWV1sHeUBkuicEOGFfD4CF8fJc',
      web: 'https://danguevara07.github.io/bit-2023_semillero',
      repo: 'https://github.com/DanGuevara07',
    },
    {
      name: 'Luisa Castaño',
      photo: 'https://avatars.githubusercontent.com/u/132719028?v=4',
      web: 'https://luisacastano40.github.io/bit-2023_semillero',
      repo: 'https://github.com/LuisaCastano40',
    },
    {
      name: 'Nataly Reyes',
      photo:
        'https://raw.githubusercontent.com/NataRey/HojaDeVidaNata/main/img/CvNata.jpg',
      web: 'https://natarey.github.io/bit-2023_semillero',
      repo: 'https://github.com/NataRey',
    },
    {
      name: 'Carlos Cruz',
      photo:
        'https://media.licdn.com/dms/image/D4E03AQECW83CD-5mIA/profile-displayphoto-shrink_200_200/0/1681140271552?e=1698883200&v=beta&t=kgWZ_mUq4q2OW9yWxGUXpjzIOt5X1rBs7Xt7cuW_qkk',
      web: 'https://carloscruz1503.github.io/bit-2023_semillero',
      repo: 'https://github.com/CarlosCruz1503',
    },
  ];

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
