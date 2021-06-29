import { batch } from 'react-redux';
import { Dispatch } from 'redux';
import { fetchNotes as apiFetchNotes } from '../../api/fetchNotes';
import { INote } from '../../api/types';
import { createActionCreator, IAction } from '../utils/createActionCreator';

type TSetNotesLoadingStatus = IAction<'SET_NOTES_LOADING_STATUS', boolean>;
type TSetNotesErrorStatus = IAction<'SET_NOTES_ERROR_STATUS', boolean>;
type TAddNotes = IAction<'ADD_NOTES', INote[]>;
type TUpdateNote = IAction<'UPDATE_NOTE', Partial<Omit<INote, 'id'>> & Pick<INote, 'id'>>;
type TMoveNotesToTrash = IAction<'MOVE_NOTES_TO_TRASH', string[]>;
type TDeleteNotes = IAction<'DELETE_NOTES', string[]>;

export type TNotesActions =
  | TSetNotesLoadingStatus
  | TSetNotesErrorStatus
  | TAddNotes
  | TUpdateNote
  | TMoveNotesToTrash
  | TDeleteNotes;

export const addNotes = createActionCreator<TAddNotes>('ADD_NOTES');
export const updateNote = createActionCreator<TUpdateNote>('UPDATE_NOTE');
export const moveNotesToTrash = createActionCreator<TMoveNotesToTrash>('MOVE_NOTES_TO_TRASH');
export const deleteNotes = createActionCreator<TDeleteNotes>('DELETE_NOTES');

export const setNotesLoadingStatus = createActionCreator<TSetNotesLoadingStatus>(
  'SET_NOTES_LOADING_STATUS'
);
export const setNotesErrorStatus =
  createActionCreator<TSetNotesErrorStatus>('SET_NOTES_ERROR_STATUS');

export const fetchNotes = () => {
  return (dispatch: Dispatch<TNotesActions>): void => {
    dispatch(setNotesLoadingStatus(true));

    apiFetchNotes()
      .then((notes) =>
        batch(() => {
          dispatch(setNotesLoadingStatus(false));
          dispatch(setNotesErrorStatus(false));
          dispatch(addNotes(notes));
        })
      )
      .catch(() =>
        batch(() => {
          dispatch(setNotesLoadingStatus(false));
          dispatch(setNotesErrorStatus(true));
        })
      );
  };
};
