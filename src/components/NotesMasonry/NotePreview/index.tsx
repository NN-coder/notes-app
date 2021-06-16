import React from 'react';
import { INote } from '../../../api/types';
import { NotePreviewClass, NotePreviewTextClass, NotePreviewTitleClass } from './style.css';

const cropText = (text: string) => {
  if (text.length <= 140) return text;
  return `${text.slice(0, 140).trim()}...`;
};

export type Props = INote;

export const NotePreview: React.FC<Props> = ({ text, title }) => (
  <div className={NotePreviewClass}>
    <div className={NotePreviewTitleClass}>{title}</div>
    <p className={NotePreviewTextClass}>{cropText(text)}</p>
  </div>
);
