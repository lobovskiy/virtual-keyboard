function renderKey(key) {
  const keyElement = document.createElement('div');
  key.classNames.forEach((className) => {
    keyElement.classList.add(className);
  });
  if (key.isSymbol) {
    keyElement.classList.add('key_symbol');
  }
  keyElement.innerHTML = key.label;

  keyElement.addEventListener('mousedown', (e) => {
    e.preventDefault();
    e.stopPropagation();
  });
  keyElement.addEventListener('mouseup', (e) => {
    e.preventDefault();
    e.stopPropagation();
  });

  return keyElement;
}

export default renderKey;
