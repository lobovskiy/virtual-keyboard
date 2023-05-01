let inputField = document.createElement('textarea');

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

  inputField = textarea;
  inputDiv.append(textarea);
  container.append(inputDiv);
}

function getInputField() {
  return inputField;
}

function typeSymbol(symbol) {
  const start = inputField.selectionStart;
  const end = inputField.selectionEnd;
  const text = inputField.value;
  const before = text.substring(0, start);
  const after = text.substring(end, text.length);
  inputField.value = before + symbol + after;
  inputField.selectionStart = start + symbol.length;
  inputField.selectionEnd = start + symbol.length;
}

export default renderInputField;
export { getInputField, typeSymbol };
