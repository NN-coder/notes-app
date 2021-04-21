import React, { useEffect } from 'react';
import { createSelector } from 'reselect';
import { fetchNotes } from '../redux/actions/notesActions';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { INotesState } from '../redux/reducers/notesReducer';
import { IAppState } from '../redux/reducers/rootReducer';
import { StyledHeader } from './StyledHeader';
import { StyledMasonry } from './StyledMasonry';
import { StyledNote } from './StyledNote';

const notesSelector = createSelector<IAppState, INotesState, string, INotesState>(
  (state) => state.notes,
  (state) => state.search.searchText,
  (notes, searchText) => ({
    ...notes,
    value: notes.value.filter((note) => note.text.includes(searchText)),
  })
);

export const App: React.FC = () => {
  const notes = useAppSelector(notesSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (notes.isLoading || notes.hasError) {
      dispatch(fetchNotes());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <StyledHeader />
      <StyledMasonry columnsCount={2} rowGap={10} columnGap={10}>
        {notes.value.map((note) => (
          <StyledNote key={note.id} {...note} />
        ))}
      </StyledMasonry>
    </>
  );
};
