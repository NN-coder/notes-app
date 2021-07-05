import React from 'react';
import { Link } from 'react-router-dom';
import { INote } from '../../../api/types';
import { themeVars } from '../../../themes.css';
import { notePreviewTextClass, notePreviewTitleClass, notePreviewClass } from './style.css';

const cropText = (text: string) => {
  if (text.length <= 140) return text;
  return `${text.slice(0, 140).trim()}...`;
};

export type Props = INote;

export const NotePreview: React.FC<Props> = ({ id, text, title, color }) => (
  <Link
    to={`/${id}`}
    className={notePreviewClass}
    style={{
      borderColor:
        color === 'default' ? themeVars.notePreviewBorderColor : themeVars.noteColors[color],
      backgroundColor: themeVars.noteColors[color],
    }}
  >
    <div className={notePreviewTitleClass}>{title}</div>
    <p className={notePreviewTextClass}>{cropText(text)}</p>
  </Link>
);
