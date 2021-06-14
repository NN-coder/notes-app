import React from 'react';
import { INote } from '../../../api/types';
import { noteClass, noteTextClass, noteTitleClass } from './style.css';

const cropText = (text: string) => {
  if (text.length <= 140) return text;
  return `${text.slice(0, 140).trim()}...`;
};

export type Props = INote;

export const Note: React.FC<Props> = ({ text, title }) => (
  <div className={noteClass}>
    <div className={noteTitleClass}>{title}</div>
    <p className={noteTextClass}>{cropText(text)}</p>
  </div>
);
