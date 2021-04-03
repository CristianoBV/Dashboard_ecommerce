/* eslint-disable import/no-extraneous-dependencies */
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

font-size: 60%;

:root {
    --color-primary: #ff9000;
    --color-secondary: #312E38;
    --color-login: #686868;
    --color-togle: #686868;
    --color-border-icon: rgba(104, 104, 104, 0.4);
    --color-text-menu: #aeb6c1;
    --color-complement3: #a9095e;
    --color-complement4: #2a5a75;
    --color-black: #000;
    --color-white: #fff;
    --color-sucess: #32917b;
    --color-gray: #f2f2f2;
    --color-gray-dark: #ebebeb;
    --color-gray-light: #e3e3e3;
    --color-border: #cccccc;
    --color-gray-complement1: #adadad;
    --color-gray-complement2: #7f7f7f;
     --divider: #343434;

// project specific variables

--color-theme-color--default: #f0542d;
--color-theme-color--default--light: darken(--color-theme-color--default, 10%);
--color-theme-color--red1: #DE2021;
--color-theme-color--red2: #D0021B;
--color-theme-color--orange1: #F6732E;
--color-theme-color--orange2: #FC844B;
--color-theme-color--orange3: #FF732F;
--color-theme-color--blue: #0C95EC;
--color-theme-color--blue-dark: rgb(6, 121, 192);
--color-theme-color--violet: #7F60D1;
--color-theme-color--black: #222;
--color-theme-color--black2: #11202D;
--color-theme-color--black3: #05103B;
--color-theme-color--black4: #313131;


// Colors ---------------

--color-white: #ffffff;
--color-black: #000000;

// Body Text
--color-body-text-color: #1d1d25;
--color-body-font-weight: 400;
--color-body-line-height: 1.66;
--color-body-font-size: 15px;

// Heading Text
--color-heading-text-color: #1d1d25;
--color-heading-font-weight: 700;



}
* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   outline: 0;
}

body {
   -webkit-font-smoothing: antialiased;

}

body, input, button {
   font-family: 'Roboto Slab', serif;
   font-size: 16px;
}

h1, h2, h3, h4, h5, h6, strong {
   font-weight: 500;
}

button {
   cursor: pointer;
}

.full-width {
  width: 100%;
}

.full-height {
  height: 100vh;
}

/* FLEX */

.flex {
  display: flex;
}

.horizontal {
  flex-direction: row;
}

.vertical {
  flex-direction: column;
}

.flex-1 {
  flex: 1;
}

.flex-2 {
  flex: 2;
}

.flex-3 {
  flex: 3;
}

.flex-start {
  justify-content: flex-start;
  align-items: center;
}

.flex-end {
  justify-content: flex-end;
  align-items: center;
}


`;
