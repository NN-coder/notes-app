import { composeStyles, style } from '@vanilla-extract/css';

export const fullscreenNoteClass = style({ padding: '0 8px' });

const baseClass = style({
  width: '100%',
  outline: 'none',
  whiteSpace: 'pre-wrap',
  wordWrap: 'break-word',
  wordBreak: 'break-word',
});

export const textClass = composeStyles(baseClass, style({ fontSize: '1.6rem' }));

export const titleClass = composeStyles(
  baseClass,
  style({
    fontSize: '2.2rem',
    fontWeight: 500,
    marginBottom: '15px',
  })
);
