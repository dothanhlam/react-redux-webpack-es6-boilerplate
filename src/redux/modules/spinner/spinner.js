/* @flow */
import debug from 'debug';


export const SHOW_SPINNER = '@@spinner/SHOW_SPINNER';
export const HIDE_SPINNER = '@@spinner/HIDE_SPINNER';

export const DEFAULT_SPINNER_STATE = {
  canShow: false,
  messageId: null,
};

if (__DEBUG__) {
  debug.enable('spinner-reducer:*');
}

const log = debug('spinner-reducer:debug');

export function showSpinner(messageId) {
  return {
    type: SHOW_SPINNER,
    state: {
      canShow: true,
      messageId,
    },
  };
}

export function hideSpinner() {
  return {
    type: HIDE_SPINNER,
    state: DEFAULT_SPINNER_STATE,
  };
}

export function spinnerReducer(
  state = DEFAULT_SPINNER_STATE,
  action) {
  let newState = state;

  switch (action.type) {
    case SHOW_SPINNER:
    case HIDE_SPINNER:
      newState = Object.assign({}, state, action.state);
      break;
    default:
      newState = state;
  }

  if (newState !== state) {
    // only log if state has changed
    log('action:', action, 'state:', state, 'newState:', newState);
  }

  return newState;
}
