import React from 'react';
import { INote } from '../../../api/types';
import { noteClass } from './style.css';

export type Props = INote;

export const Note: React.FC<Props> = ({ text }) => <div className={noteClass}>{text}</div>;
