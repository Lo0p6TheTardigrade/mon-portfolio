// @flow
export const BehaviorAction = (params: boolean, behaviorAction: any) => {
  return { type: behaviorAction, payload: params };
};
export const SET_BASIC_ACTION = 'SET_BASIC_ACTION';
// eslint-disable-next-line
const setBasicAction = (basic: boolean) => {
  return {
    type: 'SET_BASIC_ACTION',
    payload: basic,
  };
};

export const SET_FNAME_ACTION = 'SET_FNAME_ACTION';
// eslint-disable-next-line
const setFnameAction = (fname: string) => {
  return {
    type: 'SET_FNAME_ACTION',
    payload: fname,
  };
};

export const SET_LNAME_ACTION = 'SET_LNAME_ACTION';
// eslint-disable-next-line
const setLnameAction = (lname: string) => {
  return {
    type: 'SET_LNAME_ACTION',
    payload: lname,
  };
};

export const SET_USERNAME_ACTION = 'SET_USERNAME_ACTION';
// eslint-disable-next-line
const setUsernameAction = (username: string) => {
  return {
    type: 'SET_USERNAME_ACTION',
    payload: username,
  };
};

export const SET_ID_ACTION = 'SET_ID_ACTION';
// eslint-disable-next-line
const setIdAction = (id: string) => {
  return {
    type: 'SET_ID_ACTION',
    payload: id,
  };
};

export const SET_EMAIL_ACTION = 'SET_EMAIL_ACTION';
// eslint-disable-next-line
const setEmailAction = (email: string) => {
  return {
    type: 'SET_EMAIL_ACTION',
    payload: email,
  };
};

export const SET_PASSWORD_ACTION = 'SET_PASSWORD_ACTION';
// eslint-disable-next-line
const setPasswordAction = (password: string) => {
  return {
    type: 'SET_PASSWORD_ACTION',
    payload: password,
  };
};

export const SET_INFO_ACTION = 'SET_INFO_ACTION';
// eslint-disable-next-line
const setInfoAction = (info: boolean) => {
  return {
    type: 'SET_INFO_ACTION',
    payload: info,
  };
};
export const SET_WELCOME_ACTION = 'SET_WELCOME_ACTION';
// eslint-disable-next-line
const setWelcomeAction = (welcome: boolean) => {
  return {
    type: 'SET_WELCOME_ACTION',
    payload: welcome,
  };
};

export const SET_IFRAME_ACTION = 'SET_IFRAME_ACTION';
// eslint-disable-next-line
const setIFrameAction = (iFrame: boolean) => {
  return {
    type: 'SET_IFRAME_ACTION',
    payload: iFrame,
  };
};

export const SET_FRAME_ACTION = 'SET_FRAME_ACTION';
// eslint-disable-next-line
const setFrameAction = (frame: boolean) => {
  return {
    type: 'SET_FRAME_ACTION',
    payload: frame,
  };
};

export const SET_VIEW_ACTION = 'SET_VIEW_ACTION';
// eslint-disable-next-line
const setViewAction = (view: boolean) => {
  return {
    type: 'SET_VIEW_ACTION',
    payload: view,
  };
};

export const SET_MAIN_WINDOW_ACTION = 'SET_MAIN_WINDOW_ACTION';
// eslint-disable-next-line
const setMainWindowAction = (main: boolean) => {
  return {
    type: 'SET_MAIN_WINDOW_ACTION',
    payload: main,
  };
};

export const SET_WINDOW_1_ACTION = 'SET_WINDOW_1_ACTION';
// eslint-disable-next-line
const setWindow1Action = (window1: boolean) => {
  return {
    type: 'SET_WINDOW_1_ACTION',
    payload: window1,
  };
};

export const SET_WINDOW_2_ACTION = 'SET_WINDOW_2_ACTION';
// eslint-disable-next-line
const setWindow2Action = (window2: boolean) => {
  return {
    type: 'SET_WINDOW_2_ACTION',
    payload: window2,
  };
};

export const SET_WINDOW_3_ACTION = 'SET_WINDOW_3_ACTION';
// eslint-disable-next-line
const setWindow3Action = (window3: boolean) => {
  return {
    type: 'SET_WINDOW_3_ACTION',
    payload: window3,
  };
};

export const SET_WINDOW_4_ACTION = 'SET_WINDOW_4_ACTION';
// eslint-disable-next-line
const setWindow4Action = (window4: boolean) => {
  return {
    type: 'SET_WINDOW_4_ACTION',
    payload: window4,
  };
};

export const SET_WINDOW_5_ACTION = 'SET_WINDOW_5_ACTION';
// eslint-disable-next-line
const setWindow5Action = (window5: boolean) => {
  return {
    type: 'SET_WINDOW_5_ACTION',
    payload: window5,
  };
};

export const SET_WINDOW_6_ACTION = 'SET_WINDOW_6_ACTION';
// eslint-disable-next-line
const setWindow6Action = (window6: boolean) => {
  return {
    type: 'SET_WINDOW_6_ACTION',
    payload: window6,
  };
};

export const SET_WINDOW_7_ACTION = 'SET_WINDOW_7_ACTION';
// eslint-disable-next-line
const setWindow7Action = (window7: boolean) => {
  return {
    type: 'SET_WINDOW_7_ACTION',
    payload: window7,
  };
};

export const SET_WINDOW_8_ACTION = 'SET_WINDOW_8_ACTION';
// eslint-disable-next-line
const setWindow8Action = (window8: boolean) => {
  return {
    type: 'SET_WINDOW_8_ACTION',
    payload: window8,
  };
};

export const SET_WINDOW_9_ACTION = 'SET_WINDOW_9_ACTION';
// eslint-disable-next-line
const setWindow9Action = (window9: boolean) => {
  return {
    type: 'SET_WINDOW_9_ACTION',
    payload: window9,
  };
};

const Behavior_Action_Object = {
  behavior: {
    actions: {
      set: {
        basic: SET_BASIC_ACTION,
        info: SET_INFO_ACTION,
        welcome: SET_WELCOME_ACTION,
        iFrame: SET_IFRAME_ACTION,
        frame: SET_FRAME_ACTION,
        view: SET_VIEW_ACTION,
      },
      window: {
        main: SET_MAIN_WINDOW_ACTION,
        window1: SET_WINDOW_1_ACTION,
        window2: SET_WINDOW_2_ACTION,
        window3: SET_WINDOW_3_ACTION,
        window4: SET_WINDOW_4_ACTION,
        window5: SET_WINDOW_5_ACTION,
        window6: SET_WINDOW_6_ACTION,
        window7: SET_WINDOW_7_ACTION,
        window8: SET_WINDOW_8_ACTION,
        window9: SET_WINDOW_9_ACTION,
      },
    },
    set: {
      action: {
        default: BehaviorAction,
        basic: setBasicAction,
        info: setInfoAction,
        welcome: setWelcomeAction,
        iFrame: setIFrameAction,
        frame: setFrameAction,
        view: setViewAction,
        window: {
          main: setMainWindowAction,
          window1: setWindow1Action,
          window2: setWindow2Action,
          window3: setWindow3Action,
          window4: setWindow4Action,
          window5: setWindow5Action,
          window6: setWindow6Action,
          window7: setWindow7Action,
          window8: setWindow8Action,
          window9: setWindow9Action,
        },
      },
    },
  },
  user: {
    actions: {
      fname: SET_FNAME_ACTION,
      lname: SET_LNAME_ACTION,
      username: SET_USERNAME_ACTION,
      id: SET_ID_ACTION,
      email: SET_EMAIL_ACTION,
      password: SET_PASSWORD_ACTION,
    },
    set: {
      action: {
        fname: setFnameAction,
        lname: setLnameAction,
        username: setUsernameAction,
        id: setIdAction,
        email: setEmailAction,
        password: setPasswordAction,
      },
    },
  },
};

export { Behavior_Action_Object };
