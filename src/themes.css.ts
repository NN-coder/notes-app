import { createTheme } from '@vanilla-extract/css';

export type TThemeName = 'dark' | 'light';

export const [darkThemeClass, themeVars] = createTheme({
  bodyBgColor: '#202125',
  textColor: '#fdfeff',
  controls: '#9aa0a6',
  notePreviewBorderColor: '#606165',
  searchInput: {
    bg: '#2e2f33',
    shadow: '0 1px 2px 0 rgba(0, 0, 0, 0.6), 0 2px 6px 2px rgba(0, 0, 0, 0.302)',
  },
});

export const lightThemeClass = createTheme(themeVars, {
  bodyBgColor: '#fff',
  textColor: '#5f5f5f',
  controls: '#5f6368',
  notePreviewBorderColor: '#dfdfdf',
  searchInput: {
    bg: '#fff',
    shadow: '0 1px 2px 0 rgba(60, 64, 67, 0.302), 0 2px 6px 2px rgba(60, 64, 67, 0.149)',
  },
});
