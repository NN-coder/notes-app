import React from 'react';
import { createSelector } from 'reselect';
import { INote } from '../../api/types';
import { useAppSelector } from '../../redux/hooks';
import { INotesState } from '../../redux/reducers/notesReducer';
import { IAppState } from '../../redux/reducers/rootReducer';
import { Masonry } from '../Masonry';
import { emptyPlaceholder, errorPlaceholder, loadingPlaceholder } from './notesStatusPlaceholders';
import { Note } from './Note';

const notesSelector = createSelector<IAppState, string, INote[], INote[]>(
  (state) => state.searchState.searchText,
  (state) => state.notesState.notes,
  (searchText, notes) =>
    notes.filter((note) => note.text.toLowerCase().includes(searchText.toLowerCase()))
);

const notesStatusSelector = createSelector<
  IAppState,
  boolean,
  boolean,
  Pick<INotesState, 'hasError' | 'isLoading'>
>(
  (state) => state.notesState.isLoading,
  (state) => state.notesState.hasError,
  (isLoading, hasError) => ({ isLoading, hasError })
);

export const Main: React.FC = () => {
  const notes = useAppSelector(notesSelector);
  const notesStatus = useAppSelector(notesStatusSelector);

  if (notesStatus.isLoading) return loadingPlaceholder;
  if (notesStatus.hasError) return errorPlaceholder;
  if (notes.length === 0) return emptyPlaceholder;

  return (
    <main>
      <Masonry columnsCount={2} rowGap={10} columnGap={10}>
        {notes.map((note) => (
          <Note key={note.id} {...note} />
        ))}
      </Masonry>
    </main>
  );
};
