function renderTitle(container) {
  const titleDiv = document.createElement('h1');
  titleDiv.classList.add('heading');
  titleDiv.innerHTML = 'Virtual keyboard for Windows OS';

  container.append(titleDiv);
}

export default renderTitle;
