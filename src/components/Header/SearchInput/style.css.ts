import { style } from '@vanilla-extract/css';
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

export const clearInputBtnClass = style({
  position: 'absolute',
  top: 'calc(50% - 15px)',
  right: '10px',
  width: '30px',
  height: '30px',
  color: themeVars.controls,
});
