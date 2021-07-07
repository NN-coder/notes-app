import React, { useCallback, useMemo } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { MdArrowBack, MdRestore, MdDelete, MdDeleteForever } from 'react-icons/md';
import { useAppDispatch, useAppSelector } from '../../../../redux/utils/hooks';
import {
  deleteNotes,
  moveNotesToTrash,
  restoreNotesFromTrash,
} from '../../../../redux/actions/notesActions';
import { btnClass, btnContainerClass } from './style.css';

export const Buttons: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { goBack } = useHistory();
  const dispatch = useAppDispatch();

  const handleRestoreBtnClick = useCallback(() => {
    goBack();
    dispatch(restoreNotesFromTrash([id]));
  }, [id]);

  const trash = useAppSelector(({ notesState }) => notesState.trash);
  const isNoteInTrash = useMemo(() => trash.includes(id), [id]);

  const handleDeleteBtnClick = useCallback(() => {
    goBack();
    dispatch(isNoteInTrash ? deleteNotes([id]) : moveNotesToTrash([id]));
  }, [id]);

  return (
    <div className={btnContainerClass}>
      <button
        className={btnClass}
        type="button"
        onClick={goBack}
        title="Go back"
        style={{ marginRight: 'auto' }}
      >
        <MdArrowBack size="100%" />
      </button>

      {isNoteInTrash && (
        <button className={btnClass} type="button" onClick={handleRestoreBtnClick} title="Restore">
          <MdRestore size="100%" />
        </button>
      )}

      <button
        className={btnClass}
        type="button"
        onClick={handleDeleteBtnClick}
        title={isNoteInTrash ? 'Delete forever' : 'Move to trash'}
      >
        {isNoteInTrash ? <MdDeleteForever size="100%" /> : <MdDelete size="100%" />}
      </button>
    </div>
  );
};
