// @flow
import { ReactElement, ReactNode } from 'react';

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

export type Props = {
  children?: ReactNode;
  state?: boolean;
  tag?: any;
  id?: string | number;
  classX?: string;
  src?: ReactElement<any, any>;
  href?: string;
  to?: string;
  alt?: string;
  icon?: any;
  height?: string | number;
  width?: string | number;
  title?: string;
  name?: string;
  content?: any;
  onClick?: () => void;
  onChange?: () => void;
  onToggle?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  value?: string | number;
  target?: string;
  disabled?: boolean;
};

export type Property_Tab_Object = {
  tab: {
    name: {
      name1?: String_Null;
      class1?: String_Null;
      name2?: String_Null;
      class2?: String_Null;
      name3?: String_Null;
      class3?: String_Null;
    };
    function: {
      onclicked1?: Any_Null;
      onclicked2?: Any_Null;
    };
    href: {
      link1?: String_Undefined;
      class1?: String_Null;
    };
    image: {
      file: {
        image1?: any;
      };
      class: {
        class1?: string;
      };
    };
    content: {
      value: {
        content1?: string;
        content2?: string;
        content3?: String_Null;
      };
      class: {
        class1?: string;
        class2?: string;
      };
    };
  };
  state: {
    basic: boolean;
  };
};

export {};
