const openNavigation = function () {
  const nav = document.getElementById('main__navigation');
  nav.style.width = '250px';
  nav.style.display = 'block';

  const btn = document.getElementById('main__navigation_close');
  btn.style.display = 'block';
}

const closeNavigation = function() {
  const nav = document.getElementById('main__navigation');
  nav.style.width = '0';
  nav.style.display = 'none';

  const btn = document.getElementById('main__navigation_open');
  btn.style.display = 'block';
}

const btnOpen = document.getElementById('main__navigation_open');
btnOpen.addEventListener('click', openNavigation);

const btnClose = document.getElementById('main__navigation_close');
btnClose.addEventListener('click', closeNavigation);