/* @flow */
export const CHANGE_LANGUAGE = '@@language/CHANGE_LANGUAGE';
export const LOCAL_STORAGE_KEY = 'redux:language';
export const DEFAULT_LANGUAGE = 'en';


function getLanguage() {
  const language = localStorage.getItem(LOCAL_STORAGE_KEY);

  return language || DEFAULT_LANGUAGE;
}

export function changeLanguage(language) {
  localStorage.setItem(LOCAL_STORAGE_KEY, language);

  return {
    type: CHANGE_LANGUAGE,
    language,
  };
}

export function languageReducer(state = getLanguage(), action) {
  return (action.type === CHANGE_LANGUAGE) ? action.language : state;
}
