import { composeStyles, style } from '@vanilla-extract/css';
import { themeVars } from '../../../themes.css';

export const inputContainerClass = style({
  position: 'relative',
});

export const inputClass = style({
  width: '100%',
  height: '45px',
  padding: '0 60px',
  fontSize: '1.6rem',
  border: 'none',
  borderRadius: '5px',
  backgroundColor: themeVars.searchInput.bg,
  boxShadow: themeVars.searchInput.shadow,
  selectors: {
    '&::placeholder': {
      opacity: '0.8',
      color: themeVars.controls,
    },
  },
});

const inputBtnClass = style({
  position: 'absolute',
  top: 'calc(50% - 13px)',
  width: '26px',
  height: '26px',
  color: themeVars.controls,
});

export const clearInputBtnClass = composeStyles(
  inputBtnClass,
  style({
    right: '10px',
  })
);

export const openNavbarBtnClass = composeStyles(
  inputBtnClass,
  style({
    left: '18px',
  })
);
