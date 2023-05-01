function renderInputField(container) {
  const inputDiv = document.createElement('div');
  inputDiv.classList.add('input-field');

  const textarea = document.createElement('textarea');
  textarea.id = 'input-field';
  textarea.setAttribute('autofocus', '');

  function preventFocusLoss() {
    const t = this;

    function setFocus() {
      t.focus();
    }
    setFocus();

    // Some browsers won't set focus it until after the blur has completed
    setTimeout(setFocus, 100);
  }

  textarea.addEventListener('blur', preventFocusLoss);

  inputDiv.append(textarea);
  container.append(inputDiv);
}

export default renderInputField;
