/* @flow */
import config from 'app-config';

const UPDATE_DOCUMENT_TITLE = '@@document-title/UPDATE';
const RESET_DOCUMENT_TITLE = '@@document-title/RESET';


const initialState = {
  id: 'site.name',
  defaultMessage: config.name,
};

// Action Creators

export function updateDocumentTitle(documentTitle) {
  return {
    type: UPDATE_DOCUMENT_TITLE,
    documentTitle,
  };
}

export function resetDocumentTitle() {
  return {
    type: RESET_DOCUMENT_TITLE,
    documentTitle: initialState,
  };
}

// Reducer
export function documentTitleReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_DOCUMENT_TITLE:
    case UPDATE_DOCUMENT_TITLE:
      return action.documentTitle;
    default:
      return state;
  }
}
