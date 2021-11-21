const CHARACTERS = ['｢', '｣', '､', '･', 'ｦ', 'ｧ', 'ｨ', 'ｩ', 'ｪ', 'ｫ', 'ｬ', 'ｭ', 'ｮ', 'ｯ', 'ｰ', 'ｱ', 'ｲ', 'ｳ', 'ｴ', 'ｵ', 'ｶ', 'ｷ', 'ｸ', 'ｹ', 'ｺ', 'ｻ', 'ｼ', 'ｽ', 'ｾ', 'ｿ', 'ﾀ', 'ﾁ', 'ﾂ', 'ﾃ', 'ﾄ', 'ﾅ', 'ﾆ', 'ﾇ', 'ﾈ', 'ﾉ', 'ﾊ', 'ﾋ', 'ﾌ', 'ﾍ', 'ﾎ', 'ﾏ', 'ﾐ', 'ﾑ', 'ﾒ', 'ﾓ', 'ﾔ', 'ﾕ', 'ﾖ', 'ﾗ', 'ﾘ', 'ﾙ', 'ﾚ', 'ﾛ', 'ﾜ', 'ﾝ', 'ﾞ', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'A', 'B', 'C', 'D', 'E', 'V', 'Z', 'H', 'Θ', 'I', 'K', 'L', 'M', 'N', 'Ξ', 'O', 'P', 'Ś', 'Q', 'R', 'S', 'T', 'Y', 'X', 'Φ', 'Ψ', 'F'];

/*
 * Generates the code loader.
 */
const _executeCode = () => {
  const workerCode = new Worker('scripts/code.js')
  workerCode.onmessage = (event) => {
    if (event.data === 'generate') {
      _generateCode();
    } else {
      _cancelCode();
    }
  }
}

_executeCode();

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


  let width = document.body.clientWidth;
  if (document.body.clientWidth < 700) {
    width += 1000;
  }

  codeLine.style.left = `${_getRandomInt(width)}px`;
  codeLine.style.top = `-${_getRandomInt(120, 40)}em`;
  return codeLine;
}

/*
 * Generates a character within the line of code.
 */
const _setCodeCharacter = (el) => {
  el.innerText = CHARACTERS[_getRandomInt(CHARACTERS.length)];
}
