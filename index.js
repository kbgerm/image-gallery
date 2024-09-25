const url = 'https://media.wired.com/photos/65382632fd3d190c7a1f5c68/16:9/w_2400,h_1350,c_limit/Google-Image-Search-news-Gear-GettyImages-824179306.jpg';
const imageWrapper = document.querySelector('.imageWrapper');
const searchButton = document.querySelector('.searchButton');

const images = [
  {
    url: 'https://media.wired.com/photos/65382632fd3d190c7a1f5c68/16:9/w_2400,h_1350,c_limit/Google-Image-Search-news-Gear-GettyImages-824179306.jpg',
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s',
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlROcXWBsxzaZwXERUSfV6eD92_-KLFAvjbg&s',
  },
  {
    url: 'https://imageupscaler.com/wp-content/uploads/2024/07/deblured-cutty-fox.jpg',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg',
  },
  {
    url: 'https://html5css.ru/css/img_forest.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1725988208207-a15e5f5eb5fb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    url: 'https://static.addtoany.com/images/dracaena-cinnabari.jpg',
  },
  {
    url: 'https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649',
  },
  {
    url: 'https://media.istockphoto.com/id/157681198/photo/dandelion-seed.jpg?s=612x612&w=0&k=20&c=TfhCtc_Y1oSpdlL7o6yo7BTfgnD0RCy6yF1SgvQO0Jk=',
  },
  {
    url: 'https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg',
  },
  {
    url: 'https://images.ctfassets.net/hrltx12pl8hq/7JnR6tVVwDyUM8Cbci3GtJ/bf74366cff2ba271471725d0b0ef418c/shutterstock_376532611-og.jpg?fit=fill&w=1200&h=630',
  },
  {
    url: 'https://images.ctfassets.net/hrltx12pl8hq/5GaLeZJlLyOiQC4gOA0qUM/a0398c237e9744ade8b072f99349e07a/shutterstock_152461202_thumb.jpg',
  },
  {
    url: 'https://www.freedigitalphotos.net/images/img/homepage/87357.jpg',
  },
]


function makeImg(images) {

  for (let value of images) {
    let img = document.createElement('img');
    img.src = value.url;
    img.alt = 'image';
    img.className = 'img';
    imageWrapper.appendChild(img);
  }
}
makeImg(images);

searchButton.addEventListener('click', () => {
  console.log('Писюны');
})
