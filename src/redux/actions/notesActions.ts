import { batch } from 'react-redux';
import { Dispatch } from 'redux';
import { fetchNotes as apiFetchNotes } from '../../api/fetchNotes';
import { INote } from '../../api/types';
import { createActionCreator, IAction } from '../utils/createActionCreator';

type TSetNotesLoadingStatus = IAction<'SET_NOTES_LOADING_STATUS', boolean>;
type TSetNotesErrorStatus = IAction<'SET_NOTES_ERROR_STATUS', boolean>;
type TAddNotes = IAction<'ADD_NOTES', INote[]>;
type TRemoveNotes = IAction<'REMOVE_NOTES', string[]>;

export type TNotesActions =
  | TSetNotesLoadingStatus
  | TSetNotesErrorStatus
  | TAddNotes
  | TRemoveNotes;

export const setNotesLoadingStatus = createActionCreator<TSetNotesLoadingStatus>(
  'SET_NOTES_LOADING_STATUS'
);
export const setNotesErrorStatus =
  createActionCreator<TSetNotesErrorStatus>('SET_NOTES_ERROR_STATUS');
export const addNotes = createActionCreator<TAddNotes>('ADD_NOTES');
export const removeNotes = createActionCreator<TRemoveNotes>('REMOVE_NOTES');

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
