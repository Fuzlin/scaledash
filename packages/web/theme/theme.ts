import { createGlobalStyle } from "./styled";

import { buttons, colors } from "./constants";

export const theme: ThemeInterface = {
  buttons,
  colors,
  space: [0, 4, 8, 12, 16, 24, 32, 40],
  breakpoints: ["600px", "900px", "1200px", "1800px"],
  html: {
    background: colors.white,
    color: colors.grey900,
    fontFamily: "'Nunito Sans', sans-serif",
  },
};

export interface ThemeInterface {
  colors: typeof colors;
  buttons: { [type in ThemeColorType]: ThemeButton };

  space: number[];
  breakpoints: string[];
  html: {
    background: string;
    color: string;
    fontFamily: string;
  };
}

export interface ThemeButton {
  default: {
    background: string;
    color: string;
    [k: string]: string;
  };
  hover?: {
    background: string;
    color: string;
    [k: string]: string;
  };
  active?: {
    background: string;
    color: string;
    [k: string]: string;
  };
  disabled?: {
    background: string;
    color: string;
    [k: string]: string;
  };
}

export type ThemeColorType =
  | "white"
  | "black"
  | "grey"
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info";

export const GlobalStyle = createGlobalStyle`
html {
  background-color: ${(props) => props.theme.html.background};
  color: ${(props) => props.theme.html.color};
  font-family: ${(props) => props.theme.html.fontFamily};
  box-sizing: border-box;
  height: 100%;
  line-height: 1.5;
}

*, *:before, *:after {
  box-sizing: inherit;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body, #__next {
  height: 100%;
  margin: 0;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

/**
* Remove the gray background on active links in IE 10.
*/

a {
  background-color: transparent;
}
`;
