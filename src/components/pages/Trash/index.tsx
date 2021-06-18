import React from 'react';
import { createSelector } from 'reselect';
import { INote } from '../../../api/types';
import { IAppState } from '../../../redux/reducers/rootReducer';
import { useAppSelector } from '../../../redux/utils/hooks';
import { OpenNavbarBtn } from '../../NavBar/OpenNavbarBtn';
import { NotesMasonry } from '../../NotesMasonry';
import { headerClass } from './style.css';

const deletedNotesSelector = createSelector<IAppState, INote[], string[], INote[]>(
  (state) => state.notesState.notes,
  (state) => state.notesState.trash,
  (notes, trash) => notes.filter(({ id }) => trash.includes(id))
);

export const Trash: React.FC = () => {
  const deletedNotes = useAppSelector(deletedNotesSelector);

  return (
    <>
      <header className={headerClass}>
        <OpenNavbarBtn />
        Trash
      </header>
      <NotesMasonry notes={deletedNotes} />
    </>
  );
};
