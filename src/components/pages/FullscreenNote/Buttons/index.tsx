import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { MdArrowBack, MdRestore, MdDelete, MdDeleteForever } from 'react-icons/md';
import { useAppDispatch } from '../../../../redux/utils/hooks';
import {
  deleteNotes,
  moveNotesToTrash,
  restoreNotesFromTrash,
} from '../../../../redux/actions/notesActions';
import { btnClass, btnContainerClass } from './style.css';

export interface Props {
  noteId: string;
  isNoteInTrash: boolean;
}

export const Buttons: React.FC<Props> = React.memo(({ noteId, isNoteInTrash }) => {
  const dispatch = useAppDispatch();

  const handleRestoreBtnClick = useCallback(() => {
    dispatch(restoreNotesFromTrash([noteId]));
  }, [noteId]);

  const { push } = useHistory();
  const goBack = useCallback(() => push(isNoteInTrash ? '/trash' : '/home'), [isNoteInTrash]);

  const handleDeleteBtnClick = useCallback(() => {
    goBack();
    dispatch(isNoteInTrash ? deleteNotes([noteId]) : moveNotesToTrash([noteId]));
  }, [goBack, isNoteInTrash, noteId]);

  return (
    <div className={btnContainerClass}>
      <button
        className={btnClass}
        type="button"
        onClick={goBack}
        title="Go back"
        style={{ marginRight: 'auto' }}
      >
        <MdArrowBack />
      </button>

      {isNoteInTrash && (
        <button className={btnClass} type="button" onClick={handleRestoreBtnClick} title="Restore">
          <MdRestore />
        </button>
      )}

      <button
        className={btnClass}
        type="button"
        onClick={handleDeleteBtnClick}
        title={isNoteInTrash ? 'Delete forever' : 'Move to trash'}
      >
        {isNoteInTrash ? <MdDeleteForever /> : <MdDelete />}
      </button>
    </div>
  );
});
