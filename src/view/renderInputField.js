let inputField = document.createElement('textarea');

const TEXTAREA_DIRECTIONS = {
  LEFT: 'left',
  RIGHT: 'right',
  UP: 'up',
  DOWN: 'down',
};

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

function removeSymbol(direction) {
  const start = inputField.selectionStart;
  const end = inputField.selectionEnd;

  if (inputField.selectionStart === inputField.selectionEnd) {
    switch (direction) {
      case TEXTAREA_DIRECTIONS.LEFT:
        inputField.value =
          inputField.value.substring(0, start - 1) +
          inputField.value.substring(end, inputField.value.length);

        inputField.setSelectionRange(start - 1, start - 1);

        break;
      case TEXTAREA_DIRECTIONS.RIGHT:
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

function isCursorInFirstLine() {
  const start = inputField.selectionStart;
  const beforeStart = inputField.value.slice(0, start);
  const lastLinebreakIndex = beforeStart.lastIndexOf('\n');

  return lastLinebreakIndex < 0;
}

function isCursorInLastLine() {
  const end = inputField.selectionEnd;
  const afterEnd = inputField.value.slice(end);
  const firstLinebreakIndex = afterEnd.indexOf('\n');

  return firstLinebreakIndex < 0;
}

function getCursorPositionInLine() {
  const start = inputField.selectionStart;
  const beforeStart = inputField.value.slice(0, start);
  const lastLinebreakIndex = beforeStart.lastIndexOf('\n');
  const firstIndexInLine = lastLinebreakIndex < 0 ? 0 : lastLinebreakIndex + 1;

  return start - firstIndexInLine;
}

function moveCursorOnPreviousLine() {
  const start = inputField.selectionStart;
  const beforeStart = inputField.value.slice(0, start);
  const lastLinebreakIndex = beforeStart.lastIndexOf('\n');
  const previousLines = inputField.value.slice(0, lastLinebreakIndex);
  const previousLinebreakIndex = previousLines.lastIndexOf('\n');
  const previousLineStart =
    previousLinebreakIndex < 0 ? 0 : previousLinebreakIndex + 1;
  const previousLineLength = lastLinebreakIndex - previousLinebreakIndex - 1;
  const currentCursorPositionInLine = getCursorPositionInLine();
  const newCursorIndex =
    currentCursorPositionInLine > previousLineLength
      ? previousLineStart + previousLineLength
      : previousLineStart + getCursorPositionInLine();

  inputField.setSelectionRange(newCursorIndex, newCursorIndex);
}

function moveCursorOnNextLine() {
  const end = inputField.selectionEnd;
  const afterEnd = inputField.value.slice(end);
  const nextLineStart = end + afterEnd.indexOf('\n') + 1;
  const nextLines = inputField.value.slice(nextLineStart);
  const nextLinebreakIndex = nextLines.indexOf('\n');
  const nextLineEnd =
    nextLinebreakIndex < 0
      ? inputField.value.length
      : nextLineStart + nextLinebreakIndex;
  const nextLineLength = nextLineEnd - nextLineStart + 1;
  const currentCursorPositionInLine = getCursorPositionInLine();
  const newCursorIndex =
    currentCursorPositionInLine > nextLineLength
      ? nextLineEnd
      : nextLineStart + getCursorPositionInLine();

  inputField.setSelectionRange(newCursorIndex, newCursorIndex);
}

function moveCursor(direction) {
  const start = inputField.selectionStart;

  switch (direction) {
    case TEXTAREA_DIRECTIONS.LEFT:
      inputField.setSelectionRange(start - 1, start - 1);

      break;
    case TEXTAREA_DIRECTIONS.RIGHT:
      inputField.setSelectionRange(start + 1, start + 1);

      break;
    case TEXTAREA_DIRECTIONS.UP:
      if (isCursorInFirstLine()) {
        inputField.setSelectionRange(0, 0);
      } else {
        moveCursorOnPreviousLine();
      }

      break;
    case TEXTAREA_DIRECTIONS.DOWN:
      if (isCursorInLastLine()) {
        inputField.setSelectionRange(
          inputField.value.length,
          inputField.value.length,
        );
      } else {
        moveCursorOnNextLine();
      }

      break;

    default:
      break;
  }
}

export default renderInputField;
export {
  getInputField,
  typeSymbol,
  removeSymbol,
  moveCursor,
  TEXTAREA_DIRECTIONS,
};
