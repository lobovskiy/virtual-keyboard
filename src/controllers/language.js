const LANGUAGES = {
  EN: 'en',
  RU: 'ru',
};
const LOCAL_STORAGE_LANG_PROP = 'lang';

let language = LANGUAGES.EN;

function getLanguage() {
  return language;
}

function saveLanguage() {
  window.localStorage.setItem(LOCAL_STORAGE_LANG_PROP, language);
}

function setLanguage(lang) {
  language = lang;
  saveLanguage();
}

function initLanguage() {
  const storedLang = window.localStorage.getItem(LOCAL_STORAGE_LANG_PROP);

  if (storedLang) {
    setLanguage(storedLang);
  } else {
    saveLanguage();
  }
}

export { LANGUAGES, initLanguage, getLanguage, setLanguage };
