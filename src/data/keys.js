const keys = [
  {
    row: 1,
    position: 1,
    code: 'Backquote',
    keyCode: 192,
    value: {
      en: {
        default: '`',
        shift: '~',
      },
      ru: {
        default: 'ё',
        shift: 'Ё',
      },
    },
    classNames: ['key'],
  },
  {
    row: 1,
    position: 2,
    code: 'Digit1',
    keyCode: 49,
    value: {
      default: '1',
      shift: '!',
    },
    classNames: ['key'],
  },
  {
    row: 1,
    position: 3,
    code: 'Digit2',
    keyCode: 50,
    value: {
      en: {
        default: '2',
        shift: '@',
      },
      ru: {
        default: '2',
        shift: '"',
      },
    },
    classNames: ['key'],
  },
  {
    row: 1,
    position: 4,
    code: 'Digit3',
    keyCode: 51,
    value: {
      en: {
        default: '3',
        shift: '#',
      },
      ru: {
        default: '3',
        shift: '№',
      },
    },
    classNames: ['key'],
  },
  {
    row: 1,
    position: 5,
    code: 'Digit4',
    keyCode: 52,
    value: {
      en: {
        default: '4',
        shift: '$',
      },
      ru: {
        default: '4',
        shift: ';',
      },
    },
    classNames: ['key'],
  },
  {
    row: 1,
    position: 6,
    code: 'Digit5',
    keyCode: 53,
    value: {
      default: '5',
      shift: '%',
    },
    classNames: ['key'],
  },
  {
    row: 1,
    position: 7,
    code: 'Digit6',
    keyCode: 54,
    value: {
      en: {
        default: '6',
        shift: '^',
      },
      ru: {
        default: '6',
        shift: ':',
      },
    },
    classNames: ['key'],
  },
  {
    row: 1,
    position: 8,
    code: 'Digit7',
    keyCode: 55,
    value: {
      en: {
        default: '7',
        shift: '&',
      },
      ru: {
        default: '7',
        shift: '?',
      },
    },
    classNames: ['key'],
  },
  {
    row: 1,
    position: 9,
    code: 'Digit8',
    keyCode: 56,
    value: {
      default: '8',
      shift: '*',
    },
    classNames: ['key'],
  },
  {
    row: 1,
    position: 10,
    code: 'Digit9',
    keyCode: 57,
    value: {
      default: '9',
      shift: '(',
    },
    classNames: ['key'],
  },
  {
    row: 1,
    position: 11,
    code: 'Digit0',
    keyCode: 48,
    value: {
      default: '0',
      shift: ')',
    },
    classNames: ['key'],
  },
  {
    row: 1,
    position: 12,
    code: 'Minus',
    keyCode: 189,
    value: {
      default: '-',
      shift: '_',
    },
    classNames: ['key'],
  },
  {
    row: 1,
    position: 13,
    code: 'Equal',
    keyCode: 187,
    value: {
      default: '=',
      shift: '+',
    },
    classNames: ['key'],
  },
  {
    row: 1,
    position: 14,
    code: 'Backspace',
    keyCode: 8,
    value: 'Backspace',
    classNames: ['key'],
  },
  {
    row: 2,
    position: 1,
    code: 'Tab',
    keyCode: 9,
    value: 'Tab',
    classNames: ['key'],
  },
  {
    row: 2,
    position: 2,
    code: 'KeyQ',
    keyCode: 81,
    value: {
      en: {
        default: 'q',
        shift: 'Q',
      },
      ru: {
        default: 'й',
        shift: 'Й',
      },
    },
    classNames: ['key'],
  },
  {
    row: 2,
    position: 3,
    code: 'KeyW',
    keyCode: 87,
    value: {
      en: {
        default: 'w',
        shift: 'W',
      },
      ru: {
        default: 'ц',
        shift: 'Ц',
      },
    },
    classNames: ['key'],
  },
  {
    row: 2,
    position: 4,
    code: 'KeyE',
    keyCode: 69,
    value: {
      en: {
        default: 'e',
        shift: 'E',
      },
      ru: {
        default: 'у',
        shift: 'У',
      },
    },
    classNames: ['key'],
  },
  {
    row: 2,
    position: 5,
    code: 'KeyR',
    keyCode: 82,
    value: {
      en: {
        default: 'r',
        shift: 'R',
      },
      ru: {
        default: 'к',
        shift: 'К',
      },
    },
    classNames: ['key'],
  },
  {
    row: 2,
    position: 6,
    code: 'KeyT',
    keyCode: 84,
    value: {
      en: {
        default: 't',
        shift: 'T',
      },
      ru: {
        default: 'е',
        shift: 'Е',
      },
    },
    classNames: ['key'],
  },
  {
    row: 2,
    position: 7,
    code: 'KeyY',
    keyCode: 89,
    value: {
      en: {
        default: 'y',
        shift: 'Y',
      },
      ru: {
        default: 'н',
        shift: 'Н',
      },
    },
    classNames: ['key'],
  },
  {
    row: 2,
    position: 8,
    code: 'KeyU',
    keyCode: 85,
    value: {
      en: {
        default: 'u',
        shift: 'U',
      },
      ru: {
        default: 'г',
        shift: 'Г',
      },
    },
    classNames: ['key'],
  },
  {
    row: 2,
    position: 9,
    code: 'KeyI',
    keyCode: 73,
    value: {
      en: {
        default: 'i',
        shift: 'I',
      },
      ru: {
        default: 'ш',
        shift: 'Ш',
      },
    },
    classNames: ['key'],
  },
  {
    row: 2,
    position: 10,
    code: 'KeyO',
    keyCode: 79,
    value: {
      en: {
        default: 'o',
        shift: 'O',
      },
      ru: {
        default: 'щ',
        shift: 'Щ',
      },
    },
    classNames: ['key'],
  },
  {
    row: 2,
    position: 11,
    code: 'KeyP',
    keyCode: 80,
    value: {
      en: {
        default: 'p',
        shift: 'P',
      },
      ru: {
        default: 'з',
        shift: 'З',
      },
    },
    classNames: ['key'],
  },
  {
    row: 2,
    position: 12,
    code: 'BracketLeft',
    keyCode: 219,
    value: {
      en: {
        default: '[',
        shift: '{',
      },
      ru: {
        default: 'х',
        shift: 'Х',
      },
    },
    classNames: ['key'],
  },
  {
    row: 2,
    position: 13,
    code: 'BracketRight',
    keyCode: 221,
    value: {
      en: {
        default: ']',
        shift: '}',
      },
      ru: {
        default: 'ъ',
        shift: 'Ъ',
      },
    },
    classNames: ['key'],
  },
  {
    row: 2,
    position: 14,
    code: 'Backslash',
    keyCode: 220,
    value: {
      en: {
        default: ']',
        shift: '}',
      },
      ru: {
        default: 'ъ',
        shift: 'Ъ',
      },
    },
    classNames: ['key'],
  },
  {
    row: 3,
    position: 1,
    code: 'CapsLock',
    keyCode: 20,
    value: 'Caps Lock',
    classNames: ['key'],
  },
  {
    row: 3,
    position: 2,
    code: 'KeyA',
    keyCode: 65,
    value: {
      en: {
        default: 'a',
        shift: 'A',
      },
      ru: {
        default: 'ф',
        shift: 'Ф',
      },
    },
    classNames: ['key'],
  },
  {
    row: 3,
    position: 3,
    code: 'KeyS',
    keyCode: 83,
    value: {
      en: {
        default: 's',
        shift: 'S',
      },
      ru: {
        default: 'ы',
        shift: 'Ы',
      },
    },
    classNames: ['key'],
  },
  {
    row: 3,
    position: 4,
    code: 'KeyD',
    keyCode: 68,
    value: {
      en: {
        default: 'd',
        shift: 'D',
      },
      ru: {
        default: 'в',
        shift: 'В',
      },
    },
    classNames: ['key'],
  },
  {
    row: 3,
    position: 5,
    code: 'KeyF',
    keyCode: 70,
    value: {
      en: {
        default: 'f',
        shift: 'F',
      },
      ru: {
        default: 'а',
        shift: 'А',
      },
    },
    classNames: ['key'],
  },
  {
    row: 3,
    position: 6,
    code: 'KeyG',
    keyCode: 71,
    value: {
      en: {
        default: 'g',
        shift: 'G',
      },
      ru: {
        default: 'п',
        shift: 'П',
      },
    },
    classNames: ['key'],
  },
  {
    row: 3,
    position: 7,
    code: 'KeyH',
    keyCode: 72,
    value: {
      en: {
        default: 'h',
        shift: 'H',
      },
      ru: {
        default: 'р',
        shift: 'Р',
      },
    },
    classNames: ['key'],
  },
  {
    row: 3,
    position: 8,
    code: 'KeyJ',
    keyCode: 74,
    value: {
      en: {
        default: 'j',
        shift: 'J',
      },
      ru: {
        default: 'о',
        shift: 'О',
      },
    },
    classNames: ['key'],
  },
  {
    row: 3,
    position: 9,
    code: 'KeyK',
    keyCode: 75,
    value: {
      en: {
        default: 'k',
        shift: 'K',
      },
      ru: {
        default: 'л',
        shift: 'Л',
      },
    },
    classNames: ['key'],
  },
  {
    row: 3,
    position: 10,
    code: 'KeyL',
    keyCode: 76,
    value: {
      en: {
        default: 'l',
        shift: 'L',
      },
      ru: {
        default: 'д',
        shift: 'Д',
      },
    },
    classNames: ['key'],
  },
  {
    row: 3,
    position: 11,
    code: 'Semicolon',
    keyCode: 186,
    value: {
      en: {
        default: ';',
        shift: ':',
      },
      ru: {
        default: 'ж',
        shift: 'Ж',
      },
    },
    classNames: ['key'],
  },
  {
    row: 3,
    position: 12,
    code: 'Quote',
    keyCode: 222,
    value: {
      en: {
        default: "'",
        shift: '"',
      },
      ru: {
        default: 'э',
        shift: 'Э',
      },
    },
    classNames: ['key'],
  },
  {
    row: 3,
    position: 13,
    code: 'Enter',
    keyCode: 13,
    value: 'Enter',
    classNames: ['key'],
  },
  {
    row: 4,
    position: 1,
    code: 'ShiftLeft',
    keyCode: 16,
    value: 'Shift',
    classNames: ['key'],
  },
  {
    row: 4,
    position: 2,
    code: 'KeyZ',
    keyCode: 90,
    value: {
      en: {
        default: 'z',
        shift: 'Z',
      },
      ru: {
        default: 'я',
        shift: 'Я',
      },
    },
    classNames: ['key'],
  },
  {
    row: 4,
    position: 3,
    code: 'KeyX',
    keyCode: 88,
    value: {
      en: {
        default: 'x',
        shift: 'X',
      },
      ru: {
        default: 'ч',
        shift: 'Ч',
      },
    },
    classNames: ['key'],
  },
  {
    row: 4,
    position: 4,
    code: 'KeyC',
    keyCode: 67,
    value: {
      en: {
        default: 'c',
        shift: 'C',
      },
      ru: {
        default: 'с',
        shift: 'С',
      },
    },
    classNames: ['key'],
  },
  {
    row: 4,
    position: 5,
    code: 'KeyV',
    keyCode: 86,
    value: {
      en: {
        default: 'v',
        shift: 'V',
      },
      ru: {
        default: 'м',
        shift: 'М',
      },
    },
    classNames: ['key'],
  },
  {
    row: 4,
    position: 6,
    code: 'KeyB',
    keyCode: 66,
    value: {
      en: {
        default: 'b',
        shift: 'B',
      },
      ru: {
        default: 'и',
        shift: 'И',
      },
    },
    classNames: ['key'],
  },
  {
    row: 4,
    position: 7,
    code: 'KeyN',
    keyCode: 78,
    value: {
      en: {
        default: 'n',
        shift: 'N',
      },
      ru: {
        default: 'т',
        shift: 'Т',
      },
    },
    classNames: ['key'],
  },
  {
    row: 4,
    position: 8,
    code: 'KeyM',
    keyCode: 77,
    value: {
      en: {
        default: 'm',
        shift: 'M',
      },
      ru: {
        default: 'ь',
        shift: 'Ь',
      },
    },
    classNames: ['key'],
  },
  {
    row: 4,
    position: 9,
    code: 'Comma',
    keyCode: 188,
    value: {
      en: {
        default: ',',
        shift: '<',
      },
      ru: {
        default: 'б',
        shift: 'Б',
      },
    },
    classNames: ['key'],
  },
  {
    row: 4,
    position: 10,
    code: 'Period',
    keyCode: 190,
    value: {
      en: {
        default: '.',
        shift: '>',
      },
      ru: {
        default: 'ю',
        shift: 'Ю',
      },
    },
    classNames: ['key'],
  },
  {
    row: 4,
    position: 11,
    code: 'Slash',
    keyCode: 191,
    value: {
      en: {
        default: '/',
        shift: '?',
      },
      ru: {
        default: '.',
        shift: ',',
      },
    },
    classNames: ['key'],
  },
  {
    row: 4,
    position: 12,
    code: 'ArrowUp',
    keyCode: 38,
    value: '⬆',
    classNames: ['key'],
  },
  {
    row: 4,
    position: 13,
    code: 'ShiftRight',
    keyCode: 16,
    value: 'Shift',
    classNames: ['key'],
  },
  {
    row: 5,
    position: 1,
    code: 'ControlLeft',
    keyCode: 17,
    value: 'Ctrl',
    classNames: ['key'],
  },
  {
    row: 5,
    position: 2,
    code: 'MetaLeft',
    keyCode: 91,
    value: 'Win',
    classNames: ['key'],
  },
  {
    row: 5,
    position: 3,
    code: 'AltLeft',
    keyCode: 18,
    value: 'Alt',
    classNames: ['key'],
  },
  {
    row: 5,
    position: 4,
    code: 'Space',
    keyCode: 32,
    value: '',
    classNames: ['key'],
  },
  {
    row: 5,
    position: 5,
    code: 'AltRight',
    keyCode: 18,
    value: 'Alt',
    classNames: ['key'],
  },
  {
    row: 5,
    position: 6,
    code: 'ControlRight',
    keyCode: 17,
    value: 'Ctrl',
    classNames: ['key'],
  },
  {
    row: 5,
    position: 7,
    code: 'ArrowLeft',
    keyCode: 37,
    value: '⬅',
    classNames: ['key'],
  },
  {
    row: 5,
    position: 8,
    code: 'ArrowDown',
    keyCode: 40,
    value: '⬇',
    classNames: ['key'],
  },
  {
    row: 5,
    position: 9,
    code: 'ArrowRight',
    keyCode: 39,
    value: '⮕',
    classNames: ['key'],
  },
];

export default keys;
