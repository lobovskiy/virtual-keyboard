function renderSubtitle(container) {
  const subtitleDiv = document.createElement('h3');
  subtitleDiv.classList.add('heading');
  subtitleDiv.innerHTML = `
    Available languages:<br>
    EN, RU<br>
    <br>
    Change language:<br>
    Alt + Shift
  `;

  container.append(subtitleDiv);
}

export default renderSubtitle;
