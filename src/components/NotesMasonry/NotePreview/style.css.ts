import { composeStyles, style } from '@vanilla-extract/css';
import { themeVars } from '../../../themes.css';

export const notePreviewTitleClass = style({
  fontSize: '1.6rem',
  fontWeight: 500,
  marginBottom: '6px',
});

export const notePreviewTextClass = style({
  fontSize: '1.5rem',
});

const baseNotePreviewClass = style({
  padding: '15px',
  fontSize: '1.5rem',
  borderRadius: '5px',
  border: '1px solid',
  whiteSpace: 'pre-wrap',
  wordWrap: 'break-word',
  wordBreak: 'break-word',
});

export const defaultNotePreviewClass = composeStyles(
  baseNotePreviewClass,
  style({
    borderColor: themeVars.notePreviewBorderColor,
    backgroundColor: themeVars.noteColors.default,
  })
);

export const redNotePreviewClass = composeStyles(
  baseNotePreviewClass,
  style({
    borderColor: themeVars.noteColors.red,
    backgroundColor: themeVars.noteColors.red,
  })
);

export const blueNotePreviewClass = composeStyles(
  baseNotePreviewClass,
  style({
    borderColor: themeVars.noteColors.blue,
    backgroundColor: themeVars.noteColors.blue,
  })
);

export const brownNotePreviewClass = composeStyles(
  baseNotePreviewClass,
  style({
    borderColor: themeVars.noteColors.brown,
    backgroundColor: themeVars.noteColors.brown,
  })
);

export const greenNotePreviewClass = composeStyles(
  baseNotePreviewClass,
  style({
    borderColor: themeVars.noteColors.green,
    backgroundColor: themeVars.noteColors.green,
  })
);

export const yellowNotePreviewClass = composeStyles(
  baseNotePreviewClass,
  style({
    borderColor: themeVars.noteColors.yellow,
    backgroundColor: themeVars.noteColors.yellow,
  })
);
