import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { fetchNotes } from '../redux/actions/notesActions';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { StyledMasonry } from './StyledMasonry';
import { StyledNote } from './StyledNote';

const Btn = styled.button.attrs({ type: 'button' })`
  width: 100px;
  height: 40px;
  margin: 20px;
  font-size: 20px;
  background: gold;
`;

export const App: React.FC = () => {
  const [columnsCount, setColumnsCount] = useState(2);

  const notes = useAppSelector((state) => state.notes);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (notes.status === 'loading' || notes.status === 'failure') {
      dispatch(fetchNotes());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <>
      <div>
        <Btn onClick={() => setColumnsCount(columnsCount + 1)}>+Column</Btn>
        <Btn onClick={() => setColumnsCount(columnsCount - 1)}>-Column</Btn>
      </div>

      <StyledMasonry columnsCount={columnsCount} rowGap={10} columnGap={10}>
        {notes.status === 'success' &&
          notes.value.map((note) => <StyledNote key={note.id} {...note} />)}
      </StyledMasonry>
    </>
  );
};
