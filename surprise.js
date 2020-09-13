const WINTER = [
  {
    src: 'surprises/cookie.png',
    alt: `Grandma's cookies`,
    width: '38',
  },
  {
    src: 'surprises/wine.png',
    alt: `An antique bottle of wine`,
    width: '65',
  },
  {
    src: 'surprises/holly.png',
    alt: `A festive holly flower`,
    width: '42',
  },
  {
    src: 'surprises/chocolate_cake.png',
    alt: `A rich chocolate cake`,
    width: '55',
  },
  {
    src: 'surprises/coffee.png',
    alt: `A warm cup of coffee`,
    width: '38',
  },
  {
    src: 'surprises/rhubarb_pie.png',
    alt: `A tart rhubarb pie`,
    width: '50',
  },
  {
    src: 'surprises/soup.png',
    alt: `A hot bowl of clam chowder`,
    width: '50',
  },
  {
    src: 'surprises/snow.png',
    alt: `A clump of snow`,
    width: '50',
  }
];

const AUTUMN = [
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
    src: 'surprises/sunflower.png',
    alt: `A bright sunflower`,
    width: '48',
  },
  {
    src: 'surprises/pancakes.png',
    alt: `Yummy pancakes with maple syrup drizzled on top`,
    width: '50',
  },
  {
    src: 'surprises/poppyseed_muffin.png',
    alt: `Some freshly made poppyseed muffins`,
    width: '38',
  },
  {
    src: 'surprises/pumpkin_pie.png',
    alt: `A delightful pumpkin pie`,
    width: '50',
  },
  {
    src: 'surprises/pumpkin.png',
    alt: `A plump pumpkin`,
    width: '60',
  },
  {
    src: 'surprises/soup.png',
    alt: `A fragrant mushroom soup`,
    width: '45',
  }
];

const SPRING = [
  {
    src: 'surprises/cobbler.png',
    alt: `A freshly baked blackberry cobbler`,
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
    src: 'surprises/poppy.png',
    alt: `An orange poppy`,
    width: '50',
  },
  {
    src: 'surprises/fish_taco.png',
    alt: `A yummy fish taco, dripping with salsa`,
    width: '50',
  },
  {
    src: 'surprises/tulip.png',
    alt: `The prettiest red tulip`,
    width: '50',
  }
];

const SUMMER = [
  {
    src: 'surprises/burger.png',
    alt: `An Impossible burger`,
    width: '50',
  },
  {
    src: 'surprises/sunflower.png',
    alt: `A bright sunflower`,
    width: '45',
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
    src: 'surprises/lemonade.png',
    alt: `A glass of fresh strawberry lemonade`,
    width: '50',
  },
  {
    src: 'surprises/poppy.png',
    alt: `An orange poppy`,
    width: '50',
  },
  {
    src: 'surprises/fish_taco.png',
    alt: `A yummy fish taco, dripping with salsa`,
    width: '50',
  },
  {
    src: 'surprises/tulip.png',
    alt: `The prettiest red tulip`,
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

getSurprise = () => {
  // return WINTER[getRandomInt(WINTER.length)];
  const today = new Date();
  const month = today.getMonth();
  if (month < 2 || month > 11) {
    return WINTER[getRandomInt(WINTER.length)];
  } else if (month < 6) {
    return SPRING[getRandomInt(SPRING.length)];
  } else if (month < 8) {
    return SUMMER[getRandomInt(SUMMER.length)];
  } else {
    return AUTUMN[getRandomInt(AUTUMN.length)];
  }
}

onUnleashSurprise = () => {
  const img = document.createElement('img');
  const surprise = getSurprise();
  img.src = surprise.src;
  img.alt = surprise.alt;
  img.width = surprise.width;
  img.classList += 'index__surprise';
  Draggable.create(img, {});
  document.getElementById('interactive-container').appendChild(img);

  animateSurprise(img);

  document.getElementById('aria-live').innerHTML = `${surprise.alt} just appeared!`;
}

animateSurprise = (img) => {
  const path1 = document.getElementById('path1-svg');
  const path2 = document.getElementById('path2-svg');
  const offset = 90;

  path1.style.left = (offset + getRandomIntInclusive(-40, 40)) + 'px';
  path2.style.left = (offset + getRandomIntInclusive(-40, 40)) + 'px';

  const end = getRandomInt(13)/100;
  const path = getRandomInt(10) > 5 ? '#path1' : '#path2';

  TweenMax.to(img, .4, { rotation: 720 });
  TweenMax.to(img, {
    duration: .4,
    ease: Linear.easeIn,
    motionPath: {
      ease: Linear.easeIn,
      start: 1,
      end,
      path,
      align: path,
    }
  });
}