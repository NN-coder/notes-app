import React from 'react';
import { createSelector } from 'reselect';
import { INote } from '../../api/types';
import { useAppSelector } from '../../redux/utils/hooks';
import { IAppState } from '../../redux/reducers/rootReducer';
import { Masonry } from '../Masonry';
import { emptyPlaceholder, errorPlaceholder, loadingPlaceholder } from './notesStatusPlaceholders';
import { Note } from './Note';

const notesSelector = createSelector<IAppState, string, INote[], INote[]>(
  (state) => state.searchState.searchText,
  (state) => state.notesState.notes,
  (searchText, notes) =>
    notes.filter(
      ({ text, title }) =>
        text.toLowerCase().includes(searchText.toLowerCase()) ||
        title.toLowerCase().includes(searchText.toLowerCase())
    )
);

export const Main: React.FC = () => {
  const notes = useAppSelector(notesSelector);
  const isLoading = useAppSelector(({ notesState }) => notesState.isLoading);
  const hasError = useAppSelector(({ notesState }) => notesState.hasError);

  if (isLoading) return loadingPlaceholder;
  if (hasError) return errorPlaceholder;
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
