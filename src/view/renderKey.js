function renderKey(key) {
  const keyElement = document.createElement('div');
  keyElement.classList.add(key.classNames);
  keyElement.innerHTML = key.label;

  return keyElement;
}

export default renderKey;
