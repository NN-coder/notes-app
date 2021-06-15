import { composeStyles, style } from '@vanilla-extract/css';
import { themeVars } from '../../themes.css';

const fixedElementClass = style({
  position: 'fixed',
  top: '0',
  left: '0',
});

const baseNavbarBgClass = composeStyles(
  fixedElementClass,
  style({
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    zIndex: 2,
  })
);

const transitionDuration = '0.3s';

export const navbarBgClass = {
  opened: composeStyles(
    baseNavbarBgClass,
    style({ opacity: '0.5', transition: `opacity ${transitionDuration}`, visibility: 'visible' })
  ),
  closed: composeStyles(
    baseNavbarBgClass,
    style({
      opacity: '0',
      transition: `opacity ${transitionDuration}, visibility 0s ease ${transitionDuration}`,
      visibility: 'hidden',
    })
  ),
};

const baseNavbarClass = composeStyles(
  fixedElementClass,
  style({
    height: '100%',
    width: '280px',
    transition: `transform ${transitionDuration}`,
    backgroundColor: themeVars.bodyBgColor,
    zIndex: 3,
  })
);

export const navbarClass = {
  opened: composeStyles(baseNavbarClass, style({ transform: 'translate(0)' })),
  closed: composeStyles(baseNavbarClass, style({ transform: 'translate(-280px)' })),
};

export const mainAppTitleClass = style({
  fontSize: '2.2rem',
  paddingLeft: '20px',
});
