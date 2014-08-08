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

document.querySelector('#sec').addEventListener('click', () => {
  eval("");
  let xhr = new XMLHttpRequest();
  xhr.onload = function() {
    console.log(this.responseText);
  };
  xhr.open("get", "http://people.mozilla.org/~spenades/mortar_devtools/list.json");
  xhr.send();
});
