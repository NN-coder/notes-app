import { composeStyles, style } from '@vanilla-extract/css';

const breakWordClass = style({
  whiteSpace: 'pre-wrap',
  wordWrap: 'break-word',
  wordBreak: 'break-word',
});

export const containerClass = style({ position: 'relative' });

export const placeholderClass = composeStyles(
  breakWordClass,
  style({ position: 'absolute', zIndex: 2, color: '#80868b' })
);

export const inputClass = composeStyles(
  breakWordClass,
  style({ position: 'relative', zIndex: 3, outline: 'none' })
);
