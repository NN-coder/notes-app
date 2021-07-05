import React, { useCallback } from 'react';
import { BiPlus } from 'react-icons/bi';
import { useHistory } from 'react-router-dom';
import shortid from 'shortid';
import { addNotes } from '../../redux/actions/notesActions';
import { useAppDispatch } from '../../redux/utils/hooks';
import { createNoteBtnClass } from './style.css';

export const CreateNoteBtn: React.FC = () => {
  const dispatch = useAppDispatch();
  const { push } = useHistory();

  const handleClick = useCallback(() => {
    const id = shortid.generate();
    dispatch(addNotes([{ id, title: '', text: '', color: 'default' }]));
    push(`/${id}`);
  }, []);

  return (
    <button type="button" className={createNoteBtnClass} onClick={handleClick}>
      <BiPlus size="43px" />
    </button>
  );
};
