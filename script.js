const CHARACTERS = ['｢', '｣', '､', '･', 'ｦ', 'ｧ', 'ｨ', 'ｩ', 'ｪ', 'ｫ', 'ｬ', 'ｭ', 'ｮ', 'ｯ', 'ｰ', 'ｱ', 'ｲ', 'ｳ', 'ｴ', 'ｵ', 'ｶ', 'ｷ', 'ｸ', 'ｹ', 'ｺ', 'ｻ', 'ｼ', 'ｽ', 'ｾ', 'ｿ', 'ﾀ', 'ﾁ', 'ﾂ', 'ﾃ', 'ﾄ', 'ﾅ', 'ﾆ', 'ﾇ', 'ﾈ', 'ﾉ', 'ﾊ', 'ﾋ', 'ﾌ', 'ﾍ', 'ﾎ', 'ﾏ', 'ﾐ', 'ﾑ', 'ﾒ', 'ﾓ', 'ﾔ', 'ﾕ', 'ﾖ', 'ﾗ', 'ﾘ', 'ﾙ', 'ﾚ', 'ﾛ', 'ﾜ', 'ﾝ', 'ﾞ', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'A', 'B', 'C', 'D', 'E', 'V', 'Z', 'H', 'Θ', 'I', 'K', 'L', 'M', 'N', 'Ξ', 'O', 'P', 'Ś', 'Q', 'R', 'S', 'T', 'Y', 'X', 'Φ', 'Ψ', 'F'];

/*
 * Generates the code loader.
 */
const _executeCode = () => {
  const workerCode = new Worker('code.js')
  workerCode.onmessage = (event) => {
    if (event.data === 'generate') {
      _generateCode();
    } else {
      _cancelCode();
    }
  }

  const workerBee = new Worker('bees.js')
  workerBee.onmessage = () => {
    _createBees();
    _createBee('bee1');
    document.addEventListener('mousemove', (event) => {
      _animateBee(document.getElementById('bee1'), event.clientX + 30, event.clientY);
    });
  }
}

_executeCode();

const _createBee = (id) => {
  const beeEl = document.createElement('div');
  beeEl.innerHTML = '🐝';
  beeEl.classList = ['main__bee']
  beeEl.setAttribute('aria-hidden', true);

  if (_getRandomInt(window.innerWidth) < window.innerWidth / 3) {
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

  _animateBee(beeEl);
  return beeEl;
}

const _createBees = () => {
  for(let i = 0; i < 10; i++) {
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

/*
 * Starts the code loader.
 */
const _generateCode = () => {
  const loader = document.getElementById('matrix-loader');
  loader.appendChild(_generateCodeLine());
}

/*
 * Closes the code loader.
 */
const _cancelCode = () => {
  const loader = document.getElementById('matrix-loader');
  loader.style.height = '5px';
}

/*
 * Generates a single vertical line of code.
 */
const _generateCodeLine = () => {
  let codeLine = document.createElement('div');

  codeLine.classList = ['matrix-loader__code-line'];

  for (let i = 0; i < 25; i++) {
    const codeCharacter = document.createElement('span');
    codeCharacter.classList = ['matrix-loader__code-character'];
    _setCodeCharacter(codeCharacter);

    if (i%5) {
      setInterval(_setCodeCharacter, 300, codeCharacter);
    }
    codeLine.appendChild(codeCharacter);
  }

  codeLine.style.left = `${_getRandomInt(document.body.clientWidth)}px`;
  codeLine.style.top = `-${_getRandomInt(120, 40)}em`;
  return codeLine;
}

/*
 * Generates a character within the line of code.
 */
const _setCodeCharacter = (el) => {
  el.innerText = CHARACTERS[_getRandomInt(CHARACTERS.length)];
}

/*
 * Generates a random integer given a maximum value.
 */
const _getRandomInt = (max = 0, min = 0) => {
  return Math.floor(Math.random() * (max - min) + min);
}