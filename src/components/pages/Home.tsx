import React from 'react';
import { createSelector } from 'reselect';
import { INote } from '../../api/types';
import { useAppSelector } from '../../redux/utils/hooks';
import { IAppState } from '../../redux/reducers/rootReducer';
import { NotesMasonry } from '../NotesMasonry';

const notDeletedNotesSelector = createSelector<IAppState, INote[], string[], INote[]>(
  (state) => state.notesState.notes,
  (state) => state.notesState.trash,
  (notes, trash) => notes.filter(({ id }) => !trash.includes(id))
);

const notesSelector = createSelector<IAppState, INote[], string, INote[]>(
  notDeletedNotesSelector,
  (state) => state.searchState.searchText,
  (notes, searchText) =>
    notes.filter(
      ({ text, title }) =>
        text.toLowerCase().includes(searchText.toLowerCase()) ||
        title.toLowerCase().includes(searchText.toLowerCase())
    )
);

export const Home: React.FC = () => {
  const notes = useAppSelector(notesSelector);

  return <NotesMasonry notes={notes} />;
};
