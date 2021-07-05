import React, { useCallback, useMemo } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { MdRestore } from 'react-icons/md';
import { BsTrash } from 'react-icons/bs';
import { useAppDispatch, useAppSelector } from '../../../../redux/utils/hooks';
import { moveNotesToTrash, restoreNotesFromTrash } from '../../../../redux/actions/notesActions';

export const DeleteAndRestoreBtn: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const trash = useAppSelector(({ notesState }) => notesState.trash);
  const isNoteInTrash = useMemo(() => trash.includes(id), [trash, id]);

  const { goBack } = useHistory();
  const dispatch = useAppDispatch();

  const handleClick = useCallback(() => {
    goBack();
    dispatch(isNoteInTrash ? restoreNotesFromTrash([id]) : moveNotesToTrash([id]));
  }, [isNoteInTrash, id]);

  return (
    <button
      type="button"
      onClick={handleClick}
      title={isNoteInTrash ? 'Restore' : 'Delete'}
      style={!isNoteInTrash ? { width: '23px', height: '23px' } : {}}
    >
      {isNoteInTrash ? <MdRestore size="100%" /> : <BsTrash size="100%" />}
    </button>
  );
};
