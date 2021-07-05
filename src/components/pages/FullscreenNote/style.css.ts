import { composeStyles, globalStyle, style } from '@vanilla-extract/css';
import { themeVars } from '../../../themes.css';

export const fullscreenNoteClass = style({ padding: '80px 8px 0' });

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

globalStyle(`${btnContainerClass} button`, {
  width: '26px',
  height: '26px',
});

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
