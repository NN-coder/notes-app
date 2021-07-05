import { globalStyle, style } from '@vanilla-extract/css';
import { themeVars } from '../../themes.css';
import { openNavbarBtnClass } from '../NavBar/OpenNavbarBtn/style.css';

export const headerClass = style({
  marginBottom: '5px',
  padding: '8px',
});

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
    '&::-webkit-search-cancel-button': {
      display: 'none',
    },
  },
});

export const clearInputBtnClass = style({
  width: '26px',
  height: '26px',
  color: themeVars.controls,
  right: '10px',
});

globalStyle(`${inputContainerClass} button`, {
  position: 'absolute',
  top: 'calc(50% - 13px)',
});

globalStyle(`${inputContainerClass} ${openNavbarBtnClass}`, { left: '18px' });
