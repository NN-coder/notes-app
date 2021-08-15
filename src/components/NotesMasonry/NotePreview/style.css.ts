import { style } from '@vanilla-extract/css';
import { themeVars } from '../../../themes.css';

export const notePreviewTitleClass = style({
  fontSize: '1.6rem',
  fontWeight: 500,
  marginBottom: '6px',
});

export const notePreviewTextClass = style({
  fontSize: '1.5rem',
});

export const notePreviewClass = style({
  padding: '15px',
  fontSize: '1.5rem',
  borderRadius: '5px',
  border: `1px solid ${themeVars.notePreviewBorderColor}`,
  whiteSpace: 'pre-wrap',
  wordWrap: 'break-word',
  wordBreak: 'break-word',
});
