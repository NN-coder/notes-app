import React from 'react';
import { Link } from 'react-router-dom';
import { INote } from '../../../api/types';
import {
  notePreviewTextClass,
  notePreviewTitleClass,
  defaultNotePreviewClass,
  redNotePreviewClass,
  yellowNotePreviewClass,
  blueNotePreviewClass,
  brownNotePreviewClass,
  greenNotePreviewClass,
} from './style.css';

const cropText = (text: string) => {
  if (text.length <= 140) return text;
  return `${text.slice(0, 140).trim()}...`;
};

const getNotePreviewClass = (color: INote['color']) => {
  if (color === 'red') return redNotePreviewClass;
  if (color === 'yellow') return yellowNotePreviewClass;
  if (color === 'blue') return blueNotePreviewClass;
  if (color === 'brown') return brownNotePreviewClass;
  if (color === 'green') return greenNotePreviewClass;
  return defaultNotePreviewClass;
};

export type Props = INote;

export const NotePreview: React.FC<Props> = ({ id, text, title, color }) => (
  <Link to={`/${id}`} className={getNotePreviewClass(color)}>
    {color}
    <div className={notePreviewTitleClass}>{title}</div>
    <p className={notePreviewTextClass}>{cropText(text)}</p>
  </Link>
);
