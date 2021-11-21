/*
 * Generates the code loader.
 */
const _executeBees = () => {
  const workerBee = new Worker('scripts/bees.js')
  workerBee.onmessage = () => {
    _createBees();
    _createBee('bee1');
    _createBee('bee2');
    document.addEventListener('mousemove', (event) => {
      _animateBee(document.getElementById('bee1'), event.clientX + 30, event.clientY);
      _animateBee(document.getElementById('bee2'), event.clientX -30, event.clientY + 30);
    });
  }
}

_executeBees();

const _createBee = (id) => {
  const beeEl = document.createElement('div');
  beeEl.innerHTML = '🐝';
  beeEl.classList = ['main__bee']
  beeEl.setAttribute('aria-hidden', true);

  if (_getRandomInt(window.innerWidth) < window.innerWidth / 2) {
    beeEl.style.zIndex = 100;
  } else {
    beeEl.style.zIndex = -1;
  }

  if (id) {
    beeEl.setAttribute('id', id);
    beeEl.style.zIndex = 100;
  }

  const mainEl = document.getElementById('main');
  mainEl.appendChild(beeEl);

  // _animateBee, _getRandomInt(500, 1500)
  setTimeout(_animateBee, _getRandomInt(1200, 2000), beeEl)
  return beeEl;
}

const _createBees = () => {
  for(let i = 0; i < 6; i++) {
    const beeEl = _createBee();
    setInterval(_animateBee, _getRandomInt(4500, 5500), beeEl);
  }
}

const _animateBee = (beeEl, left = 0, top = 0) =>  {
  let  currentLeft;
  if (beeEl.style.left) {
    currentLeft = beeEl.style.left.substring(0, beeEl.style.left.length - 2);
  }
  
  const newLeft = left || _getRandomInt(window.innerWidth);
  const newTop = top || _getRandomInt(window.innerHeight);

  beeEl.style.left = `${newLeft}px`;
  beeEl.style.top = `${newTop}px`;

  if (currentLeft && newLeft > currentLeft) {
    beeEl.style.transform = 'scaleX(-1)';
  } else {
    beeEl.style.transform = 'scaleX(1)';
  }
}
