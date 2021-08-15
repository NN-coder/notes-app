import { batch } from 'react-redux';
import { Dispatch } from 'redux';
import { fetchNotes as apiFetchNotes } from '../../api/fetchNotes';
import { INote } from '../../api/types';
import { createActionCreator, IAction } from '../utils/createActionCreator';

type TSetNotesStatus = IAction<'SET_NOTES_STATUS', { isLoading?: boolean; hasError?: boolean }>;
type TAddNotes = IAction<'ADD_NOTES', INote[]>;
type TMoveNotesToTrash = IAction<'MOVE_NOTES_TO_TRASH', string[]>;
type TRestoreNotesFromTrash = IAction<'RESTORE_NOTES_FROM_TRASH', string[]>;
type TDeleteNotes = IAction<'DELETE_NOTES', string[]>;
type TUpdateNote = IAction<
  'UPDATE_NOTE',
  Partial<Omit<INote, 'id' | 'editedTimestamp'>> & Pick<INote, 'id'>
>;

export type TNotesActions =
  | TSetNotesStatus
  | TAddNotes
  | TUpdateNote
  | TMoveNotesToTrash
  | TRestoreNotesFromTrash
  | TDeleteNotes;

export const setNotesStatus = createActionCreator<TSetNotesStatus>('SET_NOTES_STATUS');
export const addNotes = createActionCreator<TAddNotes>('ADD_NOTES');
export const updateNote = createActionCreator<TUpdateNote>('UPDATE_NOTE');
export const moveNotesToTrash = createActionCreator<TMoveNotesToTrash>('MOVE_NOTES_TO_TRASH');
export const deleteNotes = createActionCreator<TDeleteNotes>('DELETE_NOTES');
export const restoreNotesFromTrash = createActionCreator<TRestoreNotesFromTrash>(
  'RESTORE_NOTES_FROM_TRASH'
);

export const fetchNotes = () => {
  return (dispatch: Dispatch<TNotesActions>): void => {
    dispatch(setNotesStatus({ isLoading: true }));

    apiFetchNotes()
      .then((notes) =>
        batch(() => {
          dispatch(setNotesStatus({ isLoading: false, hasError: false }));
          dispatch(addNotes(notes));
        })
      )
      .catch(() => dispatch(setNotesStatus({ isLoading: false, hasError: true })));
  };
};
