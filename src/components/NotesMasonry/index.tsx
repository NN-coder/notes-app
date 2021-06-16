import React, { ReactNode } from 'react';
import shortid from 'shortid';
import { INote } from '../../api/types';
import { MasonryColumn } from './MasonryColumn';
import { NotePreview } from './NotePreview';
import { notesMasonryClass } from './style.css';

const createColumns = (columnsCount: number, notes: INote[]) => {
  const columns = Array.from({ length: columnsCount }, () => [] as ReactNode[]);
  notes.forEach((note, index) =>
    columns[index % columnsCount].push(<NotePreview key={note.id} {...note} />)
  );
  return columns;
};

const columnKeys: string[] = [];
const getNewColumnKey = () => columnKeys[columnKeys.push(shortid.generate()) - 1];

export interface Props {
  notes: INote[];
}

export const NotesMasonry: React.FC<Props> = ({ notes }) => (
  <main
    className={notesMasonryClass}
    style={{
      gridTemplateColumns: `repeat(${2}, 1fr)`,
    }}
  >
    {createColumns(2, notes).map((column, index) => (
      <MasonryColumn key={columnKeys[index] || getNewColumnKey()}>{column}</MasonryColumn>
    ))}
  </main>
);
