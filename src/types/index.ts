// @flow
export interface Behavior_Custom_Interface {
  basic: boolean;
  info: boolean;
  welcome: boolean;
  iFrame: boolean;
  frame: boolean;
  window: {
    main: boolean;
    window1: boolean;
    window2: boolean;
    window3: boolean;
    window4: boolean;
    window5: boolean;
    window6: boolean;
    window7: boolean;
    window8: boolean;
    window9: boolean;
  };
}
export interface Behavior {
  set: { action: { basic: any } };
}

export interface User_Custom_Interface {
  user: {
    fname: string;
    lname: string;
    username: string;
    id: string;
    email: string;
    password: string;
  };
}

export type String_Undefined = string | undefined;
export type String_Null = string | null;
export type Any_Null = any | null;

// ROADMAP DATA
export interface Roadmap_Custom_Interface {
  name: string;
  type: string;
  description: string;
  link: string;
  image: {
    src: any;
    alt: string;
    class: string;
  };
  skill: string;
  id: number;
  class: string;
  school: string;
  year: string;
}

// LEARN DATA
export interface Learn_Custom_Interface {
  name: string;
  type: string;
  description: string;
  link: string;
  image: {
    src: any;
    alt: string;
    class: string;
  };
  skill: string;
  id: number;
  class: string;
  school: string;
  year: number;
}

// SKILLS DATA
export interface Skills_Custom_Interface {
  name: string;
  type: string;
  description: string;
  link: string;
  skill: string;
  image: {
    src: string;
    alt: string;
  };
  id: number;
  class: string;
  school: string;
  year: number;
}

// LANGAGE DATA
export interface Langage_Custom_Interface {
  name: string;
  description: string;
  image: any;
  id: number;
  alt: string;
  class: string;
  url: {};
  wiki: string;
  info: string;
}

export {};
