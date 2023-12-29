document.addEventListener('DOMContentLoaded', function () {
  const imageGallery = document.getElementById('imageGallery');
  const keywords = [
    'cats',
    'cute',
    'animals',
    'enjoy',
    'dogs',
    'ducks',
    'birds',
    'fly',
    'butterfly',
    'babies',
    'nature',
    'love',
    'life',
    'baby',
  ];

  const getRandomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  function getRandomImageUrl(keyword, width = 500, height = 500) {
    return `https://source.unsplash.com/random/${width}x${height}/?${keyword}`;
  }

  function replaceImage(img) {
    const width = getRandomNumber(500, 500);
    const height = getRandomNumber(500, 500);
    const randomIndex = Math.floor(Math.random() * keywords.length);
    const randomKeyword = keywords.splice(randomIndex, 1)[0];
    img.src = getRandomImageUrl(randomKeyword, 500, 500);
  }

  function appendRandomImage() {
    const img = document.createElement('img');
    replaceImage(img);
    img.addEventListener('DOMContentLoaded', function () {
      replaceImage(img);
    });
    imageGallery.appendChild(img);
  }

  for (let i = 0; i < 15; i++) {
    appendRandomImage();
  }
});
