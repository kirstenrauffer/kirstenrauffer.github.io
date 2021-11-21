const _startGenerateCode = () => {
  const interval1 = setInterval(_generateCode, 40);
  const interval2 = setInterval(_generateCode, 60);
  setTimeout(_cancelGenerateCode, 1000, interval1);
  setTimeout(_cancelGenerateCode, 2000, interval2);
}
const _cancelGenerateCode = (interval) => {
  clearInterval(interval);
  self.postMessage('cancel');
}

const _generateCode = () => {
  self.postMessage('generate');
}

_generateCode();
setTimeout(_generateCode, 300);
setTimeout(_generateCode, 500);
setTimeout(_generateCode, 500);
setTimeout(_generateCode, 700);
setTimeout(_generateCode, 700);
setTimeout(_generateCode, 700);
setTimeout(_generateCode, 1000);
setTimeout(_generateCode, 1000);
setTimeout(_generateCode, 1000);
setTimeout(_generateCode, 1000);
setTimeout(_generateCode, 1000);
setTimeout(_startGenerateCode, 900);
