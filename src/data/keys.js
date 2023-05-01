const keys = [
  {
    row: 1,
    position: 1,
    code: 'Backquote',
    keyCode: 192,
    isSymbol: true,
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
    isSymbol: true,
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
    isSymbol: true,
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
    isSymbol: true,
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
    isSymbol: true,
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
    isSymbol: true,
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
    isSymbol: true,
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
    isSymbol: true,
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
    isSymbol: true,
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
    isSymbol: true,
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
    isSymbol: true,
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
    isSymbol: true,
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
    isSymbol: true,
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
    isSymbol: false,
    value: 'Backspace',
    classNames: ['key', 'key_backspace'],
  },
  {
    row: 2,
    position: 1,
    code: 'Tab',
    keyCode: 9,
    isSymbol: false,
    value: 'Tab',
    classNames: ['key', 'key_tab'],
  },
  {
    row: 2,
    position: 2,
    code: 'KeyQ',
    keyCode: 81,
    isSymbol: true,
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
    isSymbol: true,
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
    isSymbol: true,
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
    isSymbol: true,
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
    isSymbol: true,
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
    isSymbol: true,
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
    isSymbol: true,
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
    isSymbol: true,
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
    isSymbol: true,
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
    isSymbol: true,
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
    isSymbol: true,
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
    isSymbol: true,
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
    isSymbol: true,
    value: {
      en: {
        default: '\\',
        shift: '|',
      },
      ru: {
        default: '\\',
        shift: '/',
      },
    },
    classNames: ['key'],
  },
  {
    row: 2,
    position: 15,
    code: 'Delete',
    keyCode: 46,
    isSymbol: false,
    value: 'Del',
    classNames: ['key'],
  },
  {
    row: 3,
    position: 1,
    code: 'CapsLock',
    keyCode: 20,
    isSymbol: false,
    value: 'Caps<br>Lock',
    classNames: ['key', 'key_caps-lock'],
  },
  {
    row: 3,
    position: 2,
    code: 'KeyA',
    keyCode: 65,
    isSymbol: true,
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
    isSymbol: true,
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
    isSymbol: true,
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
    isSymbol: true,
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
    isSymbol: true,
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
    isSymbol: true,
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
    isSymbol: true,
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
    isSymbol: true,
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
    isSymbol: true,
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
    isSymbol: true,
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
    isSymbol: true,
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
    isSymbol: false,
    value: 'Enter',
    classNames: ['key', 'key_enter'],
  },
  {
    row: 4,
    position: 1,
    code: 'ShiftLeft',
    keyCode: 16,
    isSymbol: false,
    value: 'Shift',
    classNames: ['key', 'key_shift-left'],
  },
  {
    row: 4,
    position: 2,
    code: 'KeyZ',
    keyCode: 90,
    isSymbol: true,
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
    isSymbol: true,
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
    isSymbol: true,
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
    isSymbol: true,
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
    isSymbol: true,
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
    isSymbol: true,
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
    isSymbol: true,
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
    isSymbol: true,
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
    isSymbol: true,
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
    isSymbol: true,
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
    code: 'ShiftRight',
    keyCode: 16,
    isSymbol: false,
    value: 'Shift',
    classNames: ['key', 'key_shift-right'],
  },
  {
    row: 4,
    position: 13,
    code: 'ArrowUp',
    keyCode: 38,
    isSymbol: false,
    value: '⬆',
    classNames: ['key'],
  },
  {
    row: 5,
    position: 1,
    code: 'ControlLeft',
    keyCode: 17,
    isSymbol: false,
    value: 'Ctrl',
    classNames: ['key', 'key_ctrl'],
  },
  {
    row: 5,
    position: 2,
    code: 'MetaLeft',
    keyCode: 91,
    isSymbol: false,
    value: 'Win',
    classNames: ['key', 'key_win'],
  },
  {
    row: 5,
    position: 3,
    code: 'AltLeft',
    keyCode: 18,
    isSymbol: false,
    value: 'Alt',
    classNames: ['key', 'key_alt'],
  },
  {
    row: 5,
    position: 4,
    code: 'Space',
    keyCode: 32,
    isSymbol: true,
    value: '',
    classNames: ['key', 'key_space'],
  },
  {
    row: 5,
    position: 5,
    code: 'AltRight',
    keyCode: 18,
    isSymbol: false,
    value: 'Alt',
    classNames: ['key', 'key_alt'],
  },
  {
    row: 5,
    position: 6,
    code: 'ControlRight',
    keyCode: 17,
    isSymbol: false,
    value: 'Ctrl',
    classNames: ['key', 'key_ctrl'],
  },
  {
    row: 5,
    position: 7,
    code: 'ArrowLeft',
    keyCode: 37,
    isSymbol: false,
    value: '⬅',
    classNames: ['key'],
  },
  {
    row: 5,
    position: 8,
    code: 'ArrowDown',
    keyCode: 40,
    isSymbol: false,
    value: '⬇',
    classNames: ['key'],
  },
  {
    row: 5,
    position: 9,
    code: 'ArrowRight',
    keyCode: 39,
    isSymbol: false,
    value: '⮕',
    classNames: ['key'],
  },
];

export default keys;
