import { combineReducers } from 'redux';
import { routeReducer as routing } from 'react-router-redux';
import { documentTitleReducer as documentTitle } from './modules/document-title/document-title';
import { spinnerReducer as spinner } from './modules/spinner/spinner';
import { languageReducer as language } from './modules/language/language';
import { reducer as form } from 'redux-form';

export default combineReducers({
  spinner,
  language,
  routing,
  documentTitle,
  form,
});
