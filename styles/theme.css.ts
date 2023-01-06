import { createTheme, globalStyle } from '@vanilla-extract/css';

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
});

export const [igusTheme, vars] = createTheme({
  color: {
    white: '#fff',
    black: '#000',
    brandOrange: '#f07d00',
    brandOrangeHover: '#d26e00',
    brandGrey: '#363636',
    brandLightGrey: '#626262'
  },
  font: {
    roboto:'"Roboto", Arial, sans-serif'
  }
});

