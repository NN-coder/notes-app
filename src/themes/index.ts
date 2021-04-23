import { TThemes } from './types';

export const themes: TThemes = {
  dark: {
    bodyBgColor: '#202125',
    textColor: '#fdfeff',
    borderColor: '#606165',
    searchInput: {
      bg: '#2e2f33',
      shadow: '0 1px 2px 0 rgba(0, 0, 0, 0.6), 0 2px 6px 2px rgba(0, 0, 0, 0.302)',
      controls: '#a5a6aa',
    },
  },
  light: {
    bodyBgColor: '#fff',
    textColor: '#5f5f5f',
    borderColor: '#dfdfdf',
    searchInput: {
      bg: '#fff',
      shadow: '0 1px 2px 0 rgba(60, 64, 67, 0.302), 0 2px 6px 2px rgba(60, 64, 67, 0.149)',
      controls: '#5c5c5c',
    },
  },
};
