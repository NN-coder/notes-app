import React from 'react';
import { Link } from 'react-router-dom';
import { INote } from '../../../api/types';
import { notePreviewTextClass, notePreviewTitleClass, notePreviewClass } from './style.css';

const cropText = (text: string, length: number) => {
  if (text.length <= length) return text;
  return `${text.slice(0, length).trim()}...`;
};

export type Props = INote;

export const NotePreview: React.FC<Props> = React.memo(({ id, text, title }) => (
  <Link to={`/${id}`} className={notePreviewClass}>
    <div className={notePreviewTitleClass}>{cropText(title, 50)}</div>
    <p className={notePreviewTextClass}>{cropText(text, 140)}</p>
  </Link>
));
