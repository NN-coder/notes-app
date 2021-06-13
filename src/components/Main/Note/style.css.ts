import { style } from '@vanilla-extract/css';
import { themeVars } from '../../../themes.css';

export const noteClass = style({
  padding: '15px',
  fontSize: '1.5rem',
  borderRadius: '5px',
  border: `1px solid ${themeVars.borderColor}`,
});
