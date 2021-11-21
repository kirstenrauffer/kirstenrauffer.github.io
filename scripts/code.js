const _startGenerateCode = () => {
  const interval = setInterval(_generateCode, 30);
  setTimeout(_cancelGenerateCode, 2000, interval);
}
const _cancelGenerateCode = (interval) => {
  clearInterval(interval);
  self.postMessage('cancel');
}

const _generateCode = () => {
  self.postMessage('generate');
}

_generateCode();
setTimeout(_generateCode, 200);
setTimeout(_generateCode, 300);
setTimeout(_generateCode, 400);
setTimeout(_startGenerateCode, 1200);
