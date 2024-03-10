// @flow
import { SET_BASIC_ACTION, SET_FNAME_ACTION, SET_FRAME_ACTION, SET_IFRAME_ACTION, SET_INFO_ACTION, SET_WINDOW_1_ACTION, SET_WINDOW_2_ACTION, SET_WINDOW_3_ACTION, SET_WINDOW_4_ACTION, SET_WINDOW_5_ACTION, SET_WINDOW_6_ACTION, SET_WINDOW_7_ACTION, SET_WINDOW_8_ACTION, SET_WINDOW_9_ACTION, SET_WELCOME_ACTION, SET_MAIN_WINDOW_ACTION, SET_VIEW_ACTION } from '../actions/behavior.action';
import { Behavior_Custom_Interface, User_Custom_Interface } from '../types';

const behaviorState: Behavior_Custom_Interface = {
  // Basic
  basic: false,
  info: false,
  welcome: true,
  iFrame: false,
  frame: false,
  view: false,
  window: {
    main: false,
    window1: false,
    window2: true,
    window3: false,
    window4: false,
    window5: false,
    window6: false,
    window7: false,
    window8: false,
    window9: false,
  },
};
const userState: User_Custom_Interface = {
  // Basic
  user: {
    fname: '',
    lname: '',
    username: '',
    id: '',
    email: '',
    password: '',
  },
};

const behaviorReducer = (state = behaviorState, action: any) => {
  switch (action.type) {
    case SET_BASIC_ACTION:
      return { ...state, basic: action.payload };

    case SET_INFO_ACTION:
      return { ...state, info: action.payload };

    case SET_WELCOME_ACTION:
      return { ...state, welcome: action.payload };

    case SET_IFRAME_ACTION:
      return { ...state, iFrame: action.payload };

    case SET_FRAME_ACTION:
      return { ...state, frame: action.payload };

    case SET_VIEW_ACTION:
      return { ...state, view: action.payload };

    case SET_MAIN_WINDOW_ACTION:
      return { ...state, window: { ...state.window, main: action.payload } };

    case SET_WINDOW_1_ACTION:
      return { ...state, window: { ...state.window, window1: action.payload } };

    case SET_WINDOW_2_ACTION:
      return { ...state, window: { ...state.window, window2: action.payload } };

    case SET_WINDOW_3_ACTION:
      return { ...state, window: { ...state.window, window3: action.payload } };

    case SET_WINDOW_4_ACTION:
      return { ...state, window: { ...state.window, window4: action.payload } };

    case SET_WINDOW_5_ACTION:
      return { ...state, window: { ...state.window, window5: action.payload } };

    case SET_WINDOW_6_ACTION:
      return { ...state, window: { ...state.window, window6: action.payload } };

    case SET_WINDOW_7_ACTION:
      return { ...state, window: { ...state.window, window7: action.payload } };

    case SET_WINDOW_8_ACTION:
      return { ...state, window: { ...state.window, window8: action.payload } };

    case SET_WINDOW_9_ACTION:
      return { ...state, window: { ...state.window, window9: action.payload } };

    default:
      return state;
  }
};
const userReducer = (state = userState, action: any) => {
  switch (action.type) {
    case SET_FNAME_ACTION:
      return { ...state, user: { ...state.user, fname: action.payload } };

    default:
      return state;
  }
};

const reducer = {
  behavior: behaviorReducer,
  user: userReducer,
};
export { reducer };
