function renderKey(key) {
  const keyElement = document.createElement('div');
  key.classNames.forEach((className) => {
    keyElement.classList.add(className);
  });
  keyElement.innerHTML = key.label;

  return keyElement;
}

export default renderKey;
