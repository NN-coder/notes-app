import React, { useCallback } from 'react';
import { MdArrowBack, MdRestore } from 'react-icons/md';
import { BsTrash } from 'react-icons/bs';
import { useHistory, useParams } from 'react-router-dom';
import { btnClass, containerClass, trashBtnClass } from './style.css';
import { useAppDispatch, useAppSelector } from '../../../../redux/utils/hooks';
import { moveNotesToTrash, restoreNotesFromTrash } from '../../../../redux/actions/notesActions';

export const Buttons: React.FC = () => {
  const { goBack } = useHistory();
  const dispatch = useAppDispatch();

  const { id } = useParams<{ id: string }>();
  const trash = useAppSelector(({ notesState }) => notesState.trash);

  const isNoteInTrash = trash.includes(id);

  const handleTrashBtnClick = useCallback(() => {
    goBack();
    dispatch(isNoteInTrash ? restoreNotesFromTrash([id]) : moveNotesToTrash([id]));
  }, [goBack, id, isNoteInTrash]);

  return (
    <div className={containerClass}>
      <button className={btnClass} type="button" onClick={goBack}>
        <MdArrowBack size="100%" />
      </button>
      <button
        className={isNoteInTrash ? btnClass : trashBtnClass}
        title={isNoteInTrash ? 'Restore' : 'Delete'}
        type="button"
        onClick={handleTrashBtnClick}
      >
        {isNoteInTrash ? <MdRestore size="100%" /> : <BsTrash size="100%" />}
      </button>
    </div>
  );
};
