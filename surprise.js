const surprises = [
  {
    src: 'surprises/breakfast.png',
    alt: `A hearty breakfast`,
    width: '50',
  },
  {
    src: 'surprises/cookie.png',
    alt: `Grandma's cookies`,
    width: '38',
  },
  {
    src: 'surprises/fairy_rose.png',
    alt: `A magical fairy rose`,
    width: '42',
  },
  {
    src: 'surprises/pancakes.png',
    alt: `Yummy pancakes with maple syrup drizzled on top`,
    width: '50',
  },
  {
    src: 'surprises/poppyseed_muffin.png',
    alt: `Some freshly made poppyseed muffins`,
    width: '40',
  },
  {
    src: 'surprises/pumpkin_pie.png',
    alt: `A delightful pumpkin pie`,
    width: '50',
  },
  {
    src: 'surprises/rhubarb_pie.png',
    alt: `A tart rhubarb pie`,
    width: '50',
  }
];

getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

onUnleashSurprise = () => {
  const img = document.createElement('img');
  const surprise = surprises[getRandomInt(surprises.length - 1)];
  img.src = surprise.src;
  img.alt = surprise.alt;
  img.width = surprise.width;
  img.classList += 'index__surprise';
  Draggable.create(img, {});
  document.getElementById('interactive-container').appendChild(img);
  TweenMax.to(img, 0.3, {
    y:-200,
    ease:Back.easeOut
  });
  TweenMax.to(img, 0.3, {
    y: getRandomIntInclusive(-15, 60),
    x: getRandomIntInclusive(-125, 125),
    ease:Back.easeOut
  });
  document.getElementById('aria-live').innerHTML = `${surprise.alt} just appeared!`;
}