document.querySelector('#clog').addEventListener('click', () => {
  console.log('console.log');
});

document.querySelector('#cwarn').addEventListener('click', () => {
  console.warn('console.warn');
});

document.querySelector('#cerr').addEventListener('click', () => {
  console.error('console.error');
});

document.querySelector('#cexc').addEventListener('click', () => {
  console.exception('console.exception');
});

document.querySelector('#warn').addEventListener('click', () => {
  document.body.style.background = 'lol';
});

document.querySelector('#err').addEventListener('click', () => {
  oops();
});

document.querySelector('#refl').addEventListener('click', () => {
  // TODO
});
