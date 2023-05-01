const LANGUAGES = {
  EN: 'en',
  RU: 'ru',
};
const LOCAL_STORAGE_LANG_PROP = 'lang';

let language = LANGUAGES.EN;

const langDiv = document.createElement('div');
langDiv.classList.add('lang');

function getLangDiv() {
  return langDiv;
}

function updateLangDiv() {
  langDiv.innerHTML = language;
}

function getLanguage() {
  return language;
}

function saveLanguage() {
  window.localStorage.setItem(LOCAL_STORAGE_LANG_PROP, language);
}

function setLanguage(lang) {
  language = lang;

  saveLanguage();
  updateLangDiv();
}

function toggleLanguage() {
  if (language === LANGUAGES.EN) {
    setLanguage(LANGUAGES.RU);
  } else {
    setLanguage(LANGUAGES.EN);
  }
}

function initLanguage() {
  const storedLang = window.localStorage.getItem(LOCAL_STORAGE_LANG_PROP);

  if (storedLang) {
    setLanguage(storedLang);
  } else {
    saveLanguage();
    updateLangDiv();
  }
}

export {
  LANGUAGES,
  initLanguage,
  getLanguage,
  setLanguage,
  toggleLanguage,
  getLangDiv,
};
