import { createTheme } from '@vanilla-extract/css';
import { INote } from './api/types';

export type TThemeName = 'dark' | 'light';
type TNoteColors = { [key in INote['color']]: string };

const darkNoteColors: TNoteColors = {
  default: 'transparent',
  red: '#5c2b29',
  yellow: '#635d19',
  green: '#345920',
  blue: '#1e3a5f',
  brown: '#442f19',
};

const lightNoteColors: TNoteColors = {
  default: 'transparent',
  red: '#f28b82',
  yellow: '#fff475',
  green: '#ccff90',
  blue: '#aecbfa',
  brown: '#e6c9a8',
};

export const [darkThemeClass, themeVars] = createTheme({
  bodyBgColor: '#202125',
  textColor: '#fdfeff',
  controls: '#9aa0a6',
  notePreviewBorderColor: '#606165',
  activeNavLinkBg: '#564c33',
  addNoteBtnColor: '#35363a',
  searchInput: {
    bg: '#2e2f33',
    shadow: '0 1px 2px 0 rgba(0, 0, 0, 0.6), 0 2px 6px 2px rgba(0, 0, 0, 0.302)',
  },
  noteColors: darkNoteColors,
});

export const lightThemeClass = createTheme(themeVars, {
  bodyBgColor: '#fff',
  textColor: '#5f5f5f',
  controls: '#5f6368',
  notePreviewBorderColor: '#dfdfdf',
  activeNavLinkBg: '#fdefc2',
  addNoteBtnColor: '#fff',
  searchInput: {
    bg: '#fff',
    shadow: '0 1px 2px 0 rgba(60, 64, 67, 0.302), 0 2px 6px 2px rgba(60, 64, 67, 0.149)',
  },
  noteColors: lightNoteColors,
});
