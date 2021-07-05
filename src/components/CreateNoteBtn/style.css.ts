import { style } from '@vanilla-extract/css';
import { themeVars } from '../../themes.css';

export const createNoteBtnClass = style({
  position: 'fixed',
  right: '30px',
  bottom: '30px',
  width: '55px',
  height: '55px',
  borderRadius: '50%',
  backgroundColor: themeVars.addNoteBtnColor,
  color: themeVars.controls,
  boxShadow: '0px 5px 10px -1px rgba(0, 0, 0, 0.2)',
});
