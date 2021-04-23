import { DefaultTheme } from 'styled-components';

export type TThemeName = 'dark' | 'light';

export type TThemes = {
  [theme in TThemeName]: DefaultTheme;
};
