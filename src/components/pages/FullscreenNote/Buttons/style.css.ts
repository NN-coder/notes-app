import { style } from '@vanilla-extract/css';
import { themeVars } from '../../../../themes.css';

export const btnContainerClass = style({
  width: '100%',
  position: 'fixed',
  left: 0,
  top: 0,
  padding: '13px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: themeVars.controls,
});

export const btnClass = style({
  width: '26px',
  height: '26px',
  selectors: { '& + &': { marginLeft: '20px' } },
});
