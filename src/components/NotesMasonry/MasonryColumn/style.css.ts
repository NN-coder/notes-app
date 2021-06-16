import { globalStyle, style } from '@vanilla-extract/css';

export const masonryColumnClass = style({
  display: 'flex',
  flexDirection: 'column',
});

globalStyle(`${masonryColumnClass} > *:nth-child(n + 2)`, { marginTop: '10px' });
