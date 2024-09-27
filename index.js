const imageWrapper = document.querySelector('.imageWrapper');
const searchButton = document.querySelector('.searchButton');
const form = document.querySelector('form');
const input = document.querySelector('#form');
const prestige = imageWrapper.querySelector('#prestige');

let images = [];
let userRequest;

async function getData() {
  let params = new URLSearchParams(
    {
      page: 1,
      client_id: 'sbETpyeTNDizQEv5RmN6w0LXhrXWAZf-R1g0nbmYyVw',
      query: userRequest,
    }
  );
  const res = await fetch(`https://api.unsplash.com/search/photos?${params.toString()}`);
  images = await res.json();
  console.log(images);
}

function makeImg() {

  for (let value of images.results) {
    let img = document.createElement('img');
    img.src = value.urls.regular;
    img.alt = 'image';
    img.className = 'img';
    img.id = 'prestige';
    imageWrapper.appendChild(img);
  }
}
// Form

form.addEventListener('submit', e => {
  e.preventDefault();
  userRequest = input.value;

  while (imageWrapper.firstChild) {
    imageWrapper.removeChild(imageWrapper.firstChild);
  }

  getData().then(function () {
    makeImg();
  });
});

// Loaded page 

document.addEventListener('DOMContentLoaded', start);

function start() {
  getData().then(function () {
    makeImg();
  });
}