const url = 'https://media.wired.com/photos/65382632fd3d190c7a1f5c68/16:9/w_2400,h_1350,c_limit/Google-Image-Search-news-Gear-GettyImages-824179306.jpg';
const imageWrapper = document.querySelector('.imageWrapper');
const searchButton = document.querySelector('.searchButton');
const form = document.querySelector('form');
const input = document.querySelector('#form');

let images = [];
let userRequest;

searchButton.addEventListener('click', () => {
  getData().then(function () {
    makeImg();
  });
})


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
    imageWrapper.appendChild(img);
  }
}


// Form

form.addEventListener('submit', e => {
  e.preventDefault();
  userRequest = input.value;
});