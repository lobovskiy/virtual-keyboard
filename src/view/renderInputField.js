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

const REMOVE_DIRECTIONS = {
  LEFT: 'left',
  RIGHT: 'right',
};

function removeSymbol(direction) {
  if (inputField.selectionStart) {
    const start = inputField.selectionStart;
    const end = inputField.selectionEnd;

    if (inputField.selectionStart === inputField.selectionEnd) {
      switch (direction) {
        case REMOVE_DIRECTIONS.LEFT:
          inputField.value =
            inputField.value.substring(0, start - 1) +
            inputField.value.substring(end, inputField.value.length);

          inputField.setSelectionRange(start - 1, start - 1);

          break;
        case REMOVE_DIRECTIONS.RIGHT:
          inputField.value =
            inputField.value.substring(0, start) +
            inputField.value.substring(end + 1, inputField.value.length);

          inputField.setSelectionRange(start, start);

          break;

        default:
          break;
      }
    } else {
      inputField.value =
        inputField.value.substring(0, start) +
        inputField.value.substring(end, inputField.value.length);

      inputField.setSelectionRange(start, start);
    }
  }
}

export default renderInputField;
export { getInputField, typeSymbol, removeSymbol, REMOVE_DIRECTIONS };
