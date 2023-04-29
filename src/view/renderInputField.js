function renderInputField(container) {
  const inputDiv = document.createElement('div');
  inputDiv.classList.add('input-field');
  inputDiv.innerHTML = `
    <textarea id="input-field"></textarea>
  `;

  container.append(inputDiv);
}

export default renderInputField;
