const _pushClassList = (el, newClass) => el.classList.add(newClass);
const _removeTransition = (el) => el.classList.add('no-transition');

setTimeout(_pushClassList, 500, document.getElementById('article'), 'visible');

const urlParams = new URLSearchParams(window.location.search);
const noAnimation = urlParams.get('noAnimation');
if (noAnimation) {
  _removeTransition(document.getElementById('photo-2'))
  _pushClassList(document.getElementById('photo-2'), 'exit-bottom')

  _removeTransition(document.getElementById('photo-3'))
  _pushClassList(document.getElementById('photo-3'), 'exit-left')

  _removeTransition(document.getElementById('photo-4'))
  _pushClassList(document.getElementById('photo-4'), 'exit-right')
} else {
  setTimeout(_pushClassList, 500, document.getElementById('photo-2'), 'exit-bottom');
  setTimeout(_pushClassList, 500, document.getElementById('photo-3'), 'exit-left');
  setTimeout(_pushClassList, 500, document.getElementById('photo-4'), 'exit-right');
}
