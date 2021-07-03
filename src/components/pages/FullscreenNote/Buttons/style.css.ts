import { style } from '@vanilla-extract/css';
import { themeVars } from '../../../../themes.css';

export const containerClass = style({
  width: '100%',
  position: 'fixed',
  top: 0,
  left: 0,
  padding: '13px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: themeVars.controls,
});

export const btnClass = style({ width: '26px', height: '26px' });
export const trashBtnClass = style({ width: '23px', height: '23px' });
