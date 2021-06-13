import { globalStyle } from '@vanilla-extract/css';
import { themeVars } from './themes.css';

globalStyle('*', {
  boxSizing: 'border-box',
  padding: '0',
  margin: '0',
  color: 'inherit',
  '@media': {
    'screen and (prefers-reduced-motion: reduce)': {
      transition: 'none',
      animation: 'none',
    },
  },
});

globalStyle(':root', {
  fontSize: '10px',
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
  'Open Sans', 'Helvetica Neue', sans-serif`,
});

globalStyle('body', {
  padding: '0 10px',
  color: themeVars.textColor,
  backgroundColor: themeVars.bodyBgColor,
});

globalStyle('button', {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
});
