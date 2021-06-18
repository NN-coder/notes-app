import { globalStyle, style } from '@vanilla-extract/css';
import { openNavbarBtnClass } from '../../NavBar/OpenNavbarBtn/style.css';

export const headerClass = style({
  padding: '12px',
  fontSize: '1.8rem',
  display: 'flex',
  alignItems: 'center',
});

globalStyle(`${headerClass} ${openNavbarBtnClass}`, {
  marginRight: '20px',
});
