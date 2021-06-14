import { composeStyles, style } from '@vanilla-extract/css';
import { themeVars } from '../../themes.css';

const fixedElementClass = style({
  position: 'fixed',
  top: '0',
  left: '0',
});

export const navbarBgClass = composeStyles(
  fixedElementClass,
  style({
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    zIndex: 2,
  })
);

export const navbarClass = composeStyles(
  fixedElementClass,
  style({
    height: '100%',
    width: '280px',
    backgroundColor: themeVars.bodyBgColor,
    zIndex: 3,
  })
);

export const mainAppTitleClass = style({
  fontSize: '2.2rem',
  paddingLeft: '20px',
});
